class CreatePuzzles < ActiveRecord::Migration[5.2]
  def change
    create_table :puzzles do |t|
      t.datetime :date, null: false
      t.string :answers, null: false
      t.string :clues, null: false
      t.timestamps
    end
  end
end
