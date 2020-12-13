# == Schema Information
#
# Table name: dailies
#
#  id             :bigint           not null, primary key
#  wordcross_date :datetime         not null
#  author         :string           not null
#  solution       :string           not null, is an Array
#  label_set      :string           not null, is an Array
#  clue_set       :jsonb            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class DailyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
