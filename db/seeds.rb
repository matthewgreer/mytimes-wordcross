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

microSun = Micro.create!(
  puzzle_date: '2020-08-03',
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
      'position': [0, 2],
      'clue': 'Dog name like Hairy Pawter, e.g.'
    }, 
    {
      'direction': 'across', 
      'number': '4', 
      'position': [1, 0],
      'clue': 'Unit of stock'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [2, 0],
      'clue': 'Africa\'s Republic of the ______'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [3, 0],
      'clue': 'U.F.O. Pilot'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [4, 0],
      'clue': 'Restaurant suggestion, for short'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [0, 2],
      'clue': 'Hysteria'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [0, 3],
      'clue': 'Strong desire'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [0, 4],
      'clue': 'Element below helium on the periodic table'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [1, 0],
      'clue': 'Disney villain who kills Mufasa'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [1, 1],
      'clue': 'Bagel\'s center'
    }
  ]
)

microMon = Micro.create!(
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
      'position': [0, 0],
      'clue': 'The way the cookie crumbles'
    }, 
    {
      'direction': 'across', 
      'number': '5', 
      'position': [1, 0],
      'clue': 'Where toothpaste, irrigation, and the solar calendar were invented'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [2, 0],
      'clue': '"Saturday Night Fever" music'
    }, 
    {
      'direction': 'across', 
      'number': '8', 
      'position': [3, 0],
      'clue': 'Brownstone hangout spot'
    }, 
    {
      'direction': 'across', 
      'number': '9', 
      'position': [4, 1],
      'clue': 'There are more than 10,000 known species of these insects'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [0, 0],
      'clue': 'Government agents, slangily'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [0, 1],
      'clue': 'Anxiety'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [0, 2],
      'clue': 'Scientist Neil deGrasse _____'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [0, 3],
      'clue': 'Experimental Prototype Community of Tomorrow, as it\'s better known'
    }, 
    {
      'direction': 'down', 
      'number': '6', 
      'position': [1, 4],
      'clue': '#1'
    }
  ]
)

microTue = Micro.create!(
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
      'position': [0, 2],
      'clue': 'The only even prime number'
    }, 
    {
      'direction': 'across', 
      'number': '4', 
      'position': [1, 0],
      'clue': 'Tried to win over'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [2, 0],
      'clue': 'Reaction to hearing what the kids are doing these days'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [3, 0],
      'clue': 'Big drop of water?'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [4, 0],
      'clue': '___ and outs'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [0, 2],
      'clue': '"The master\'s ___ will never dismantle the master\'s house": Audre Lorde'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [0, 3],
      'clue': 'Source of groundwater'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [0, 4],
      'clue': 'Roughly one in 300,000,000, for winning the Mega Millions jackpot'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [1, 0],
      'clue': 'What a phone\'s hotspot provides'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [1, 1],
      'clue': 'Neighbor of the United Arab Emirates'
    }
  ]
)

microWed = Micro.create!(
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
      'position': [0, 1],
      'clue': 'They\'re unlikely to fly, in an idiom'
    }, 
    {
      'direction': 'across', 
      'number': '5', 
      'position': [1, 0],
      'clue': 'Magazine edition'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [2, 0],
      'clue': 'Musician with a Nobel Prize'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [3, 0],
      'clue': 'Little to no'
    }, 
    {
      'direction': 'across', 
      'number': '8', 
      'position': [4, 1],
      'clue': 'Network of medical providers, for short'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [0, 1],
      'clue': 'Popular college major, informally'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [0, 2],
      'clue': 'Belief of nearly two billion people'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [0, 3],
      'clue': 'Bat cave deposit'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [0, 4,
      'clue': 'Shipped'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [1, 0],
      'clue': 'Things needed in the T.S.A. line'
    }
  ]
)

microThu = Micro.create!(
  puzzle_date: '2020-10-25',
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
      'position': [0, 2],
      'clue': 'Word on either side of "____, oh _____!"'
    }, 
    {
      'direction': 'across', 
      'number': '4', 
      'position': [1, 1],
      'clue': 'Something built with logs and twigs'
    }, 
    {
      'direction': 'across', 
      'number': '5', 
      'position': [2, 0],
      'clue': 'The Olympics logo has five'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [3, 0],
      'clue': 'Pond gunk'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [4, 0],
      'clue': 'Many TikTok content creators'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [0, 2],
      'clue': 'Watch episode after episode'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [0, 3],
      'clue': '"Take Me Out to the Ball Game" instrument'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [0, 4],
      'clue': 'Some R.S.V.P.s'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [1, 1],
      'clue': 'Tool for shaping fingernails'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [2, 0],
      'clue': 'Chinese zodiac animal for 2020'
    }
  ]
),

