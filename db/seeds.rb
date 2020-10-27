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

# USERS

demo_user = User.create!(
  email: 'demo_user', 
  password: 'demo_user',
  timezone: 'America/New_York'
)

user1 = User.create!(
  email: 'testing1@test.com', 
  password: '123456',
  timezone: 'America/Chicago'
)

user2 = User.create!(
  email: 'testing2@test.com',
  password: '123456',
  timezone: 'Europe/Zagreb'
)

user3 = User.create!(
  email: 'testing3@test.com', 
  password: '123456',
  timezone: 'America/Denver'
)

user4 = User.create!(
  email: 'testing4@test.com',
  password: '123456',
  timezone: 'Europe/Paris'
)

user5 = User.create!(
  email: 'testing5@test.com', 
  password: '123456',
  timezone: 'America/Los_Angeles'
)


# MICRO PUZZLES

micro1 = Micro.create!(
  puzzle_date: '2020-08-01',
  author: 'Joel Fagliano',
  solution: [
    ['#', '#', 'P', 'U', 'N'],
    ['S', 'H', 'A', 'R', 'E'],
    ['C', 'O', 'N', 'G', 'O'],
    ['A', 'L', 'I', 'E', 'N'],
    ['R', 'E', 'C', '#', '#']
  ], 
  clue_set: [
    {
      'direction': 'across',
      'number': '1',
      'position': [2,0],
      'clue': 'Dog name like Hairy Pawter, e.g.'
    }, 
    {
      'direction': 'across', 
      'number': '4', 
      'position': [0,1],
      'clue:': 'Unit of stock'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [0,2],
      'clue:': 'Africa\'s Republic of the ______'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [0,3],
      'clue:': 'U.F.O. Pilot'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [0,4],
      'clue:': 'Restaurant suggestion, for short'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [2, 0],
      'clue:': 'Hysteria'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [3, 0],
      'clue:': 'Strong desire'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [4, 0],
      'clue:': 'Element below helium on the periodic table'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [0, 1],
      'clue:': 'Disney villain who kills Mufasa'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [1, 1],
      'clue:': 'Bagel\'s center'
    }
  ]
)

micro2 = Micro.create!(
  puzzle_date: '2020-10-22',
  author: 'Joel Fagliano',
  solution: [
    ['F', 'A', 'T', 'E', '#'],
    ['E', 'G', 'Y', 'P', 'T'],
    ['D', 'I', 'S', 'C', 'O'],
    ['S', 'T', 'O', 'O', 'P'],
    ['#', 'A', 'N', 'T', 'S']
  ], 
  clue_set: [
    {
      'direction': 'across',
      'number': '1',
      'position': [0,0],
      'clue': 'The way the cookie crumbles'
    }, 
    {
      'direction': 'across', 
      'number': '5', 
      'position': [0,1],
      'clue:': 'Where toothpaste, irrigation, and the solar calendar were invented'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [0,2],
      'clue:': '\"Saturday Night Fever\" music'
    }, 
    {
      'direction': 'across', 
      'number': '8', 
      'position': [0,3],
      'clue:': 'Brownstone hangout spot'
    }, 
    {
      'direction': 'across', 
      'number': '9', 
      'position': [1,4],
      'clue:': 'There are more than 10,000 known species of these insects'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [0, 0],
      'clue:': 'Government agents, slangily'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [1, 0],
      'clue:': 'Anxiety'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [2, 0],
      'clue:': 'Scientist Neil deGrasse _____'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [3, 0],
      'clue:': 'Experimental Prototype Community of Tomorrow, as it\'s better known'
    }, 
    {
      'direction': 'down', 
      'number': '6', 
      'position': [4, 1],
      'clue:': '#1'
    }
  ]
)

