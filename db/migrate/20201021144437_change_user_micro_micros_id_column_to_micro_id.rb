class ChangeUserMicroMicrosIdColumnToMicroId < ActiveRecord::Migration[5.2]
  def change
    rename_column :user_micros, :micros_id, :micro_id
  end
end
