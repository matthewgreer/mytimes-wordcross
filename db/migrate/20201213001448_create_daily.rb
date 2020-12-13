class CreateDaily < ActiveRecord::Migration[5.2]
  def change
    create_table :dailies do |t|
      t.datetime "wordcross_date", null: false
      t.string "author", null: false
      t.string "solution", null: false, array: true
      t.string "label_set", null: false, array: true
      t.jsonb "clue_set", null: false
      t.timestamps
    end

    create_table :user_dailies do |t|
      t.string "solving_state", array: true
      t.boolean "solved", default: false, null: false
      t.datetime "wordcross_date", null: false
      t.string "timer", null: false, array: true
      t.integer "icon"
      t.belongs_to :user
      t.belongs_to :daily
      t.timestamps
    end

    change_table :dailies do |t|
      t.index :id
      t.index :wordcross_date
    end

    change_table :user_dailies do |t|
      t.index :wordcross_date
    end

    change_table :users do |t|
      t.datetime "last_gold_star_date"
      t.integer "streak", default: 0
    end

    change_table :user_micros do |t|
      t.integer "icon"
    end
  end
end
