class CreateMicros < ActiveRecord::Migration[5.2]
  def change
    create_table :micros do |t|
      t.datetime 'date', null: false
      t.string 'author', null: false
      t.string 'solution', array: true, null: false
      t.string 'clue_set', array: true, null: false
      t.timestamps
    end
    
    create_table :user_micros do |t|
      t.string 'solving_state', array: true
      t.integer 'timer'
      t.boolean 'solved'
      t.belongs_to :user
      t.belongs_to :micros
      t.timestamps
    end

    change_table :micros do |t|
      t.index :date
      t.index :id
    end

  end
end
