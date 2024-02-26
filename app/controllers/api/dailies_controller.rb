class Api::DailiesController < ApplicationController

  def show
    # query for daily by date
    @daily = Daily.find_by(weekday: params[:weekday])

    if @daily
      render :show
    else
      errors = @daily.errors.full_messages
      render json: errors, status: 401
    end

  end

end
