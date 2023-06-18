class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :timezone
      t.string :last_gold_star_date
      t.integer :streak, default: 0
      t.string :leaderboard_alias
      t.string :leaderboard_url_key
      t.timestamps
    end
  end
end
