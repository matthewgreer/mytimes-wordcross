class Api::UsersController < ApplicationController

  before_action :require_logged_in!, except: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      errors = @user.errors.full_messages || []
      if errors.include?("Email can't be blank")
        errors -= ["Email can't be blank"]
        errors << "Please enter your username or email address."
      end

      if errors.include?("Email has already been taken")
        errors -= ["Email has already been taken"]
        errors << "An account already exists for that email address. Please log in with the password."
      end

      if errors.include?("Password is too short (minimum is 6 characters)")
        errors -= ["Password is too short (minimum is 6 characters)"]
        if params[:user][:password] == ""
          errors << "Please enter a password."
        else
          errors << "Please provide a password that is between 6 and 255 characters in length."
        end
      end
      render json: {
        :messages => errors,
        :email => params[:user][:email]
      }, status: 422
    end
  end



  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      errors = @user.errors.full_messages
      render json: errors, status: 401
    end
  end

  def stats
    # should add error handling for invalid user id
    user = User.includes(:user_dailies).find(params[:id])
    @stats = {
      user_id: user.id,
      weekdays: {}
    }

    (1..7).each do |weekday| # 1 is Monday, 7 is Sunday (see below)
      @stats[:weekdays][weekday] = {
        average_time: nil,
        fastest_time: nil,
        fastest_time_date: nil,
        current_week_time: nil
      }
    end

    # May not need to include streak in stats, as it is currently an attribute of the user -- oof should change that. It's a stat.
    @stats[:streak] = user.streak

    # Total daily puzzles attempted
    total_dailies = user.user_dailies.count

    # Percentage of daily puzzles attempted that were solved
    @stats[:total_solved_dailies] = user.user_dailies.where(solved: true).count
    @stats[:percent_dailies_solved] = total_dailies > 0 ? (@stats[:total_solved_dailies] / total_dailies.to_f * 100).round(2) : 0

    # The following stats track solved daily puzzles sorted by day of the week. For MY Times purposes, a week is defined according to the NY Times's Monday to Sunday difficulty progression. However, the DOW function in Postgres returns a hash where a key of 0 is Sunday, 6 is Saturday. So we convert 0 to 7 for Sunday as we store the values in the appropriate "day" (1 - 7) in the @stats[:weekdays] hash.

    # Average solving time by each day of the week
    average_solving_times_by_weekday = user.user_dailies.where(solved: true).group("EXTRACT(DOW FROM wordcross_date)::int").average(:timer)
    # eg. => {0=>0.33e2, 1=>0.33e2, 2=>0.33e2, 3=>0.33e2, 4=>0.33e2, 5=>0.33e2, 6=>0.33e2}.
    # Convert time to integers before serializing to JSON.
    average_solving_times_by_weekday.each do |weekday, average_time|
      weekday = 7 if weekday == 0
      @stats[:weekdays][weekday][:average_time] = average_time.to_i
    end

    # Fastest solving time by each day of the week, with the date of that fastest solving time
    safe_user_id = user.id
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
    # Map the weekday to the correct day in the @stats[:weekdays] hash. Since 0 is Sunday, we convert it to 7 for our Monday to Sunday week.
    fastest_solving_times_by_weekday.each do |day|
      weekday = day["weekday"] == 0 ? 7 : day["weekday"]

      @stats[:weekdays][weekday][:fastest_time] = day["fastest_time"].to_i
      @stats[:weekdays][weekday][:fastest_time_date] = day["wordcross_date"].strftime("%m-%d-%Y")
    end

    # Include the solving times of the current week's solved daily puzzles. The current week is defined according to the NY Times Monday to Sunday difficulty progression. However, the DOW function in Postgres returns 0 for Sunday, 1 for Monday, etc. So, we will need to convert 0 to 7 for Sunday.
    start_of_week = Date.today.beginning_of_week(:monday)
    end_of_week = Date.today.end_of_week(:monday)
    daily_solving_times_this_week = user.user_dailies.where(solved: true)
                                                     .where(wordcross_date: start_of_week..end_of_week)
                                                     .pluck("EXTRACT(DOW FROM wordcross_date)::int", :timer)

    daily_solving_times_this_week.each do |weekday, solving_time|
      weekday = 7 if weekday == 0
      @stats[:weekdays][weekday][:current_week_time] = solving_time
    end

    render "api/users/stats"
  end

  private

  def user_params
    params.require(:user).permit(
      :id,
      :email,
      :password,
      :timezone,
      :last_gold_star_date,
      :streak
    )
  end

end
