class Api::MicrosController < ApplicationController

  # before_action :require_logged_in!

  # def fetch

  #   # find Micro by id
  #   if params[:id]
  #     @micro = Micro.find_by(micro: params[:id])
  #     # OR find Micro by date
  #   elsif params[:date]
  #     @micro = Micro.find_by(micro: params[:date])
  #   end

  #   if @micro
  #     # render to JSON
  #     render json: @micro
  #   else
  #     errors = @micro.errors.full_messages
  #     render json: errors, status: 401
  #   end

  # end

end
