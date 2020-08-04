class Api::UsersController < ApplicationController

  before_action :require_logged_in!, except: [:create]

  def create
    @user = User.new(user_params)
    errors_array = []
    
    errors_array << 'email_error' if params[:user][:email] == ""
    errors_array << 'password_error' if params[:user][:password] == ""

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: errors_array, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
