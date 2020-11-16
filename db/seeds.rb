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


# MICRO WORDCROSSES

microSun = Micro.create!(
  wordcross_date: '2020-08-03',
  author: 'Joel Fagliano', 
  solution: [
    ['#', '#', 'P', 'U', 'N'],
    ['S', 'H', 'A', 'R', 'E'],
    ['C', 'O', 'N', 'G', 'O'],
    ['A', 'L', 'I', 'E', 'N'],
    ['R', 'E', 'C', '#', '#']
  ],
  label_set: [
    ['#', '#', '1', '2', '3'],
    ['4', '5', ' ', ' ', ' '],
    ['6', ' ', ' ', ' ', ' '],
    ['7', ' ', ' ', ' ', ' '],
    ['8', ' ', ' ', '#', '#']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,2','0,3','0,4'],
      clue: 'Dog name like Hairy Pawter, e.g.'
    }, 
    a4: {
      direction: 'across', 
      number: 4, 
      boxes: ['1,0','1,1','1,2','1,3','1,4'],
      clue: 'Unit of stock'
    }, 
    a6: {
      direction: 'across', 
      number: 6, 
      boxes: ['2,0','2,1','2,2','2,3','2,4'],
      clue: 'Africa\'s Republic of the ______'
    }, 
    a7: {
      direction: 'across', 
      number: 7, 
      boxes: ['3,0','3,1','3,2','3,3','3,4'],
      clue: 'U.F.O. Pilot'
    }, 
    a8: {
      direction: 'across', 
      number: 8, 
      boxes: ['4,0','4,1','4,2'],
      clue: 'Restaurant suggestion, for short'
    }, 
    d1: {
      direction: 'down', 
      number: 1, 
      boxes: ['0,2','1,2','2,2','3,2','4,2'],
      clue: 'Hysteria'
    }, 
    d2: {
      direction: 'down', 
      number: 2, 
      boxes: ['0,3','1,3','2,3','3,3','4,3'],
      clue: 'Strong desire'
    }, 
    d3: {
      direction: 'down', 
      number: 3, 
      boxes: ['0,4','1,4','2,4','3,4'],
      clue: 'Element below helium on the periodic table'
    }, 
    d4: {
      direction: 'down', 
      number: 4, 
      boxes: ['1,0','2,0','3,0','4,0'],
      clue: 'Disney villain who kills Mufasa'
    }, 
    d5: {
      direction: 'down', 
      number: 5, 
      boxes: ['1,1','2,1','3,1','4,1'],
      clue: 'Bagel\'s center'
    }
  }
)

microMon = Micro.create!(
  wordcross_date: '2020-10-22',
  author: 'Joel Fagliano',
  solution: [
    ['F', 'A', 'T', 'E', '#'],
    ['E', 'G', 'Y', 'P', 'T'],
    ['D', 'I', 'S', 'C', 'O'],
    ['S', 'T', 'O', 'O', 'P'],
    ['#', 'A', 'N', 'T', 'S']
  ],
  label_set: [
    ['1', '2', '3', '4', '#'],
    ['5', ' ', ' ', ' ', '6'],
    ['7', ' ', ' ', ' ', ' '],
    ['8', ' ', ' ', ' ', ' '],
    ['#', '9', ' ', ' ', ' ']
  ], 
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,0','0,1','0,2','0,3'],
      clue: 'The way the cookie crumbles'
    }, 
    a5: {
      direction: 'across', 
      number: 5, 
      boxes: ['1,0','1,1','1,2','1,3','1,4'],
      clue: 'Where toothpaste, irrigation, and the solar calendar were invented'
    }, 
    a7: {
      direction: 'across', 
      number: 7, 
      boxes: ['2,0','2,1','2,2','2,3','2,4'],
      clue: '"Saturday Night Fever" music'
    }, 
    a8: {
      direction: 'across', 
      number: 8, 
      boxes: ['3,0','3,1','3,2','3,3','3,4'],
      clue: 'Brownstone hangout spot'
    }, 
    a9: {
      direction: 'across', 
      number: 9, 
      boxes: ['4,1','4,2','4,3','4,4'],
      clue: 'There are more than 10,000 known species of these insects'
    }, 
    d1: {
      direction: 'down', 
      number: 1, 
      boxes: ['0,0','1,0','2,0','3,0'],
      clue: 'Government agents, slangily'
    }, 
    d2: {
      direction: 'down', 
      number: 2, 
      boxes: ['0,1','1,1','2,1','3,1','4,1'],
      clue: 'Anxiety'
    }, 
    d3: {
      direction: 'down', 
      number: 3, 
      boxes: ['0,2','1,2','2,2','3,2','4,2'],
      clue: 'Scientist Neil deGrasse _____'
    }, 
    d4: {
      direction: 'down', 
      number: 4, 
      boxes: ['0,3','1,3','2,3','3,3','4,3'],
      clue: 'Experimental Prototype Community of Tomorrow, as it\'s better known'
    }, 
    d6: {
      direction: 'down', 
      number: 6, 
      boxes: ['1,4','2,4','3,4','4,4'],
      clue: '#1'
    }
  }
)

