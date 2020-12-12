class AddClueSetAsJsonb < ActiveRecord::Migration[5.2]
  def change
    add_column :micros, :clue_set, :jsonb, null: false
  end
end
