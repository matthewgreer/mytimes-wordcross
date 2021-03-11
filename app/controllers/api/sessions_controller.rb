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
      errors << "The email address and password you entered don't match any MYTimes account. Please try again." if errors.empty?
      render json: { :messages => errors, :email => params[:user][:email] }, status: 422
    end

  end

  def destroy
    logout!
    render json: ['']
  end

end
