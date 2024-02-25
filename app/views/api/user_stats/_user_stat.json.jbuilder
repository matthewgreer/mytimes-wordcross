json.extract! user_stat, :current_streak, :longest_streak, :total_dailies, :total_solved_dailies, :last_gold_checkmark_date, :best_weekday_times, :best_weekday_times_dates, :average_weekday_times, :current_weekday_times
json.solveRate user_stat.solve_rate

# Not sure yet whether it will actually be helpful to deconstruct the weekday stats like this, but just in case, it's better than having to retype all this. lol

# json.bestSundayTime user_stat[:best_weekday_times][0]
# json.bestMondayTime user_stat[:best_weekday_times][1]
# json.bestTuesdayTime user_stat[:best_weekday_times][2]
# json.bestWednesdayTime user_stat[:best_weekday_times][3]
# json.bestThursdayTime user_stat[:best_weekday_times][4]
# json.bestFridayTime user_stat[:best_weekday_times][5]
# json.bestSaturdayTime user_stat[:best_weekday_times][6]

# json.bestSundayTimeDate user_stat[:best_weekday_times_dates][0]
# json.bestMondayTimeDate user_stat[:best_weekday_times_dates][1]
# json.bestTuesdayTimeDate user_stat[:best_weekday_times_dates][2]
# json.bestWednesdayTimeDate user_stat[:best_weekday_times_dates][3]
# json.bestThursdayTimeDate user_stat[:best_weekday_times_dates][4]
# json.bestFridayTimeDate user_stat[:best_weekday_times_dates][5]
# json.bestSaturdayTimeDate user_stat[:best_weekday_times_dates][6]

# json.averageSundayTime user_stat[:average_weekday_times][0]
# json.averageMondayTime user_stat[:average_weekday_times][1]
# json.averageTuesdayTime user_stat[:average_weekday_times][2]
# json.averageWednesdayTime user_stat[:average_weekday_times][3]
# json.averageThursdayTime user_stat[:average_weekday_times][4]
# json.averageFridayTime user_stat[:average_weekday_times][5]
# json.averageSaturdayTime user_stat[:average_weekday_times][6]

# json.currentSundayTime user_stat[:current_weekday_times][0]
# json.currentMondayTime user_stat[:current_weekday_times][1]
# json.currentTuesdayTime user_stat[:current_weekday_times][2]
# json.currentWednesdayTime user_stat[:current_weekday_times][3]
# json.currentThursdayTime user_stat[:current_weekday_times][4]
# json.currentFridayTime user_stat[:current_weekday_times][5]
# json.currentSaturdayTime user_stat[:current_weekday_times][6]
