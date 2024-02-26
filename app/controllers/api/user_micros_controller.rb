class Api::UserMicrosController < ApplicationController

  def show

    # query for current user
    @user = User.find_by(id: params[:user_id])

    # query for micro by day of the week
    today = Date.today
    @micro = Micro.find_by(weekday: today.wday)

    # query for user_micro that matches user_id and today's date
    # get user_micro if it exists
    @user_micro = UserMicro.find_by(user_id: @user.id, wordcross_date: today)

    # create new user_micro from micro if it does not exist
    if !@user_micro
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

    # query for user_micro by id
    @user_micro = UserMicro.find(params[:id])

    # get micro
    @micro = Micro.find_by(id: @user_micro.micro_id)
    update_data = user_micro_params
    update_data[:solving_state] = update_data[:solving_state].values

    # save to db
    if @user_micro.update(update_data)
      render :show
    else
      errors = @user_micro.errors.full_messages
      render json: errors, status: 401
    end

  end

  private

  def user_micro_params
    params.require(:user_micro).permit(
      :id,
      :micro_id,
      :icon,
      :solved,
      :user_id,
      :wordcross_date,
      :timer,
      solving_state: {}
      )
  end

end
