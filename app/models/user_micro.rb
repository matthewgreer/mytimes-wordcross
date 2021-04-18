# == Schema Information
#
# Table name: user_micros
#
#  id             :bigint           not null, primary key
#  solving_state  :string           is an Array
#  solved         :boolean          default(FALSE), not null
#  user_id        :bigint           not null
#  micro_id       :bigint
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  wordcross_date :datetime         not null
#  timer          :string           not null, is an Array
#  icon           :integer
#

class UserMicro < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user
  belongs_to :micro

  def init_grid_state(solution)
    self.solving_state = solution.map do |row|
      row.map {|square| square == "#" ? "#" : ""}
    end
  end

end
