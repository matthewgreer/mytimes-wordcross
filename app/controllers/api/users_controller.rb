class Api::UsersController < ApplicationController

  before_action :require_logged_in!, except: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  # def show
  #   # not sure about this syntax (should it be User.find(params[:id])?)
  #   @user = current_user
  #   render :show
  # end

  # def update

  # end

  # def destroy

  # end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
