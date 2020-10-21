# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  email               :string           not null
#  session_token       :string           not null
#  password_digest     :string           not null
#  leaderboard_alias   :string
#  leaderboard_url_key :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  timezone            :string
#

class User < ApplicationRecord

  attr_reader :password

  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  # do we need a validation for session_token???
  # validates :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :leaderboard_alias, :leaderboard_url_key, uniqueness: true, allow_nil: true

  has_many :user_micros, dependent: :destroy

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
