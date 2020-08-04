class Api::UsersController < ApplicationController

  before_action :require_logged_in!, except: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      errors = @user.errors.full_messages || []
      if errors.include?("Email can't be blank")
        errors -= ["Email can't be blank"]
        errors << "Please enter your username or email address."
      end
      
      if errors.include?("Password is too short (minimum is 6 characters)")
        errors -= ["Password is too short (minimum is 6 characters)"]
        if params[:user][:password] == ""
          errors << "Please enter a password."
        else
          errors << "Please provide a password that is between 6 and 255 characters in length."
        end
      end
      render json: errors, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
