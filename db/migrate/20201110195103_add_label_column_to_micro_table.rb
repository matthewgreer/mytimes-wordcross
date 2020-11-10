class AddLabelColumnToMicroTable < ActiveRecord::Migration[5.2]
  def change
    add_column :micros, :label_set, :string, null: false, array: true
  end
end
