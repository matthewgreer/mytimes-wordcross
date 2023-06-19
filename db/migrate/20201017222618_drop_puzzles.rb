class DropPuzzles < ActiveRecord::Migration[5.2]
  def change
    drop_table :puzzles, if_exists: true
    drop_table :puzzles_users, if_exists: true
  end
end
