# == Schema Information
#
# Table name: user_dailies
#
#  id             :bigint           not null, primary key
#  solving_state  :string           is an Array
#  solved         :boolean          default(FALSE), not null
#  wordcross_date :date             not null
#  icon           :integer
#  user_id        :bigint
#  daily_id       :bigint
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  timer          :integer          default(0)
#  date_solved    :date
#

class UserDaily < ApplicationRecord
  after_save :update_user_stat

  validates :user_id, presence: true

  belongs_to :user
  belongs_to :daily

  def init_grid_state(solution)
    self.solving_state = solution.map do |row|
      row.map {|square| square == "#" ? "#" : ""}
    end
  end

  private

  def gold_checkmark?
    self.solved && self.date_solved == self.wordcross_date
  end

  def update_user_stat
    user_stat = UserStat.find_by(user: self.user)
    user_stat.update_streak_for(gold_checkmark?, self.wordcross_date)
  end

end
