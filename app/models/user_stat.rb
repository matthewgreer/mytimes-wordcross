
class UserStat < ApplicationRecord

  validates :user_id, presence: true, uniqueness: true

end
