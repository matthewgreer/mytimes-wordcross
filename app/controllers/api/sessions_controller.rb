class Api::SessionsController < ApplicationController
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['The email address and password you entered don\'t match any MYTimes account. Please try again.'], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    
    logout!
    # NYT site doesn't render any message upon logout. Just for testing.
    render json: { message: 'Goodbye.' }
  end
end
