class AddTempTimerToUserMicros < ActiveRecord::Migration[6.0]
  def change
    add_column :user_micros, :temp_timer_seconds, :integer, default: 0
  end
end