micro3 = Micro.create!(
  puzzle_date: '2020-10-26',
  author: 'Joel Fagliano',
  solution: [
    ['#', '#', 'T', 'W', 'O'],
    ['W', 'O', 'O', 'E', 'D'],
    ['I', 'M', 'O', 'L', 'D'],
    ['F', 'A', 'L', 'L', 'S'],
    ['I', 'N', 'S', '#', '#']
  ], 
  clue_set: [
    {
      'direction': 'across',
      'number': '1',
      'position': [2,0],
      'clue': 'The only even prime number'
    }, 
    {
      'direction': 'across', 
      'number': '4', 
      'position': [0,1],
      'clue:': 'Tried to win over'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [0,2],
      'clue:': 'Reaction to hearing what the kids are doing these days'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [0,3],
      'clue:': 'Big drop of water?'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [0,4],
      'clue:': '___ and outs'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [2, 0],
      'clue:': '"The master\'s ___ will never dismantle the master\'s house": Audre Lorde'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [3, 0],
      'clue:': 'Source of groundwater'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [4, 0],
      'clue:': 'Roughly one in 300,000,000, for winning the Mega Millions jackpot'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [0, 1],
      'clue:': 'What a phone\'s hotspot provides'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [1, 1],
      'clue:': 'Neighbor of the United Arab Emirates'
    }
  ]
)

micro4 = Micro.create!(
  puzzle_date: '2019-09-22',
  author: 'Joel Fagliano',
  solution: [
    ['#', 'P', 'I', 'G', 'S'],
    ['I', 'S', 'S', 'U', 'E'],
    ['D', 'Y', 'L', 'A', 'N'],
    ['S', 'C', 'A', 'N', 'T'],
    ['#', 'H', 'M', 'O', '#']
  ], 
  clue_set: [
    {
      'direction': 'across',
      'number': '1',
      'position': [1,0],
      'clue': 'They\'re unlikely to fly, in an idiom'
    }, 
    {
      'direction': 'across', 
      'number': '5', 
      'position': [0,1],
      'clue:': 'Magazine edition'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [0,2],
      'clue:': 'Musician with a Nobel Prize'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [0,3],
      'clue:': 'Little to no'
    }, 
    {
      'direction': 'across', 
      'number': '8', 
      'position': [1,4],
      'clue:': 'Network of medical providers, for short'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [1, 0],
      'clue:': 'Popular college major, informally'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [2, 0],
      'clue:': 'Belief of nearly two billion people'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [3, 0],
      'clue:': 'Bat cave deposit'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [4, 0],
      'clue:': 'Shipped'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [0, 1],
      'clue:': 'Things needed in the T.S.A. line'
    }
  ]
)

micro4 = Micro.create!(
  puzzle_date: '2019-10-25',
  author: 'Joel Fagliano',
  solution: [
    ['#', '#', 'B', 'O', 'Y'],
    ['#', 'F', 'I', 'R', 'E'],
    ['R', 'I', 'N', 'G', 'S'],
    ['A', 'L', 'G', 'A', 'E'],
    ['T', 'E', 'E', 'N', 'S']
  ], 
  clue_set: [
    {
      'direction': 'across',
      'number': '1',
      'position': [2,0],
      'clue': 'Word on either side of \"____, oh _____!\"'
    }, 
    {
      'direction': 'across', 
      'number': '4', 
      'position': [1,1],
      'clue:': 'Something built with logs and twigs'
    }, 
    {
      'direction': 'across', 
      'number': '5', 
      'position': [0,2],
      'clue:': 'The Olympics logo has five'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [0,3],
      'clue:': 'Pond gunk'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [0,4],
      'clue:': 'Many TikTok content creators'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [2, 0],
      'clue:': 'Watch episode after episode'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [3, 0],
      'clue:': '\"Take Me Out to the Ball Game\" instrument'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [4, 0],
      'clue:': 'Some R.S.V.P.s'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [1, 1],
      'clue:': 'Tool for shaping fingernails'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [0, 2],
      'clue:': 'Chinese zodiac animal for 2020'
    }
  ]
)


# USER_MICRO PUZZLES (completed or partially completed puzzles)

user_micro1 = UserMicro.create!(
  puzzle_date: '2020-08-01',
  user_id: user1.id,
  micro_id: micro1.id,
  solved: false,
  solving_state:	[
    ['#', '#', 'P', '', ''],
    ['', '', 'A', '', ''],
    ['', '', 'N', '', ''],
    ['', '', 'I', '', ''],
    ['R', 'E', 'C', '#', '#']        
  ],
  timer: 18275
)