class ApplicationController < ActionController::Base

  protect_from_forgery unless: -> { request.format.json? }

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_logged_in!
    unless logged_in?
      render json: { base: ['invalid credentials']}, status: 401
    end
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

end
