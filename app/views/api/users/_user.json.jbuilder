json.key_format! camelize: :lower
json.deep_format_keys!

  json.extract! user, :id, :email
