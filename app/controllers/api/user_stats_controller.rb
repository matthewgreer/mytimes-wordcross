class Api::UserStatsController < ApplicationController

  before_action :require_logged_in!

  def update
    @user_stat = UserStat.find_by(user_id: current_user.id)

    if @user_stat.update(user_stat_params)
      render :show
    else
      errors = @user_stat.errors.full_messages
      render json: errors, status: 401
    end

  end

  private

  def user_stat_params
    params.require(:user_stat).permit(:current_streak, :longest_streak, :total_dailies, :total_solved_dailies, :last_gold_checkmark_date, :best_weekday_times, :best_weekday_times_dates, :average_weekday_times, :current_weekday_times)
  end
end
