class DropPuzzles < ActiveRecord::Migration[5.2]
  def change
    drop_table(:puzzles)
    drop_table(:puzzles_users)
  end
end
