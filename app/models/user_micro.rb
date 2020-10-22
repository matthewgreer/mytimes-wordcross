# == Schema Information
#
# Table name: user_micros
#
#  id            :bigint           not null, primary key
#  solving_state :string           is an Array
#  timer         :integer          default(0), not null
#  solved        :boolean          default(FALSE), not null
#  user_id       :bigint           not null
#  micro_id      :bigint
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  puzzle_date   :datetime         not null
#

class UserMicro < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user
  belongs_to :micro

  def init_grid_state(solution)
    grid = solution.map do |row|
      row.map {|square| square == "#" ? "#" : ""}
    end
  end


end