microFri = Micro.create!(
  puzzle_date: '2020-10-21',
  author: 'Joel Fagliano',
  solution: [
    ['#', '#', 'F', 'A', 'T'],
    ['G', 'L', 'I', 'N', 'T'],
    ['N', 'I', 'F', 'T', 'y'],
    ['U', 'N', 'T', 'I', 'L'],
    ['S', 'K', 'Y', '#', '#']
  ], 
  clue_set: [
    {
      'direction': 'across',
      'number': '1',
      'position': [0, 2],
      'clue': 'The 1% of 1% milk'
    }, 
    {
      'direction': 'across', 
      'number': '4', 
      'position': [1, 0],
      'clue': 'Flicker of light'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [2, 0],
      'clue:': 'Really neat'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [3, 0],
      'clue:': '"_____ we meet again"'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [4, 0],
      'clue:': 'It\'s way over your head'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [0, 2],
      'clue:': 'Point bonus for using all seven tiles in Scrabble'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [0, 3],
      'clue:': 'Opposite of pro-'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [0, 4],
      'clue:': 'Texter\'s "gotta run"'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [1, 0],
      'clue:': 'Migratory antelopes'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [1, 1],
      'clue:': 'Clickable part of a webpage'
    }
  ]
),

microSat = Micro.create!(
  puzzle_date: '2020-08-08',
  author: 'Joel Fagliano',
  solution: [
    ['#', '#', 'P', 'A', 'S', 'T', 'A'],
    ['#', 'W', 'E', 'B', 'C', 'A', 'M'],
    ['M', 'A', 'N', 'D', 'A', 'T', 'E'],
    ['I', 'G', 'N', 'O', 'R', 'E', 'S'],
    ['X', 'G', 'A', 'M', 'E', 'S', '#'],
    ['E', 'L', 'M', 'E', 'R', '#', '#'],
    ['S', 'E', 'E', 'N', '#', '#', '#']
  ], 
  clue_set: [
    {
      'direction': 'across',
      'number': '1',
      'position': [2, 0],
      'clue': 'Farfalle or fusilli'
    }, 
    {
      'direction': 'across', 
      'number': '6', 
      'position': [1, 1],
      'clue': 'Need for Zoom or Google Hangouts'
    }, 
    {
      'direction': 'across', 
      'number': '7', 
      'position': [0, 2],
      'clue': 'Individual _____, much-discussed feature of the Affordable Care Act'
    }, 
    {
      'direction': 'across', 
      'number': '8', 
      'position': [0, 3],
      'clue': 'Doesn\'t pay attention to'
    }, 
    {
      'direction': 'across', 
      'number': '9', 
      'position': [0, 4],
      'clue': 'Annual competition with skateboarding and motocross'
    },
    {
      'direction': 'across', 
      'number': '10', 
      'position': [0, 5],
      'clue': 'Fudd who hunted Bugs Bunny'
    }, 
    {
      'direction': 'across', 
      'number': '11', 
      'position': [0, 6],
      'clue': 'Noticed'
    }, 
    {
      'direction': 'down', 
      'number': '1', 
      'position': [2, 0],
      'clue': 'Dr. Seuss, for Theodor Geisel'
    }, 
    {
      'direction': 'down', 
      'number': '2', 
      'position': [3, 0],
      'clue': 'Part of the body exercised by sit-ups'
    }, 
    {
      'direction': 'down', 
      'number': '3', 
      'position': [4, 0],
      'clue': 'Job for Sulley in "Monsters, Inc."'
    }, 
    {
      'direction': 'down', 
      'number': '4', 
      'position': [5, 0],
      'clue': '_____ Bake Shop (cookie brand)'
    }, 
    {
      'direction': 'down', 
      'number': '5', 
      'position': [6, 0],
      'clue': 'Home to Iowa State University'
    }, 
    {
      'direction': 'down', 
      'number': '6', 
      'position': [1, 1],
      'clue': 'Elaborate dance done by a bee'
    }, 
    {
      'direction': 'down', 
      'number': '7', 
      'position': [0, 2],
      'clue': 'Jumbles'
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