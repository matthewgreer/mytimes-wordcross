class AddJclueSetToMicros < ActiveRecord::Migration[5.2]
  def change
    add_column :micros, :jclue_set, :jsonb
  end
end
