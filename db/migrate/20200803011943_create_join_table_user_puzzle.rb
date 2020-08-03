class CreateJoinTableUserPuzzle < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :puzzles do |t|
      t.integer :user_id, null: false
      t.integer :puzzle_id, null: false
      t.string :puzzle_state, null: false
      t.datetime :timer_state, null: false
      t.datetime :completion_date_time, null: false
      t.timestamps
      t.index [:user_id, :puzzle_id], unique: true
      t.index [:puzzle_id, :user_id], unique: true
    end
  end
end
