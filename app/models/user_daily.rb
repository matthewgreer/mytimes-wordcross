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
#

class UserDaily < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user
  belongs_to :daily

  def init_grid_state(solution)
    self.solving_state = solution.map do |row|
      row.map {|square| square == "#" ? "#" : ""}
    end
  end

end
