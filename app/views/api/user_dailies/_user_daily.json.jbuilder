json.key_format! camelize: :lower
json.deep_format_keys!

json.extract! user_daily, :id, :user_id, :daily_id, :solved, :icon, :solving_state, :timer, :wordcross_date
