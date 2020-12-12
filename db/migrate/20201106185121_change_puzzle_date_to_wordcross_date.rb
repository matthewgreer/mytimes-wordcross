class ChangePuzzleDateToWordcrossDate < ActiveRecord::Migration[5.2]
  def change
    change_table :micros do |t|
      t.rename :puzzle_date, :wordcross_date
    end
    change_table :user_micros do |t|
      t.rename :puzzle_date, :wordcross_date
    end
  end
end
