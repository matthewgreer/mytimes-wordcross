json.user_micro do
  json.extract! @user_micro, :id, :user_id, :micro_id, :wordcross_date, :solved, :solving_state, :timer
  json.extract! @micro, :author, :clue_set, :solution
end
