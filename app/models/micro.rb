class Micro < ApplicationRecord

  validates :date, presence: true, uniqueness: true
  validates :author, presence: true
  validates :solution, presence: true
  validates :clue_set, presence: true
  
  has_many :user_micros
    foreign_key: :user_micros_id
    class_name: :user_micros

    

end
