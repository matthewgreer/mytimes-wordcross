# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_02_21_231948) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dailies", force: :cascade do |t|
    t.datetime "wordcross_date", null: false
    t.string "author", null: false
    t.string "solution", null: false, array: true
    t.string "label_set", null: false, array: true
    t.jsonb "clue_set", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_dailies_on_id"
    t.index ["wordcross_date"], name: "index_dailies_on_wordcross_date"
  end

  create_table "micros", force: :cascade do |t|
    t.datetime "wordcross_date", null: false
    t.string "author", null: false
    t.string "solution", null: false, array: true
    t.string "label_set", null: false, array: true
    t.jsonb "clue_set", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["id"], name: "index_micros_on_id"
    t.index ["wordcross_date"], name: "index_micros_on_wordcross_date"
  end

  create_table "user_dailies", force: :cascade do |t|
    t.string "solving_state", array: true
    t.boolean "solved", default: false, null: false
    t.datetime "wordcross_date", null: false
    t.integer "icon"
    t.bigint "user_id"
    t.bigint "daily_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "temp_timer_seconds", default: 0
    t.string "timer", array: true
    t.index ["daily_id"], name: "index_user_dailies_on_daily_id"
    t.index ["user_id"], name: "index_user_dailies_on_user_id"
    t.index ["wordcross_date"], name: "index_user_dailies_on_wordcross_date"
  end

  create_table "user_micros", force: :cascade do |t|
    t.string "solving_state", array: true
    t.boolean "solved", default: false, null: false
    t.datetime "wordcross_date", null: false
    t.integer "icon"
    t.bigint "user_id"
    t.bigint "micro_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "temp_timer_seconds", default: 0
    t.string "timer", array: true
    t.index ["micro_id"], name: "index_user_micros_on_micro_id"
    t.index ["user_id"], name: "index_user_micros_on_user_id"
    t.index ["wordcross_date"], name: "index_user_micros_on_wordcross_date"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "timezone"
    t.string "last_gold_star_date"
    t.integer "streak", default: 0
    t.string "leaderboard_alias"
    t.string "leaderboard_url_key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
