class MicrosController < ApplicationController

  before_action :require_logged_in!

  def show

    # find Micro by date OR
    # find Micro by id
    
    if params[:id]
      @micro = Micro.find_by(micro: params[:id])
    elsif params[:date]
      @micro = Micro.find_by(micro: params[:date])
    end

    if @micro
      # render to JSON
      render json: @micro
    end
    # or redirect to root?
  end

  private

  def micro_params
    params.require(:micro).permit(:id, :date)
  end

end
