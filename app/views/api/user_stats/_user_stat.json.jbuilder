json.key_format! camelize: :lower
json.deep_format_keys!
json.extract! user_stat, :current_streak, :longest_streak, :total_dailies, :total_solved_dailies, :last_gold_checkmark_date, :best_weekday_times, :best_weekday_times_dates, :average_weekday_times, :current_weekday_times, :solve_rate
