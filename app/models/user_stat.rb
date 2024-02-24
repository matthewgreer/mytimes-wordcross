# == Schema Information
#
# Table name: user_stats
#
#  id                       :bigint           not null, primary key
#  user_id                  :bigint           not null
#  current_streak           :integer          default(0)
#  longest_streak           :integer          default(0)
#  total_dailies            :integer          default(0)
#  total_solved_dailies     :integer          default(0)
#  last_gold_checkmark_date :date
#  best_weekday_times       :jsonb
#  best_weekday_times_dates :jsonb
#  average_weekday_times    :jsonb
#  current_weekday_times    :jsonb
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#


class UserStat < ApplicationRecord
  validates :user_id, uniqueness: true

  belongs_to :user

  def solve_rate
    return 0 if self.total_dailies == 0
    (self.total_solved_dailies / self.total_dailies.to_f * 100).round(2)
  end

  def update_streak_for(gold_checkmark, date)
    if gold_checkmark
      self.current_streak = 0 if self.last_gold_checkmark_date.nil? || self.last_gold_checkmark_date != date - 1.day
      self.current_streak += 1
      self.longest_streak = [self.longest_streak, self.current_streak].max
      self.last_gold_checkmark_date = date
    else
      self.current_streak = 0
    end
  end
end
