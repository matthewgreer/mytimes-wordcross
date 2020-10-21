class AddDateToUserMicro < ActiveRecord::Migration[5.2]
  def change
    change_table :user_micros do |t|
      t.datetime :date
      t.index :date
    end
  end
end
