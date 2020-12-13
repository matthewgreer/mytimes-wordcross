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
Daily.destroy_all

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
    ['N', 'I', 'F', 'T', 'Y'],
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
  wordcross_date: '2020-08-03',
  user_id: user1.id,
  micro_id: microSun.id,
  icon: 5,
  solved: false,
  solving_state:	[
    ['#', '#', 'P', '', ''],
    ['', '', 'A', '', ''],
    ['', '', 'N', '', ''],
    ['', '', 'I', '', ''],
    ['R', 'E', 'C', '#', '#']        
  ],
  timer: [0, 1, 22]
)


# DAILY WORDCROSSES
dailyMon = Daily.create!(
  wordcross_date: '2020-07-06',
  author: 'Lynn Lempel',
  solution: [
  ['N','A','D','A','L','#','M','I','C','A','#','S','L','I','D'],
  ['O','B','A','M','A','#','O','P','A','L','#','T','Y','N','E'],
  ['S','A','L','T','Y','#','V','A','N','G','U','A','R','D','S'],
  ['E','L','L','#','S','A','I','D','#','A','T','T','I','R','E'],
  ['J','O','Y','R','I','D','E','S','#','#','O','S','C','A','R'],
  ['O','N','I','O','N','S','#','#','P','U','P','#','S','G','T'],
  ['B','E','N','D','#','#','P','E','O','R','I','A','#','#','#'],
  ['#','#','G','I','N','G','E','R','S','N','A','P','S','#','#'],
  ['#','#','#','N','O','M','O','R','E','#','#','R','I','P','A'],
  ['G','E','L','#','D','A','N','#','#','M','A','I','D','E','N'],
  ['A','L','A','M','O','#','#','B','O','B','S','L','E','D','S'],
  ['M','O','D','I','F','Y','#','A','L','A','S','#','L','A','W'],
  ['B','I','L','L','F','O','L','D','S','#','E','M','I','L','E'],
  ['I','S','E','E','#','R','A','G','E','#','T','O','N','E','R'],
  ['T','E','S','S','#','E','D','E','N','#','S','E','E','D','S']
  ],
  label_set: [
  ['1','2','3','4','5','#','6','7','8','9','#','10','11','12','13'],
  ['14',' ',' ',' ',' ','#','15',' ',' ',' ','#','16',' ',' ',' '],
  ['17',' ',' ',' ',' ','#','18',' ',' ','19',' ',' ',' ',' ',' '],
  ['20',' ',' ','#','21','22',' ',' ','#','23',' ',' ',' ',' ',' '],
  ['24',' ',' ','25',' ',' ',' ',' ','#','#','26',' ',' ',' ',' '],
  ['27',' ',' ',' ',' ',' ','#','#',' ',' ',' ','#',' ',' ',' '],
  ['31',' ',' ',' ','#','#','32','33',' ',' ',' ','34','#','#','#'],
  ['#','#','35',' ','36','37',' ','',' ',' ',' ',' ','38','#','#'],
  ['#','#','#','39',' ',' ',' ',' ',' ','#','#','40',' ','41','42'],
  ['43','44','45','#','46',' ',' ','#','#','47','48',' ',' ',' ',' '],
  ['49',' ',' ','50',' ','#','#','51','52',' ',' ',' ',' ',' ',' '],
  ['53',' ',' ',' ',' ','54','#','55',' ',' ',' ','#','56',' ',' '],
  ['57',' ',' ',' ',' ',' ','58',' ',' ','#','59','60',' ',' ',' '],
  ['61',' ',' ',' ','#','62',' ',' ',' ','#','63',' ',' ',' ',' '],
  ['64',' ',' ',' ','#','65',' ',' ',' ','#','66',' ',' ',' ',' ']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,0','0,1','0,2','0,3','0,4'],
      clue: 'Rafael on the tennis court'
    },
    a6: {
      direction: 'across',
      number: 6,
      boxes: ['0,6','0,7','0,8','0,9'],
      clue: 'Mineral easily split into layers'
    },
    a10: {
      direction: 'across',
      number: 10,
      boxes: ['0,11','0,12','0,13','0,14'],
      clue: 'Reached base feet-first'
    },
    a14: {

      direction: 'across',
      number: 14,
      boxes: ['1,0','1,1','1,2','1,3','1,4'],
      clue: 'Michelle who wrote "Becoming"'
    },
    a15: {
      direction: 'across',
      number: 15,
      boxes: ['1,6','1,7','1,8','1,9'],
      clue: 'Gem found in the Outback'
    },
    a16: {
      direction: 'across',
      number: 16,
      boxes: ['1,11','1,12','1,13','1,14'],
      clue: 'Daly with a Tony for "Gypsy"'
    },
    a17: {
      direction: 'across',
      number: 17,
      boxes: ['2,0','2,1','2,2','2,3','2,4'],
      clue: 'Like the ocean and most potato chips'
    },

    a18: {
      direction: 'across',
      number: 18,
      boxes: ['2,6','2,7','2,8','2,9','2,10','2,11','2,12','2,13','2,14'],
      clue: 'Pianist Cliburn plays basketball defense?'
    },
    a20: {
      direction: 'across',
      number: 20,
      boxes: ['3,0','3,1','3,2'],
      clue: 'Building extension'
    },
    a21: {
      direction: 'across',
      number: 21,
      boxes: ['3,4','3,5','3,6','3,7'],
      clue: 'Spoken'
    },
    a23: {
      direction: 'across',
      number: 23,
      boxes: ['3,9','3,10','3,11','3,12','3,13','3,14'],
      clue: 'Garb'
    },
    a24: {
      direction: 'across',
      number: 24,
      boxes: ['4,0','4,1','4,2','4,3','4,4','4,5','4,6','4,7'],
      clue: 'TV host Behar takes mass transit?'
    },
    a26: {
      direction: 'across',
      number: 26,
      boxes: ['4,10','4,11','4,12','4,13','4,14'],
      clue: 'Trash-loving grouch of children\'s TV'
    },
    a27: {
      direction: 'across',
      number: 27,
      boxes: ['5,0','5,1','5,2','5,3','5,4','5,5'],
      clue: 'They bring tears to chefs\' eyes'
    },
    a28: {
      direction: 'across',
      number: 28,
      boxes: ['5,8','5,9','5,10'],
      clue: 'Young seal'
    },
    a30: {
      direction: 'across',
      number: 30,
      boxes: ['5,12','5,13','5,14'],
      clue: '"___ Pepper\'s Lonely Hearts Club Band"'
    },

    a31: {
      direction: 'across',
      number: 31,
      boxes: ['6,0','6,1','6,2','6,3'],
      clue: 'Unstraighten, as a wire'
    },
    a32: {
      direction: 'across',
      number: 32,
      boxes: ['6,6','6,7','6,8','6,9','6,10','6,11'],
      clue: 'Illinois city on the Illinois River'
    },
    a35: {
      direction: 'across',
      number: 35,
      boxes: ['7,2','7,3','7,4','7,5','7,6','7,7','7,8','7,9','7,10','7,11','7,12'],
      clue: 'Actress Rogers flips out?'
    },
    a39: {
      direction: 'across',
      number: 39,
      boxes: ['8,3','8,4','8,5','8,6','8,7','8,8'],
      clue: '"That\'s enough!"'
    },
    a40: {
      direction: 'across',
      number: 40,
      boxes: ['8,11','8,12','8,13','8,14'],
      clue: 'Kelly seen live in the morning'
    },
    a43: {
      direction: 'across',
      number: 43,
      boxes: ['9,0','9,1','9,2'],
      clue: 'Hair goop'
    },
    a46: {
      direction: 'across',
      number: 46,
      boxes: ['9,4','9,5','9,6'],
      clue: 'Martial arts level'
    },
    a47: {
      direction: 'across',
      number: 47,
      boxes: ['9,9','9,10','9,11','9,12','9,13','9,14'],
      clue: 'Damsel'
    },
    a49: {
      direction: 'across',
      number: 49,
      boxes: ['10,0','10,1','10,2','10,3','10,4'],
      clue: 'Battle site where Davy Crockett died'
    },
    a51: {
      direction: 'across',
      number: 51,
      boxes: ['10,7','10,8','10,9','10,10','10,11','10,12','10,13','10,14'],
      clue: 'Singer Dylan has fun in the snow?'
    },
    a53: {
      direction: 'across',
      number: 53,
      boxes: ['11,0','11,1','11,2','11,3','11,4','11,5'],
      clue: 'Change somewhat'
    },
    a55: {
      direction: 'across',
      number: 55,
      boxes: ['11,7','11,8','11,9','11,10'],
      clue: '"It\'s a shame ..."'
    },
    a56: {
      direction: 'across',
      number: 56,
      boxes: ['11,12','11,13','11,14'],
      clue: 'Bit of legislation'
    },
    a57: {
      direction: 'across',
      number: 57,
      boxes: ['12,0','12,1','12,2','12,3','12,4','12,5','12,6','12,7','12,8'],
      clue: 'Businessman Gates gets out of the poker game?'
    },
    a59: {
      direction: 'across',
      number: 59,
      boxes: ['12,10','12,11','12,12','12,13','12,14'],
      clue: 'Zola who wrote "J\'Accuse ...!"'
    },
    a61: {
      direction: 'across',
      number: 61,
      boxes: ['13,0','13,1','13,2','13,3'],
      clue: '"So that\'s how it is"'
    },
    a62: {
      direction: 'across',
      number: 62,
      boxes: ['13,5','13,6','13,7','13,8'],
      clue: 'Fury'
    },
    a63: {
      direction: 'across',
      number: 63,
      boxes: ['13,10','13,11','13,12','13,13','13,14'],
      clue: 'Printer powder'
    },
    a64: {
      direction: 'across',
      number: 64,
      boxes: ['14,0','14,1','14,2','14,3'],
      clue: '"___ of the d\'Urbervilles"'
    },
  
    a65: {
      direction: 'across',
      number: 65,
      boxes: ['14,5','14,6','14,7','14,8'],
      clue: 'Perfect world'
    },
  
    a66: {
      direction: 'across',
      number: 66,
      boxes: ['14,10','14,11','14,12','14,13','14,14'],
      clue: 'Watermelon throwaways'
    },



    d1: {
      direction: 'down',
      number: 1,
      boxes: ['0,0','1,0','2,0','3,0','4,0','5,0','6,0'],
      clue: 'Rhinoplasty, informally'
    },
    d2: {
      direction: 'down',
      number: 2,
      boxes: ['0,1','1,1','2,1','3,1','4,1','5,1','6,1'],
      clue: 'Mollusk with an iridescent inner shell'
    },
    d3: {
      direction: 'down',
      number: 3,
      boxes: ['0,2','1,2','2,2','3,2','4,2','5,2','6,2','7,2'],
      clue: 'Wasting time'
    },
    d4: {
      direction: 'down',
      number: 4,
      boxes: ['0,3','1,3','2,3'],
      clue: 'Quantity: Abbr.'
    },
    d5: {
      direction: 'down',
      number: 5,
      boxes: ['0,4','1,4','2,4','3,4','4,4','5,4'],
      clue: 'Stores for future use'
    },
    d6: {
      direction: 'down',
      number: 6,
      boxes: ['0,6','1,6','2,6','3,6','4,6'],
      clue: 'Date night staple'
    },
    d7: {
      direction: 'down',
      number: 7,
      boxes: ['0,7','1,7','2,7','3,7','4,7'],
      clue: 'Apple tablets'
    },
    d8: {
      direction: 'down',
      number: 8,
      boxes: ['0,8','1,8','2,8'],
      clue: 'Soup container'
    },
    d9: {
      direction: 'down',
      number: 9,
      boxes: ['0,9','1,9','2,9','3,9'],
      clue: 'Bit of seaweed'
    },
    d10: {
      direction: 'down',
      number: 10,
      boxes: ['0,11','1,11','2,11','3,11','4,11'],
      clue: 'Game recap figures'
    },
    d11: {
      direction: 'down',
      number: 11,
      boxes: ['0,12','1,12','2,12','3,12','4,12','5,12'],
      clue: 'Words to songs'
    },
    d12: {
      direction: 'down',
      number: 12,
      boxes: ['0,13','1,13','2,13','3,13','4,13','5,13'],
      clue: 'Dressed like RuPaul'
    },
    d13: {
      direction: 'down',
      number: 13,
      boxes: ['0,14','1,14','2,14','3,14','4,14','5,14'],
      clue: 'Gobi or Mojave'
    },
    d19: {
      direction: 'down',
      number: 19,
      boxes: ['2,10','3,10','4,10','5,10','6,10','7,10'],
      clue: 'Perfect world'
    },
    d22: {
      direction: 'down',
      number: 22,
      boxes: ['3,5','4,5','5,5'],
      clue: 'Much-anticipated parts of Super Bowl broadcasts'
    },
    d25: {
      direction: 'down',
      number: 25,
      boxes: ['4,3','5,3','6,3','7,3','8,3'],
      clue: '"The Kiss" sculptor'
    },
    d28: {
      direction: 'down',
      number: 28,
      boxes: ['5,8','6,8','7,8','8,8'],
      clue: 'Get in place for the camera'
    },
    d29: {
      direction: 'down',
      number: 29,
      boxes: ['5,9','6,9','7,9'],
      clue: 'Large coffee vessel'
    },
    d32: {
      direction: 'down',
      number: 32,
      boxes: ['6,6','7,6','8,6','9,6'],
      clue: 'Lowly laborer'
    },
  
    d33: {
      direction: 'down',
      number: 33,
      boxes: ['6,7','7,7','8,7'],
      clue: 'Muff one'
    },
    d34: {
      direction: 'down',
      number: 34,
      boxes: ['6,11','7,11','8,11','9,11','10,11'],
      clue: 'Month of many unhappy returns?'
    },
    d36: {
      direction: 'down',
      number: 36,
      boxes: ['7,4','8,4','9,4','10,4','11,4','12,4'],
      clue: 'Fall asleep while watching TV, perhaps'
    },
    d37: {
      direction: 'down',
      number: 37,
      boxes: ['7,5','8,5','9,5'],
      clue: '"Today" show rival, for short'
    },
    d38: {
      direction: 'down',
      number: 38,
      boxes: ['7,12','8,12','9,12','10,12','11,12','12,12','13,12','14,12'],
      clue: 'Spot for a football coach'
    },
    d41: {
      direction: 'down',
      number: 41,
      boxes: ['8,13','9,13','10,13','11,13','12,13','13,13','14,13'],
      clue: 'Went by bicycle'
    },
    d42: {
      direction: 'down',
      number: 42,
      boxes: ['8,14','9,14','10,14','11,14','12,14','13,14','14,14'],
      clue: 'a), b), c) and d), on a multiple-choice test'
    },
    d43: {
      direction: 'down',
      number: 43,
      boxes: ['9,0','10,0','11,0','12,0','13,0','14,0'],
      clue: 'Stratagem'
    },
    d44: {
      direction: 'down',
      number: 44,
      boxes: ['9,1','10,1','11,1','12,1','13,1','14,1'],
      clue: 'Fictional 6-year-old at the Plaza Hotel'
    },
    d45: {
      direction: 'down',
      number: 45,
      boxes: ['9,2','10,2','11,2','12,2','13,2','14,2'],
      clue: 'Soup-serving utensils'
    },
    d47: {
      direction: 'down',
      number: 47,
      boxes: ['9,9','10,9','11,9'],
      clue: 'Entrepreneur\'s deg.'
    },
    d48: {
      direction: 'down',
      number: 48,
      boxes: ['9,10','10,10','11,10','12,10','13,10','14,10'],
      clue: 'Listings in a calculation of one\'s net worth'
    },
    d50: {
      direction: 'down',
      number: 50,
      boxes: ['10,3','11,3','12,3','13,3','14,3'],
      clue: '"And ___ to go before I sleep": Robert Frost'
    },
    d51: {
      direction: 'down',
      number: 51,
      boxes: ['10,7','11,7','12,7','13,7','14,7'],
      clue: 'Award earned by a scout'
    },
    d52: {
      direction: 'down',
      number: 52,
      boxes: ['10,8','11,8','12,8','13,8','14,8'],
      clue: 'Elizabeth of the "Avengers" series'
    },
    d54: {
      direction: 'down',
      number: 54,
      boxes: ['11,3','12,3','13,3','14,3'],
      clue: 'Time long gone'
    },
    d58: {
      direction: 'down',
      number: 58,
      boxes: ['12,4','13,4','14,4'],
      clue: 'Boy in knickers, perhaps'
    },
    d60: {
      direction: 'down',
      number: 60,
      boxes: ['12,11','13,11','14,11'],
      clue: 'Bartender on "The Simpsons"'
    }
  }
)