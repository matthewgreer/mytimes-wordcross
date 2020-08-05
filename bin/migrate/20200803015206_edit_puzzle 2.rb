class EditPuzzle < ActiveRecord::Migration[5.2]
  def change
    change_column :puzzles, :date, :date
  end
end
