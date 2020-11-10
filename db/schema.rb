# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_10_195103) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "micros", force: :cascade do |t|
    t.datetime "wordcross_date", null: false
    t.string "author", null: false
    t.string "solution", null: false, array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.jsonb "clue_set", null: false
    t.string "label_set", null: false, array: true
    t.index ["id"], name: "index_micros_on_id"
    t.index ["wordcross_date"], name: "index_micros_on_wordcross_date"
  end

  create_table "user_micros", force: :cascade do |t|
    t.string "solving_state", array: true
    t.integer "timer", default: 0, null: false
    t.boolean "solved", default: false, null: false
    t.bigint "user_id", null: false
    t.bigint "micro_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "wordcross_date", null: false
    t.index ["micro_id"], name: "index_user_micros_on_micro_id"
    t.index ["user_id"], name: "index_user_micros_on_user_id"
    t.index ["wordcross_date"], name: "index_user_micros_on_wordcross_date"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "leaderboard_alias"
    t.string "leaderboard_url_key"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "timezone"
  end

end
