# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Puzzle.destroy_all

demo_user = User.create!(email: 'demo_user', password: "demo_user")
user1 = User.create!(email: 'testing1@test.com', password: "123456")

mini1 = Puzzle.create!(
  date: Date.new(2020, 8, 1), 
  answers: "##PUNSHARECONGOALIENREC##", 
  clues: "across\n
      1: Dog name like Hairy Pawter, e.g.\n
      4: Unit of stock\n
      6: Africa's Republic of the ______\n
      7: U.F.O. pilot\n
      8: Restaurant suggestion, for short
      ###
    down:\n
      1: Hysteria\n
      2: Strong desire\n
      3: Element below helium on the periodic table\n
      4: Disney villain who kills Mufasa,\n
      5: Bagel's center"
)
