class Api::UserStatsController < ApplicationController

  before_action :require_logged_in!

  def show
    @user = current_user
    unless @user
      render json: ["User not found"], status: 404
      return
    end

    @user_stat = UserStat.find_by(user_id: @user.id)

    # Total daily puzzles attempted
    @user_stat[:total_dailies] = @user.user_dailies.count

    # Total daily puzzles that were solved
    @user_stat[:total_solved_dailies] = @user.user_dailies.where(solved: true).count


    # The following stats track solved daily puzzles sorted by day of the week. For MY Times purposes, a week is defined according to the NY Times's Monday to Sunday difficulty progression. However, the DOW function in Postgres returns a hash where a key of 0 is Sunday, 6 is Saturday. This is fine to follow, as comparing best or average solving times by day of the week is not dependent on the start of the week.

    # Average solving time by each day of the week
    average_solving_times_by_weekday = user.user_dailies.where(solved: true).group("EXTRACT(DOW FROM wordcross_date)::int").average(:timer)
    # eg. => {0=>0.33e2, 1=>0.33e2, 2=>0.33e2, 3=>0.33e2, 4=>0.33e2, 5=>0.33e2, 6=>0.33e2}.
    # Convert time to integers before serializing to JSON.
    average_solving_times_by_weekday.each do |weekday, average_time|
      @user_stat[:average_weekday_times][weekday] = average_time.to_i
    end

    # Fastest solving time by each day of the week, with the date of that fastest solving time

    safe_user_id = @user_stat.user_id # This is safe from SQL injection, having been validated by the UserStat model.

    sql = <<-SQL
    WITH RankedUserDailies AS (
      SELECT
        user_dailies.*,
        EXTRACT(DOW FROM wordcross_date)::int AS weekday,
        RANK() OVER (PARTITION BY EXTRACT(DOW FROM wordcross_date) ORDER BY timer ASC) AS rank
      FROM
        user_dailies
      WHERE
        user_id = #{safe_user_id} AND solved = true
    )
    SELECT
      weekday,
      timer AS fastest_time,
      wordcross_date
    FROM
      RankedUserDailies
    WHERE
      rank = 1;
    SQL
    fastest_solving_times_by_weekday = ActiveRecord::Base.connection.execute(sql).to_a
    # eg. => [{"weekday"=>0, "fastest_time"=>300, "wordcross_date"=>"2019-01-06"}, {"weekday"=>1, "fastest_time"=>300, "wordcross_date"=>"2019-01-07"}, {"weekday"=>2, "fastest_time"=>300, "wordcross_date"=>"2019-01-08"}, ... {"weekday"=>6, "fastest_time"=>300, "wordcross_date"=>"2019-01-12"}]
    fastest_solving_times_by_weekday.each do |day|
      weekday = day["weekday"]

      @user_stat[:best_weekday_times][weekday] = day["fastest_time"].to_i
      @user_stat[:best_weekday_times_dates][weekday] = Date.new(day["wordcross_date"])
    end

    # Include the solving times of the current week's solved daily puzzles.
    # The current week is defined according to the NY Times Monday to Sunday difficulty progression. However, the DOW function in Postgres returns 0 for Sunday, 1 for Monday, etc. This is fine to follow here, as well. As long as we designate Monday as the first day of the week, we'll capture the correct Sunday solving time, not that of the prior week.
    start_of_week = Date.today.beginning_of_week(:monday)
    end_of_week = Date.today.end_of_week(:monday)
    @user_stat[:current_weekday_times] = user.user_dailies.where(solved: true)
                                                     .where(wordcross_date: start_of_week..end_of_week)
                                                     .pluck("EXTRACT(DOW FROM wordcross_date)::int", :timer)

    if @user_stat.save
      render "api/user_stats/show"
    else
      errors = @user_stat.errors.full_messages
      render json: errors, status: 404
    end
  end

  def update
    @user_stat = UserStat.find_by(user_id: current_user.id)

    if @user_stat.update(user_stat_params)
      render "api/user_stats/show"
    else
      errors = @user_stat.errors.full_messages
      render json: errors, status: 401
    end

  end

  private

  def user_stat_params
    params.require(:user_stat).permit(:user_id, :current_streak, :longest_streak, :total_dailies, :total_solved_dailies, :last_gold_checkmark_date, :best_weekday_times, :best_weekday_times_dates, :average_weekday_times, :current_weekday_times)
  end
end
