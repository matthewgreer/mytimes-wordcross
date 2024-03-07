json.key_format! camelize: :lower
json.deep_format_keys!

json.extract! user_micro, :id, :user_id, :micro_id, :solved, :icon, :solving_state, :timer, :wordcross_date
