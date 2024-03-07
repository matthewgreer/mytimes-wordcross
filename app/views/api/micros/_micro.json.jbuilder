json.key_format! camelize: :lower
json.deep_format_keys!
json.extract! micro, :id, :author, :clue_set, :label_set, :solution, :weekday
