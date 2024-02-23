json.userId @stats[:user_id]
json.streak @stats[:streak]
json.totalSolvedDailies @stats[:total_solved_dailies]
json.percentDailiesSolved @stats[:percent_dailies_solved]

json.weekdays do
  @stats[:weekdays].each do |weekday, stats|
    json.set! weekday do
      json.averageTime stats[:average_time]
      json.fastestTime stats[:fastest_time]
      json.fastestTimeDate stats[:fastest_time_date]
      json.currentWeekTime stats[:current_week_time]
    end
  end
end
