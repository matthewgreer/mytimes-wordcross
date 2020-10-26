class Api::UserMicrosController < ApplicationController

  def show

    # query for current user
    @user = User.find_by(id: params[:user_id])

    # turn user's timezone to Rails TimeZone Object
    tz = ActiveSupport::TimeZone[@user.timezone]
 
    # set puzzle_date to date passed in params OR default to the current date
    #   in the user's timezone
    puzzle_date = params[:puzzle_date] || tz.today.to_formatted_s(:db)
 
    # query for micro by date
    @micro = Micro.find_by(puzzle_date: puzzle_date)

    # query for user_micros that match by micro_id && user_id
    # get user_micro if it exists
    @user_micro = UserMicro.find_by(user_id: @user.id, micro_id: @micro.id)
 
    # create new user_micro from micro if not
    if !@user_micro
      @user_micro = UserMicro.new(
        solving_state: [],
        timer: 0,
        solved: false,
        user_id: @user.id,
        micro_id: @micro.id   
      )
      @user_micro.init_grid_state(@micro.solution)
      @user_micro.puzzle_date = @micro.puzzle_date
      @user_micro.save
    end

    # send user_micro and micro data as JSON
    if @user_micro
      response = {:user_micro => @user_micro, :micro => @micro}
      render json: response
    else
      errors = @user_micro.errors.full_messages
      render json: errors, status: 401
    end

  end

  def update
    # query for user_micro by id
    @user_micro = UserMicro.find(params[:id])
    
    # update solving_state && timer && solved
    @user_micro.solving_state = params[:user_micro][:solving_state]
    @user_micro.timer = params[:user_micro][:timer]
    @user_micro.solved = params[:user_micro][:solved]

    # save to db
    if @user_micro.save
      render json: @user_micro
    else
      errors = @user_micro.errors.full_messages
      render json: errors, status: 401
    end
  end

  # private

  # def user_micro_params
  #   params.require(:user_micro).permit(:id, :user_id, :puzzle_date)
  # end

end
