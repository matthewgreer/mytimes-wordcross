class CreateMicros < ActiveRecord::Migration[6.0]
  def change
    create_table :micros do |t|
      t.datetime 'wordcross_date', null: false
      t.string 'author', null: false
      t.string 'solution', array: true, null: false
      t.string 'label_set', array: true, null: false
      t.jsonb 'clue_set', null: false
      t.timestamps
    end

    create_table :user_micros do |t|
      t.string 'solving_state', array: true
      t.boolean 'solved', default: false, null: false
      t.datetime 'wordcross_date', null: false
      t.string 'timer', null: false, array: true
      t.integer 'icon'
      t.belongs_to :user
      t.belongs_to :micro
      t.timestamps
    end

    change_table :micros do |t|
      t.index :id
      t.index :wordcross_date
    end

    change_table :user_micros do |t|
      t.index :wordcross_date
    end
  end
end
