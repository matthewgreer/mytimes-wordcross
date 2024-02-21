# Usage: bundle exec rake user_daily:convert_timer_to_seconds

# These rake tasks were used as part of changing the data type by which the wordcross timers were represented. Originally, the timer data was stored as an array of strings, `["00", "00", "00"]`. The strings were converted to 3 integers in Redux state, then changed back to strings when the value was updated in the database... not good, obviously. Unnecessary complexity and potential for error.

# Migrations 20240221223856_add_temp_timer_to_user_dailies.rb and 20240221231948_add_temp_timer_to_user_micros.rb added a temporary column to the UserDailies and UserMicros tables. These temporary columns were to store the timer as an integer representing elapsed seconds. These tasks convert the old string data to the new integer format and store them in the temporary columns. They only update records that have not yet been updated, and rollback the transaction if an error occurs, so they are indempotent and atomic.

# As of 2/21/2024, these tasks were run once in development. I will run those migrations on production as well to create the temporary columns.

# As part of the statistics feature, a migration to remove the old timer columns and rename the temporary versions as :timer will be created. That feature will include an updated seed file that will populate the timer columns with integers, not arrays of strings.

# When the statistics feature is ready for deployment, BEFORE DEPLOYING THE UPDATE, THESE TASKS SHOULD BE RUN ON PRODUCTION to convert existing timer records and store them in the temporary columns. WHEN THESE TASKS HAVE BEEN SUCCESSFULLY RUN, the renaming migrations will run as part of deploying the statistics feature.

# Following the deployment, these tasks should be irrelevant and may be deleted, or kept for historical purposes.

namespace :user_daily do
  desc "Convert timer from array of strings to integer representing seconds, atomically and indempotently"
  task convert_timer_to_seconds: :environment do
    UserDaily.where(temp_timer_seconds = nil).find_each do |user_daily|
      UserDaily.transaction do
        begin
          h, m, s = user_daily.timer.map(&:to_i)
          total_seconds = h * 3600 + m * 60 + s
          # update! will raise an exception if the update fails
          user_daily.update!(temp_timer_seconds: total_seconds)
        rescue => e
          # log error & rollback transaction
          Rails.logger.error "Failed to update UserDaily #{user_daily.id}. Error: #{e.message}"
          Raise ActiveRecord::Rollback
        end
      end
    end
  end
end

namespace :user_micro do
  desc "Convert timer from array of strings to integer representing seconds, atomically and indempotently"
  task convert_timer_to_seconds: :environment do
    UserMicro.where(temp_timer_seconds = nil).find_each do |user_micro|
      UserMicro.transaction do
        begin
          h, m, s = user_micro.timer.map(&:to_i)
          total_seconds = h * 3600 + m * 60 + s
          # update! will raise an exception if the update fails
          user_micro.update!(temp_timer_seconds: total_seconds)
        rescue => e
          # log error & rollback transaction
          Rails.logger.error "Failed to update UserMicro #{user_micro.id}. Error: #{e.message}"
          Raise ActiveRecord::Rollback
        end
      end
    end
  end
end
