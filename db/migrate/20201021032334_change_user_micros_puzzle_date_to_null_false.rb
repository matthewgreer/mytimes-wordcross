class ChangeUserMicrosPuzzleDateToNullFalse < ActiveRecord::Migration[5.2]
  def change

    change_column_null(:user_micros, :puzzle_date, false)
    change_column_null(:user_micros, :timer, false)
    change_column_null(:user_micros, :solved, false)
    change_column_null(:user_micros, :user_id, false)
    change_column_default(:user_micros, :timer, from: :nil, to: 0)
    change_column_default(:user_micros, :solved, from: :nil, to: false)

  end
end
