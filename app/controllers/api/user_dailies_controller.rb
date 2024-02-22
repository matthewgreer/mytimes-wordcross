class Api::UserDailiesController < ApplicationController

  def show

    # query for current user
    @user = User.find_by(id: params[:user_id])

    # failsafe in case user's timezone not recorded in db
    if !@user.timezone
      @user.timezone = "America/New_York"
    end

    # turn user's timezone to Rails TimeZone Object
    tz = ActiveSupport::TimeZone[@user.timezone]

    # set wordcross_date to date passed in params OR default to the current date
    #   in the user's timezone
    wordcross_date = params[:wordcross_date] || tz.today.to_formatted_s(:db)

    # query for daily by date
    @daily = Daily.find_by(wordcross_date: wordcross_date)

    # query for user_dailies that match by daily_id && user_id
    # get user_daily if it exists
    @user_daily = UserDaily.find_by(user_id: @user.id, daily_id: @daily.id)

    # create new user_daily from daily if it does not exist
    if !@user_daily
      @user_daily = UserDaily.new(
        daily_id: @daily.id,
        icon: 1,
        solved: false,
        user_id: @user.id,
        wordcross_date: @daily.wordcross_date,
        timer: [0, 0, 0]
      )
      @user_daily.init_grid_state(@daily.solution)
    end

    # commit to db and render user_daily and daily data to frontend as JSON
    if @user_daily.save
      render :show
    else
      errors = @user_daily.errors.full_messages
      render json: errors, status: 401
    end

  end


  def update

    # query for user_daily by id
    @user_daily = UserDaily.find(params[:id])

    # get daily
    @daily = Daily.find_by(id: @user_daily.daily_id)
    update_data = user_daily_params
    update_data[:solving_state] = update_data[:solving_state].values

    # save to db
    if @user_daily.update(update_data)
      render :show
    else
      errors = @user_daily.errors.full_messages
      render json: errors, status: 401
    end

  end

  private

  def user_daily_params
    params.require(:user_daily).permit(
      :id,
      :daily_id,
      :icon,
      :solved,
      :user_id,
      :wordcross_date,
      timer: [],
      solving_state:{}
      )
  end

end
