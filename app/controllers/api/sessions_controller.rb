class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    errors_array = []

    errors_array << 'email_error' if params[:user][:email] == ""
    errors_array << 'password_error' if params[:user][:password] == ""

    if @user.nil? && errors_array.empty?
      render json: ['invalid_user_error'], status: 401
    elsif @user
      login!(@user)
      render "/api/users/show"
    else
      render json: errors_array, status: 401
    end
  end

  def destroy
    logout!
    render json: ['']
  end

end
