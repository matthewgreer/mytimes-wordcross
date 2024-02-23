# == Schema Information
#
# Table name: micros
#
#  id         :bigint           not null, primary key
#  author     :string           not null
#  solution   :string           not null, is an Array
#  label_set  :string           not null, is an Array
#  clue_set   :jsonb            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  weekday    :integer          not null
#

require 'test_helper'

class MicroTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
