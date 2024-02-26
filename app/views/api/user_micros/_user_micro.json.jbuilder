json.key_format! camelize: :lower
json.deep_format_keys!
json.user_micro do
  json.extract! @user_micro, :id, :user_id, :micro_id, :solved, :icon, :solving_state, :timer, :wordcross_date
  json.extract! @micro, :author, :clue_set, :label_set, :solution
end
