json.user_micro do
  json.extract! @user_micro, :id, :user_id, :micro_id, :solved, :solving_state, :timer, :wordcross_date
  json.extract! @micro, :author, :clue_set, :label_set, :solution
end