microTue = Micro.create!(
  wordcross_date: '2020-10-26',
  author: 'Joel Fagliano',
  solution: [
    ['#', '#', 'T', 'W', 'O'],
    ['W', 'O', 'O', 'E', 'D'],
    ['I', 'M', 'O', 'L', 'D'],
    ['F', 'A', 'L', 'L', 'S'],
    ['I', 'N', 'S', '#', '#']
  ],
  label_set: [
    ['#', '#', '1', '2', '3'],
    ['4', '5', ' ', ' ', ' '],
    ['6', ' ', ' ', ' ', ' '],
    ['7', ' ', ' ', ' ', ' '],
    ['8', ' ', ' ', '#', '#']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,2','0,3','0,4'],
      clue: 'The only even prime number'
    }, 
    a4: {
      direction: 'across', 
      number: 4, 
      boxes: ['1,0','1,1','1,2','1,3','1,4'],
      clue: 'Tried to win over'
    }, 
    a6: {
      direction: 'across', 
      number: 6, 
      boxes: ['2,0','2,1','2,2','2,3','2,4'],
      clue: 'Reaction to hearing what the kids are doing these days'
    }, 
    a7: {
      direction: 'across', 
      number: 7, 
      boxes: ['3,0','3,1','3,2','3,3','3,4'],
      clue: 'Big drop of water?'
    }, 
    a8: {
      direction: 'across', 
      number: 8, 
      boxes: ['4,0','4,1','4,2'],
      clue: '___ and outs'
    }, 
    d1: {
      direction: 'down', 
      number: 1, 
      boxes: ['0,2','1,2','2,2','3,2','4,2'],
      clue: '"The master\'s ___ will never dismantle the master\'s house": Audre Lorde'
    }, 
    d2: {
      direction: 'down', 
      number: 2, 
      boxes: ['0,3','1,3','2,3','3,3','4,3'],
      clue: 'Source of groundwater'
    }, 
    d3: {
      direction: 'down', 
      number: 3, 
      boxes: ['0,4','1,4','2,4','3,4'],
      clue: 'Roughly one in 300,000,000, for winning the Mega Millions jackpot'
    }, 
    d4: {
      direction: 'down', 
      number: 4, 
      boxes: ['1,0','2,0','3,0','4,0'],
      clue: 'What a phone\'s hotspot provides'
    }, 
    d5: {
      direction: 'down', 
      number: 5, 
      boxes: ['1,1','2,1','3,1','4,1'],
      clue: 'Neighbor of the United Arab Emirates'
    }
  }
)

microWed = Micro.create!(
  wordcross_date: '2019-09-22',
  author: 'Joel Fagliano',
  solution: [
    ['#', 'P', 'I', 'G', 'S'],
    ['I', 'S', 'S', 'U', 'E'],
    ['D', 'Y', 'L', 'A', 'N'],
    ['S', 'C', 'A', 'N', 'T'],
    ['#', 'H', 'M', 'O', '#']
  ],
  label_set: [
    ['#', '1', '2', '3', '4'],
    ['5', ' ', ' ', ' ', ' '],
    ['6', ' ', ' ', ' ', ' '],
    ['7', ' ', ' ', ' ', ' '],
    ['#', '8', ' ', ' ', '#']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,1','0,2','0,3','0,4'],
      clue: 'They\'re unlikely to fly, in an idiom'
    },
    a5: {
      direction: 'across', 
      number: 5, 
      boxes: ['1,0','1,1','1,2','1,3','1,4'],
      clue: 'Magazine edition'
    }, 
    a6: {
      direction: 'across', 
      number: 6, 
      boxes: ['2,0','2,1','2,2','2,3','2,4'],
      clue: 'Musician with a Nobel Prize'
    }, 
    a7: {
      direction: 'across', 
      number: 7, 
      boxes: ['3,0','3,1','3,2','3,3','3,4'],
      clue: 'Little to no'
    }, 
    a8: {
      direction: 'across', 
      number: 8, 
      boxes: ['4,1','4,2','4,3'],
      clue: 'Network of medical providers, for short'
    }, 
    d1: {
      direction: 'down', 
      number: 1, 
      boxes: ['0,1','1,1','2,1','3,1','4,1'],
      clue: 'Popular college major, informally'
    }, 
    d2: {
      direction: 'down', 
      number: 2, 
      boxes: ['0,2','1,2','2,2','3,2','4,2'],
      clue: 'Belief of nearly two billion people'
    }, 
    d3: {
      direction: 'down', 
      number: 3, 
      boxes: ['0,3','1,3','2,3','3,3','4,3'],
      clue: 'Bat cave deposit'
    }, 
    d4: {
      direction: 'down', 
      number: 4, 
      boxes: ['0,4','1,4','2,4','3,4'],
      clue: 'Shipped'
    }, 
    d5: {
      direction: 'down', 
      number: 5, 
      boxes: ['1,0','2,0','3,0'],
      clue: 'Things needed in the T.S.A. line'
    }
  }
)

