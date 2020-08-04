class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    
    # drop_table :users

    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :leaderboard_alias
      t.string :leaderboard_url_key
      t.timestamps
    end
  end
end
