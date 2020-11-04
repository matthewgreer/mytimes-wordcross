class Api::MicrosController < ApplicationController

  def show
    # query for micro by date
    @micro = Micro.find_by(puzzle_date: params[:puzzle_date])
    
    if @micro
      render :show
    else
      errors = @micro.errors.full_messages
      render json: errors, status: 401
    end

  end

end