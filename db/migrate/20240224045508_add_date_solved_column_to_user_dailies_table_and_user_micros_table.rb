class AddDateSolvedColumnToUserDailiesTableAndUserMicrosTable < ActiveRecord::Migration[6.0]
  def change
    add_column :user_dailies, :date_solved, :date, default: nil
    add_column :user_micros, :date_solved, :date, default: nil
  end
end
