class ChangeDateTypeInPuzzles < ActiveRecord::Migration[6.0]
  def change
    reversible do |dir|
      dir.up do
        change_column :puzzles, :date, :date
      end

      dir.down do
        change_column :puzzles, :date, :datetime
      end
    end
  end
end
