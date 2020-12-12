class ChangeMicroClueSetToJsonb < ActiveRecord::Migration[5.2]
  def change
    remove_column :micros, :jclue_set, :jsonb
    remove_column :micros, :clue_set
  end
end
