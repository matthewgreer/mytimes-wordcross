class Api::SessionsController < ApplicationController
  
  def create

    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login!(@user)
      render '/api/users/show'
    else
      errors = []
      errors << "Please enter your username or email address." if params[:user][:email] == ""
      errors << "Please enter a password." if params[:user][:password] == ""
      errors << "The email address and password you entered don't match any MYTrials account. Please try again." if errors.empty?
      render json: errors, status: 401
    end

  end


  # The structure below no longer works, because I need to differentiate
  # between short and empty password errors.

  # def create
  #   @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
  #   errors_array = []

  #   errors_array << 'email_error' if params[:user][:email] == ""
  #   errors_array << 'password_error' if params[:user][:password] == ""
  #   errors_array << 'short_password_error' if (params[:user][:password]).length < 6

  #   if @user.nil? && errors_array.empty?
  #     render json: ['invalid_user_error'], status: 401
  #   elsif @user
  #     login!(@user)
  #     render "/api/users/show"
  #   else
  #     render json: errors_array, status: 401
  #   end
  # end

  def destroy
    logout!
    render json: ['']
  end

end
