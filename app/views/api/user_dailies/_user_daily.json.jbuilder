json.user_daily do
  json.extract! @user_daily, :id, :user_id, :daily_id, :solved, :icon, :solving_state, :timer, :wordcross_date
  json.extract! @daily, :author, :clue_set, :label_set, :solution
end
