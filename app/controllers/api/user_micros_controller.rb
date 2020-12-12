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
 
    # create new user_micro from micro if it does not exist
    if !@user_micro
      @user_micro = UserMicro.new(
        micro_id: @micro.id,
        solved: false,
        user_id: @user.id,
        wordcross_date: @micro.wordcross_date,
        timer: [0, 0, 0]
        # solving_state: []
      )
      @user_micro.init_grid_state(@micro.solution)
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
      :solved,
      :user_id,
      :wordcross_date,
      timer: [],
      solving_state:{}
      )
  end

end
