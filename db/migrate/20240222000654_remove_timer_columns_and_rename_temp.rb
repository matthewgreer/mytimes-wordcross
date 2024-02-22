class RemoveTimerColumnsAndRenameTemp < ActiveRecord::Migration[6.0]
  def change
    remove_column :user_dailies, :timer
    remove_column :user_micros, :timer
    rename_column :user_dailies, :temp_timer_seconds, :timer
    rename_column :user_micros, :temp_timer_seconds, :timer
  end
end
