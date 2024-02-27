class Api::UserDailiesController < ApplicationController

  def show

    # query for current user
    @user = User.find_by(id: params[:user_id])

    # handle case where user is not found
    unless @user
      render json: ["User not found"], status: 404
      return
    end

    # get current day of the week
    today = Date.today

    # query for a user_daily matching the current user and the current day
    # get user_daily if it exists, and its associated daily
    @user_daily = UserDaily.includes(:daily)
                           .where(user_id: @user.id, wordcross_date: today)
                           .first

    if @user_daily
      @daily = @user_daily.daily
    else
      byebug # figure out why the record is not found
      # create new user_daily from daily if it does not exist
      @daily = Daily.find_by(weekday: today.wday)
      @user_daily = UserDaily.new(
        daily_id: @daily.id,
        icon: 1,
        solved: false,
        user_id: @user.id,
        wordcross_date: today,
        timer: 0
      )
      @user_daily.init_grid_state(@daily.solution)
    end

    # commit to db and render user_daily and daily data to frontend as JSON
    if @user_daily.save
      render "api/user_dailies/show"
    else
      errors = @user_daily.errors.full_messages
      render json: errors, status: 401
    end

  end


  def update

    # get strong params, and ensure that the solving state is valid.
    update_data = user_daily_params
    # If solving_state was invalid, the perform? check will detect that the error was rendered and return early to prevent a double render.
    return if performed?

    # query for user_daily by id
    @user_daily = UserDaily.find(params[:id])


    # save to db
    # NOTE - the update_user_stat method is called after the user_daily is saved
    # if successful, render user_daily and daily data to frontend as JSON
    if @user_daily.update(update_data)
      # get daily
      @daily = Daily.find_by(id: @user_daily.daily_id)
      render :show
    else
      errors = @user_daily.errors.full_messages
      render json: errors, status: 401
    end

  end

  private

  # ensuring strong params for the solving_state's array of nested arrays of strings requires a custom validation method
  def validate_solving_state(solving_state)
    return false unless solving_state.is_a?(Array)
    return false unless solving_state.all? do |row|
      row.is_a?(Array) && row.all? do |square|
        square.is_a?(String) && square.length < 2
      end
    end
    true
  end

  def user_daily_params
    permitted = params.require(:user_daily).permit(
      :id,
      :daily_id,
      :icon,
      :solved,
      :user_id,
      :wordcross_date,
      :timer
    )
    if validate_solving_state(params[:user_daily][:solving_state])
      permitted[:solving_state] = params[:user_daily][:solving_state]
    else
      # if solving_state is invalid, log error and discontinue the update
      Rails.logger.error("Invalid solving state: #{params[:user_daily][:solving_state]}")
      render json: ["Invalid solving state"], status: :unprocessable_entity
      return
    end
    permitted
  end
end
