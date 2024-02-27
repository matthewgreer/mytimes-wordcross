class Api::UserMicrosController < ApplicationController

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


    # query for user_micro that matches the current user and the current day
    # get user_micro if it exists, and its associated micro
    @user_micro = UserMicro.includes(:micro)
                           .where(user_id: @user.id, wordcross_date: today)
                           .first

    if @user_micro
      @micro = @user_micro.micro
    else
      byebug # figure out why the record is not found
    # create new user_micro from micro if it does not exist
      @micro = Micro.find_by(weekday: today.wday)
      @user_micro = UserMicro.new(
        micro_id: @micro.id,
        icon: 1,
        solved: false,
        user_id: @user.id,
        wordcross_date: today,
        timer: 0
      )
      @user_micro.init_grid_state(@micro.solution)
    end

    # commit to db and render user_micro and micro data to frontend as JSON
    if @user_micro.save
      render "api/user_micros/show"
    else
      errors = @user_micro.errors.full_messages
      render json: errors, status: 401
    end

  end


  def update

    # get strong params, and ensure that the solving state is valid.
    update_data = user_micro_params
    # If solving_state was invalid, the perform? check will detect that the error was rendered and return early to prevent a double render.
    return if performed?

    # query for user_micro by id
    @user_micro = UserMicro.find(params[:id])


    # save to db
    # NOTE - no update_user_stat method is called after the user_micro is saved, as micros aren't part of the user stats
    # if successful, render user_micro and micro data to frontend as JSON
    if @user_micro.update(update_data)
      # get micro
      @micro = Micro.find_by(id: @user_micro.micro_id)
      render :show
    else
      errors = @user_micro.errors.full_messages
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

  def user_micro_params
    permitted = params.require(:user_micro).permit(
      :id,
      :micro_id,
      :icon,
      :solved,
      :user_id,
      :wordcross_date,
      :timer
    )
    if validate_solving_state(params[:user_micro][:solving_state])
      permitted[:solving_state] = params[:user_micro][:solving_state]
    else
      # if solving_state is invalid, log error and discontinue the update
      Rails.logger.error("Invalid solving state: #{params[:user_micro][:solving_state]}")
      render json: ["Invalid solving state"], status: :unprocessable_entity
      return
    end
    permitted
  end
end
