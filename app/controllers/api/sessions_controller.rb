class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    errors_array = []

    errors_array << 'email_error' if params[:user][:email] == ""
    errors_array << 'password_error' if params[:user][:password] == ""

    if @user.nil? && errors_array.empty?
      debugger
      render json: ['invalid_user_error'], status: 401
    elsif @user
      debugger
      login!(@user)
      render "./api/users/show"
    else
      debugger
      render json: errors_array, status: 401
    end
    debugger

    # (params[:user][:email] != "" && params[:user][:password] != "")
    
    # errors_array = []
    # errors_array << 'email_error' if params[:user][:email] == ""
    # errors_array << 'password_error' if params[:user][:password] == ""
    # if !errors_array.empty?
    #   debugger
    #   render json: errors_array
    #   break
    # elsif @user.nil? 
    #   debugger
    #   render json: ['invalid_user_error']
    #   break
    # else
    #   debugger
    #   login!(@user)
    #   render "./api/users/show"
    # end

    
    # if @user
    #   login!(@user)
    #   render "./api/users/show"
    # elsif errors_array.empty? 
    #   errors_array << 'invalid_user_error'
    # end
    # render json: errors_array
    # if @user.nil?
    #   errors_array << 'invalid_user_error'

  end

  def destroy
    logout!
    render json: ['']
  end

end
