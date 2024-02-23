class CreateUserStatsTableAndChangeOthers < ActiveRecord::Migration[6.0]
  def change
    create_table :user_stats do |t|
      t.belongs_to :user, null: false, foreign_key: true, index: true
      t.integer :current_streak, default: 0
      t.integer :longest_streak, default: 0
      t.integer :total_dailies, default: 0
      t.integer :total_solved_dailies, default: 0
      t.date :last_gold_checkmark_date
      t.jsonb :best_weekday_times, default: {}
      t.jsonb :best_weekday_times_dates, default: {}
      t.jsonb :average_weekday_times, default: {}
      t.jsonb :current_weekday_times, default: {}
      t.timestamps
    end

    change_table :users do |t|
      t.remove :timezone, :last_gold_star_date, :streak, :leaderboard_alias, :leaderboard_url_key
    end

    change_column :user_dailies, :wordcross_date, :date, null: false
    change_column :user_micros, :wordcross_date, :date, null: false
    remove_index :dailies, :wordcross_date
    remove_index :micros, :wordcross_date
    remove_column :dailies, :wordcross_date, :datetime
    remove_column :micros, :wordcross_date, :datetime
    add_column :dailies, :weekday, :integer, null: false, index: true
    add_column :micros, :weekday, :integer, null: false, index: true
  end
end
