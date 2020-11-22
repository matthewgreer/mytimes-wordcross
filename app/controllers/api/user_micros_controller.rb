class Api::UserMicrosController < ApplicationController

  def show

    # query for current user
    @user = User.find_by(id: params[:user_id])

    # turn user's timezone to Rails TimeZone Object
    tz = ActiveSupport::TimeZone[@user.timezone]
 
    # set wordcross_date to date passed in params OR default to the current date
    #   in the user's timezone
    wordcross_date = params[:wordcross_date] || tz.today.to_formatted_s(:db)
 
    # query for micro by date
    @micro = Micro.find_by(wordcross_date: wordcross_date)

    # query for user_micros that match by micro_id && user_id
    # get user_micro if it exists
    @user_micro = UserMicro.find_by(user_id: @user.id, micro_id: @micro.id)
 
    # create new user_micro from micro if not
    if !@user_micro
      @user_micro = UserMicro.new(
        solving_state: [],
        timer: [0, 0, 0],
        solved: false,
        user_id: @user.id,
        micro_id: @micro.id   
      )
      @user_micro.init_grid_state(@micro.solution)
      @user_micro.wordcross_date = @micro.wordcross_date
    end

    # commit to db and render user_micro and micro data to frontend as JSON
    if @user_micro.save
      # @response = {:user_micro => @user_micro, :micro => @micro}
      render :show
    else
      errors = @user_micro.errors.full_messages
      render json: errors, status: 401
    end

  end

  def update
  
    # query for user_micro by id
    @user_micro = UserMicro.find(params[:id])
    
    # update solving_state
    @user_micro.solving_state = params[:user_micro][:solving_state]

    # save to db (with updated timer, solved status)
    if @user_micro.update(user_micro_params)
      render json: @user_micro
    else
      errors = @user_micro.errors.full_messages
      render json: errors, status: 401
    end
  end

  private

  def user_micro_params
    params.require(:user_micro).permit(
      :id,
      :user_id,
      :wordcross_date,
      :solving_state,
      :timer,
      :solved
    )
  end

end
