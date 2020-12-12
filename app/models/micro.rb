# == Schema Information
#
# Table name: micros
#
#  id             :bigint           not null, primary key
#  wordcross_date :datetime         not null
#  author         :string           not null
#  solution       :string           not null, is an Array
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  clue_set       :jsonb            not null
#  label_set      :string           not null, is an Array
#

class Micro < ApplicationRecord

  validates :wordcross_date, presence: true, uniqueness: true
  validates :author, presence: true
  validates :solution, presence: true
  validates :clue_set, presence: true
  validates :label_set, presence: true
  
  has_many :user_micros

    

end
