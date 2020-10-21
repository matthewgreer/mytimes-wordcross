# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Micro.destroy_all
UserMicro.destroy_all

demo_user = User.create!(
  email: 'demo_user', 
  password: "demo_user"
)

user1 = User.create!(
  email: 'testing1@test.com', 
  password: "123456"
)

micro1 = Micro.create!(
  puzzle_date: Date.new(2020, 8, 1),
  author: "Joel Fagliano",
  solution: [
    ["#", "#", "P", "U", "N"],
    ["S", "H", "A", "R", "E"],
    ["C", "O", "N", "G", "O"],
    ["A", "L", "I", "E", "N"],
    ["R", "E", "C", "#", "#"]
  ], 
  clue_set: [
    {
      "direction": "across",
      "number": "1",
      "position": [2,0],
      "clue": "Dog name like Hairy Pawter, e.g."
    }, 
    {
      "direction": "across", 
      "number": "4", 
      "position": [0,1],
      "clue:": "Unit of stock"
    }, 
    {
      "direction": "across", 
      "number": "6", 
      "position": [0,2],
      "clue:": "Africa's Republic of the ______"
    }, 
    {
      "direction": "across", 
      "number": "7", 
      "position": [0,3],
      "clue:": "U.F.O. Pilot"
    }, 
    {
      "direction": "across", 
      "number": "6", 
      "position": [0,4],
      "clue:": "Restaurant suggestion, for short"
    }, 
    {
      "direction": "down", 
      "number": "1", 
      "position": [2, 0],
      "clue:": "Hysteria"
    }, 
    {
      "direction": "down", 
      "number": "2", 
      "position": [3, 0],
      "clue:": "Strong desire"
    }, 
    {
      "direction": "down", 
      "number": "3", 
      "position": [4, 0],
      "clue:": "Element below helium on the periodic table"
    }, 
    {
      "direction": "down", 
      "number": "4", 
      "position": [0, 1],
      "clue:": "Disney villain who kills Mufasa"
    }, 
    {
      "direction": "down", 
      "number": "5", 
      "position": [1, 1],
      "clue:": "Bagel's center"
    }
  ]
)

user_micro1 = UserMicro.create!(
  puzzle_date: Date.new(2020, 8, 1),
  user_id: user1.id,
  micro_id: micro1.id,
  solved: false,
  solving_state:	[
    ["#", "#", "P", "", ""],
    ["", "", "A", "", ""],
    ["", "", "N", "", ""],
    ["", "", "I", "", ""],
    ["R", "E", "C", "#", "#"]        
  ],
  timer: 18275
)