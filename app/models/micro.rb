# == Schema Information
#
# Table name: micros
#
#  id          :bigint           not null, primary key
#  puzzle_date :datetime         not null
#  author      :string           not null
#  solution    :string           not null, is an Array
#  clue_set    :string           not null, is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Micro < ApplicationRecord

  validates :puzzle_date, presence: true, uniqueness: true
  validates :author, presence: true
  validates :solution, presence: true
  validates :clue_set, presence: true
  
  has_many :user_micros

    

end