microThu = Micro.create!(
  wordcross_date: '2020-10-25',
  author: 'Joel Fagliano',
  solution: [
    ['#', '#', 'B', 'O', 'Y'],
    ['#', 'F', 'I', 'R', 'E'],
    ['R', 'I', 'N', 'G', 'S'],
    ['A', 'L', 'G', 'A', 'E'],
    ['T', 'E', 'E', 'N', 'S']
  ],
  label_set: [
    ['#', '#', '1', '2', '3'],
    ['#', '4', ' ', ' ', ' '],
    ['5', ' ', ' ', ' ', ' '],
    ['6', ' ', ' ', ' ', ' '],
    ['7', ' ', ' ', ' ', ' ']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,2','0,3','0,4'],
      clue: 'Word on either side of "____, oh _____!"'
    }, 
    a4: {
      direction: 'across', 
      number: 4, 
      boxes: ['1,1','1,2','1,3','1,4'],
      clue: 'Something built with logs and twigs'
    }, 
    a5: {
      direction: 'across', 
      number: 5, 
      boxes: ['2,0','2,1','2,2','2,3','2,4'],
      clue: 'The Olympics logo has five'
    }, 
    a6: {
      direction: 'across', 
      number: 6, 
      boxes: ['3,0','3,1','3,2','3,3','3,4'],
      clue: 'Pond gunk'
    }, 
    a7: {
      direction: 'across', 
      number: 7, 
      boxes: ['4,0','4,1','4,2','4,3','4,4'],
      clue: 'Many TikTok content creators'
    }, 
    d1: {
      direction: 'down', 
      number: 1, 
      boxes: ['0,2','1,2','2,2','3,2','4,2'],
      clue: 'Watch episode after episode'
    }, 
    d2: {
      direction: 'down', 
      number: 2, 
      boxes: ['0,3','1,3','2,3','3,3','4,3'],
      clue: '"Take Me Out to the Ball Game" instrument'
    }, 
    d3: {
      direction: 'down', 
      number: 3, 
      boxes: ['0,4','1,4','2,4','3,4','4,4'],
      clue: 'Some R.S.V.P.s'
    }, 
    d4: {
      direction: 'down', 
      number: 4, 
      boxes: ['1,1','2,1','3,1','4,1'],
      clue: 'Tool for shaping fingernails'
    }, 
    d5: {
      direction: 'down', 
      number: 5, 
      boxes: ['2,0','3,0','4,0'],
      clue: 'Chinese zodiac animal for 2020'
    }
  }
),

microFri = Micro.create!(
  wordcross_date: '2020-10-21',
  author: 'Joel Fagliano',
  solution: [
    ['#', '#', 'F', 'A', 'T'],
    ['G', 'L', 'I', 'N', 'T'],
    ['N', 'I', 'F', 'T', 'y'],
    ['U', 'N', 'T', 'I', 'L'],
    ['S', 'K', 'Y', '#', '#']
  ],
  label_set: [
    ['#', '#', '1', '2', '3'],
    ['4', '5', ' ', ' ', ' '],
    ['6', ' ', ' ', ' ', ' '],
    ['7', ' ', ' ', ' ', ' '],
    ['8', ' ', ' ', '#', '#']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,2','0,3','0,4'],
      clue: 'The 1% of 1% milk'
    },
    a4: {
      direction: 'across',
      number: 4,
      boxes: ['1,0','1,1','1,2','1,3','1,4'],
      clue: 'Flicker of light'
    },
    a6: {
      direction: 'across',
      number: 6,
      boxes: ['2,0','2,1','2,2','2,3','2,4'],
      clue: 'Really neat'
    },
    a7: {
      direction: 'across',
      number: 7,
      boxes: ['3,0','3,1','3,2','3,3','3,4'],
      clue: '"_____ we meet again"'
    },
    a8: {
      direction: 'across',
      number: 8,
      boxes: ['4,0','4,1','4,2'],
      clue: 'It\'s way over your head'
    },
    d1: {
      direction: 'down',
      number: 1,
      boxes: ['0,2','1,2','2,2','3,2','4,2'],
      clue: 'Point bonus for using all seven tiles in Scrabble'
    },
    d2: {
      direction: 'down',
      number: 2,
      boxes: ['0,3','1,3','2,3','3,3','4,3'],
      clue: 'Opposite of pro-'
    },
    d3: {
      direction: 'down',
      number: 3,
      boxes: ['0,4','1,4','2,4','3,4'],
      clue: 'Texter\'s "gotta run"'
    },
    d4: {
      direction: 'down',
      number: 4,
      boxes: ['1,0','2,0','3,0','4,0'],
      clue: 'Migratory antelopes'
    },
    d5: {
      direction: 'down',
      number: 5,
      boxes: ['1,1','2,1','3,1','4,1'],
      clue: 'Clickable part of a webpage'
    }
  }
),

