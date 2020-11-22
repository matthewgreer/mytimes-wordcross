class ChangeTimerColumnToArray < ActiveRecord::Migration[5.2]
  def change
    remove_column :user_micros, :timer, :integer, default: 0, null: false
    add_column :user_micros, :timer, :string, array: true, null: false
  end
end