microSat = Micro.create!(
  wordcross_date: '2020-08-08',
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
  label_set: [
    ['#', '#', '1', '2', '3', '4', '5'],
    ['#', '6', ' ', ' ', ' ', ' ', ' '],
    ['7', ' ', ' ', ' ', ' ', ' ', ' '],
    ['8', ' ', ' ', ' ', ' ', ' ', ' '],
    ['9', ' ', ' ', ' ', ' ', ' ', '#'],
    ['10', ' ', ' ', ' ', ' ', '#', '#'],
    ['11', ' ', ' ', ' ', '#', '#', '#']
  ], 
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,2','0,3','0,4','0,5','0,6'],
      clue: 'Farfalle or fusilli'
    }, 
    a6: {
      direction: 'across', 
      number: 6, 
      boxes: ['1,1','1,2','1,3','1,4','1,5','1,6'],
      clue: 'Need for Zoom or Google Hangouts'
    }, 
    a7: {
      direction: 'across', 
      number: 7, 
      boxes: ['2,0','2,1','2,2','2,3','2,4','2,5','2,6'],
      clue: 'Individual _____, much-discussed feature of the Affordable Care Act'
    }, 
    a8: {
      direction: 'across', 
      number: 8, 
      boxes: ['3,0','3,1','3,2','3,3','3,4','3,5','3,6'],
      clue: 'Doesn\'t pay attention to'
    }, 
    a9: {
      direction: 'across', 
      number: 9, 
      boxes: ['4,0','4,1','4,2','4,3','4,4','4,5'],
      clue: 'Annual competition with skateboarding and motocross'
    },
    a10: {
      direction: 'across', 
      number: 10, 
      boxes: ['5,0','5,1','5,2','5,3','5,4'],
      clue: 'Fudd who hunted Bugs Bunny'
    }, 
    a11: {
      direction: 'across', 
      number: 11, 
      boxes: ['6,0','6,1','6,2','6,3'],
      clue: 'Noticed'
    }, 
    d1: {
      direction: 'down', 
      number: 1, 
      boxes: ['0,2','1,2','2,2','3,2','4,2','5,2','6,2'],
      clue: 'Dr. Seuss, for Theodor Geisel'
    }, 
    d2: {
      direction: 'down', 
      number: 2, 
      boxes: ['0,3','1,3','2,3','3,3','4,3','5,3','6,3'],
      clue: 'Part of the body exercised by sit-ups'
    }, 
    d3: {
      direction: 'down', 
      number: 3, 
      boxes: ['0,4','1,4','2,4','3,4','4,4','5,4'],
      clue: 'Job for Sulley in "Monsters, Inc."'
    }, 
    d4: {
      direction: 'down', 
      number: 4, 
      boxes: ['0,5','1,5','2,5','3,5','4,5'],
      clue: '_____ Bake Shop (cookie brand)'
    }, 
    d5: {
      direction: 'down', 
      number: 5, 
      boxes: ['0,6','1,6','2,6','3,6'],
      clue: 'Home to Iowa State University'
    }, 
    d6: {
      direction: 'down', 
      number: 6, 
      boxes: ['1,1','2,1','3,1','4,1','5,1','6,1'],
      clue: 'Elaborate dance done by a bee'
    }, 
    d7: {
      direction: 'down', 
      number: 7, 
      boxes: ['2,0','3,0','4,0','5,0','6,0'],
      clue: 'Jumbles'
    }
  }
)


# USER_MICRO WORDCROSSES (completed or partially completed wordcrosses)

user_micro1 = UserMicro.create!(
  wordcross_date: '2020-08-01',
  user_id: user1.id,
  micro_id: microSun.id,
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