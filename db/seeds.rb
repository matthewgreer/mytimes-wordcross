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
  ['27',' ',' ',' ',' ',' ','#','#','28','29',' ','#','30',' ',' '],
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
),
dailyTue = Daily.create!(
  wordcross_date: '2017-11-21',
  author: 'Brian Thomas',
  solution: [
    ['S','T','A','B','#','#','M','A','R','#','H','A','R','P','S'],
    ['H','U','G','O','#','C','O','M','E','#','A','V','A','I','L'],
    ['A','D','I','N','#','O','N','M','E','#','R','A','S','P','Y'],
    ['P','O','L','E','I','N','T','O','F','I','R','S','T','#','#'],
    ['E','R','E','M','I','T','E','#','#','V','I','T','A','L','S'],
    ['#','#','#','A','I','R','#','S','M','E','E','#','F','I','T'],
    ['R','U','S','S','I','A','N','P','A','S','T','#','A','K','A'],
    ['U','P','C','S','#','#','O','I','L','#','#','F','R','E','T'],
    ['N','O','R','#','F','I','N','N','I','S','H','L','I','N','E'],
    ['G','N','U','#','A','M','O','S','#','L','E','I','#','#','#'],
    ['S','E','N','O','R','A','#','#','D','E','E','P','S','E','A'],
    ['#','#','C','Z','E','C','H','E','R','E','D','F','L','A','G'],
    ['O','C','H','O','A','#','A','S','A','P','#','L','O','V','E'],
    ['P','A','I','N','S','#','Z','A','N','Y','#','O','M','E','N'],
    ['T','W','E','E','T','#','Y','U','K','#','#','P','O','S','T']
  ],
  label_set: [
    ['1','2','3','4','#','#','5','6','7','#','8','9','10','11','12'],
    ['13','','','','#','14','','','','#','15','','','',''],
    ['16','','','','#','17','','','','#','18','','','',''],
    ['19','','','','20','','','','','21','','','','#','#'],
    ['22','','','','','','','#','#','23','','','','24','25'],
    ['#','#','#','26','','','#','27','28','','','#','29','',''],
    ['30','31','32','','','','33','','','','','#','34','',''],
    ['35','','','','#','#','36','','','#','#','37','','',''],
    ['38','','','#','39','40','','','','41','42','','','',''],
    ['43','','','#','44','','','','#','45','','','#','#','#'],
    ['46','','','47','','','#','#','48','','','','49','50','51'],
    ['#','#','52','','','','53','54','','','','','','',''],
    ['55','56','','','','#','57','','','','#','58','','',''],
    ['59','','','','','#','60','','','','#','61','','',''],
    ['62','','','','','#','63','','','#','#','64','','','']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,0','0,1','0,2','0,3'],
      clue: 'Wound on a dueler'
    },
    a5: {
      direction: 'across',
      number: 5,
      boxes: ['0,6','0,7','0,8'],
      clue: 'Tarnish'
    },
    a8: {
      direction: 'across',
      number: 8,
      boxes: ['0,10','0,11','0,12','0,13','0,14'],
      clue: 'Dwells (on)'
    },
    a13: {
      direction: 'across',
      number: 13,
      boxes: ['1,0','1,1','1,2','1,3'],
      clue: 'Victor who wrote “Les Misérables”'
    },
    a14: {
      direction: 'across',
      number: 14,
      boxes: ['1,5','1,6','1,7','1,8'],
      clue: '“Here, boy!”'
    },
    a15: {
      direction: 'across',
      number: 15,
      boxes: ['1,10','1,11','1,12','1,13','1,14'],
      clue: 'Benefit'
    },
    a16: {
      direction: 'across',
      number: 16,
      boxes: ['2,0','2,1','2,2','2,3'],
      clue: 'Tennis score just before winning a game'
    },
    a17: {
      direction: 'across',
      number: 17,
      boxes: ['2,5','2,6','2,7','2,8'],
      clue: '“This round\’s ___”'
    },
    a18: {
      direction: 'across',
      number: 18,
      boxes: ['2,10','2,11','2,12','2,13','2,14'],
      clue: 'Like many a smoker\’s voice'
    },
    a19: {
      direction: 'across',
      number: 19,
      boxes: ['3,0','3,1','3,2','3,3','3,4','3,5','3,6','3,7','3,8','3,9','3,10','3,11','3,12'],
      clue: '“The race has just begun, and it looks like the car from Warsaw will ___!”'
    },
    a22: {
      direction: 'across',
      number: 22,
      boxes: ['4,0','4,1','4,2','4,3','4,4','4,5','4,6'],
      clue: 'Religious recluse'
    },
    a23: {
      direction: 'across',
      number: 23,
      boxes: ['4,9','4,10','4,11','4,12','4,13','4,14'],
      clue: 'Basic readings for a hospital patient'
    },
    a26: {
      direction: 'across',
      number: 26,
      boxes: ['5,3','5,4','5,5'],
      clue: 'Lungful'
    },
    a27: {
      direction: 'across',
      number: 27,
      boxes: ['5,7','5,8','5,9','5,10'],
      clue: 'Hook\’s henchman'
    },
    a29: {
      direction: 'across',
      number: 29,
      boxes: ['5,12','5,13','5,14'],
      clue: 'In good health'
    },
    a30: {
      direction: 'across',
      number: 30,
      boxes: ['6,0','6,1','6,2','6,3','6,4','6,5','6,6','6,7','6,8','6,9','6,10'],
      clue: '“Listen! You can hear the thundering roar as the car from Moscow goes ___!”'
    },
    a34: {
      direction: 'across',
      number: 34,
      boxes: ['6,12','6,13','6,14'],
      clue: 'Letters on a wanted poster'
    },
    a35: {
      direction: 'across',
      number: 35,
      boxes: ['7,0','7,1','7,2','7,3'],
      clue: 'Supermarket IDs'
    },
    a36: {
      direction: 'across',
      number: 36,
      boxes: ['7,6','7,7','7,8'],
      clue: 'Something kept in reserve?'
    },
    a37: {
      direction: 'across',
      number: 37,
      boxes: ['7,11','7,12','7,13','7,14'],
      clue: 'Worry'
    },
    a38: {
      direction: 'across',
      number: 38,
      boxes: ['8,0','8,1','8,2'],
      clue: 'Negative conjunction'
    },
    a39: {
      direction: 'across',
      number: 39,
      boxes: ['8,4','8,5','8,6','8,7','8,8','8,9','8,10','8,11','8,12','8,13','8,14'],
      clue: '“We\’re getting close to the end as the car from Helsinki leads the way to the ___!”'
    },
    a43: {
      direction: 'across',
      number: 43,
      boxes: ['9,0','9,1','9,2'],
      clue: 'Animal whose name sounds like a Greek letter'
    },
    a44: {
      direction: 'across',
      number: 44,
      boxes: ['9,4','9,5','9,6','9,7'],
      clue: 'Andy\’s partner in old comedy'
    },
    a45: {
      direction: 'across',
      number: 45,
      boxes: ['9,9','9,10','9,11'],
      clue: 'Luau accessory'
    },
    a46: {
      direction: 'across',
      number: 46,
      boxes: ['10,0','10,1','10,2','10,3','10,4','10,5'],
      clue: 'Wife in Oaxaca'
    },
    a48: {
      direction: 'across',
      number: 48,
      boxes: ['10,8','10,9','10,11','10,10','10,12','10,13','10,14'],
      clue: 'Kind of fishing or diving'
    },
    a52: {
      direction: 'across',
      number: 52,
      boxes: ['11,2','11,3','11,4','11,5','11,6','11,7','11,8','11,9','11,10','11,11','11,12','11,13','11,14'],
      clue: '“Wow! The car from Prague ekes out the victory by a nose and takes the ___!”'
    },
    a55: {
      direction: 'across',
      number: 55,
      boxes: ['12,0','12,1','12,2','12,3','12,4'],
      clue: 'World Golf Hall-of-Famer Lorena'
    },
    a57: {
      direction: 'across',
      number: 57,
      boxes: ['12,6','12,7','12,8','12,9'],
      clue: '“On the double!”'
    },
    a58: {
      direction: 'across',
      number: 58,
      boxes: ['12,11','12,12','12,13','12,14'],
      clue: 'It “keeps the cold out better than a cloak,” per Longfellow'
    },
    a59: {
      direction: 'across',
      number: 59,
      boxes: ['13,0','13,1','13,2','13,3','13,4'],
      clue: 'Nuisances'
    },
    a60: {
      direction: 'across',
      number: 60,
      boxes: ['13,6','13,7','13,8','13,9'],
      clue: 'Bonkers'
    },
    a61: {
      direction: 'across',
      number: 61,
      boxes: ['13,11','13,12','13,13','13,14'],
      clue: 'Eclipse, to some'
    },
    a62: {
      direction: 'across',
      number: 62,
      boxes: ['14,0','14,1','14,2','14,3','14,4'],
      clue: 'Message to one\’s followers'
    },
    a63: {
      direction: 'across',
      number: 63,
      boxes: ['14,6','14,7','14,8'],
      clue: 'Hearty laugh'
    },
    a64: {
      direction: 'across',
      number: 64,
      boxes: ['14,11','14,12','14,13','14,14'],
      clue: 'Online comment'
    },



    d1: {
      direction: 'down',
      number: 1,
      boxes: ['0,0','1,0','2,0','3,0','4,0'],
      clue: 'Diamond, e.g.'
    },
    d2: {
      direction: 'down',
      number: 2,
      boxes: ['0,1','1,1','2,1','3,1','4,1'],
      clue: 'Old royal house'
    },
    d3: {
      direction: 'down',
      number: 3,
      boxes: ['0,2','1,2','2,2','3,2','4,2'],
      clue: 'Limber'
    },
    d4: {
      direction: 'down',
      number: 4,
      boxes: ['0,3','1,3','2,3','3,3','4,3','5,3','6,3','7,3'],
      clue: 'Factor in diagnosing osteoporosis'
    },
    d5: {
      direction: 'down',
      number: 5,
      boxes: ['0,6','1,6','2,6','3,6','4,6'],
      clue: 'Hustler\’s game'
    },
    d6: {
      direction: 'down',
      number: 6,
      boxes: ['0,7','1,7','2,7','3,7'],
      clue: 'Cartridge contents'
    },
    d7: {
      direction: 'down',
      number: 7,
      boxes: ['0,8','1,8','2,8','3,8'],
      clue: 'Shallow water obstacle'
    },
    d8: {
      direction: 'down',
      number: 8,
      boxes: ['0,10','1,10','2,10','3,10','4,10','5,10','6,10'],
      clue: 'Tubman of the Underground Railroad'
    },
    d9: {
      direction: 'down',
      number: 9,
      boxes: ['0,11','1,11','2,11','3,11','4,11'],
      clue: 'Sailor\’s “Stop!”'
    },
    d10: {
      direction: 'down',
      number: 10,
      boxes: ['0,12','1,12','2,12','3,12','4,12','5,12','6,12','7,12','8,12'],
      clue: 'Person with dreads'
    },
    d11: {
      direction: 'down',
      number: 11,
      boxes: ['0,13','1,13','2,13'],
      clue: 'Circle on a cube'
    },
    d12: {
      direction: 'down',
      number: 12,
      boxes: ['0,14','1,14','2,14'],
      clue: 'Foxy'
    },
    d14: {
      direction: 'down',
      number: 14,
      boxes: ['1,5','2,5','3,5','4,5','5,5','6,5'],
      clue: 'Sandinista\’s foe'
    },
    d20: {
      direction: 'down',
      number: 20,
      boxes: ['3,4','4,4','5,4','6,4'],
      clue: 'Rare grandfather clock numeral'
    },
    d21: {
      direction: 'down',
      number: 21,
      boxes: ['3,9','4,9','5,9','6,9'],
      clue: 'Currier\’s partner in lithography'
    },
    d24: {
      direction: 'down',
      number: 24,
      boxes: ['4,13','5,13','6,13','7,13','8,13'],
      clue: 'Compare'
    },
    d25: {
      direction: 'down',
      number: 25,
      boxes: ['4,14','5,14','6,14','7,14','8,14'],
      clue: 'Word in many university names'
    },
    d27: {
      direction: 'down',
      number: 27,
      boxes: ['5,7','6,7','7,7','8,7','9,7'],
      clue: '“Wheel of Fortune” turns'
    },
    d28: {
      direction: 'down',
      number: 28,
      boxes: ['5,8','6,8','7,8','8,8'],
      clue: 'Timbuktu\’s land'
    },
    d30: {
      direction: 'down',
      number: 30,
      boxes: ['6,0','7,0','8,0','9,0','10,0'],
      clue: 'Steps up?'
    },
    d31: {
      direction: 'down',
      number: 31,
      boxes: ['6,1','7,1','8,1','9,1'],
      clue: 'Barely ahead'
    },
    d32: {
      direction: 'down',
      number: 32,
      boxes: ['6,2','7,2','8,2','9,2','10,2','11,2','12,2','13,2','14,2'],
      clue: 'Ponytail holder'
    },
    d33: {
      direction: 'down',
      number: 33,
      boxes: ['6,6','7,6','8,6','9,6'],
      clue: 'Off-limits activity'
    },
    d37: {
      direction: 'down',
      number: 37,
      boxes: ['7,11','8,11','9,11','10,11','11,11','12,11','13,11','14,11'],
      clue: 'Switch positions'
    },
    d39: {
      direction: 'down',
      number: 39,
      boxes: ['8,4','9,4','10,4','11,4','12,4','13,4','14,4'],
      clue: 'Where China is'
    },
    d40: {
      direction: 'down',
      number: 40,
      boxes: ['8,5','9,5','10,5','11,5'],
      clue: 'Desktop computer that runs Safari'
    },
    d41: {
      direction: 'down',
      number: 41,
      boxes: ['8,9','9,9','10,9','11,9','12,9','13,9'],
      clue: 'Like many a new parent'
    },
    d42: {
      direction: 'down',
      number: 42,
      boxes: ['8,10','9,10','10,10','11,10'],
      clue: 'Obey'
    },
    d47: {
      direction: 'down',
      number: 47,
      boxes: ['10,3','11,3','12,3','13,3','14,3'],
      clue: 'Absorber of UV rays'
    },
    d48: {
      direction: 'down',
      number: 48,
      boxes: ['10,8','11,8','12,8','13,8','14,8'],
      clue: 'Quaffed'
    },
    d49: {
      direction: 'down',
      number: 49,
      boxes: ['10,12','11,12','12,12','13,12','14,12'],
      clue: 'Instant replay effect'
    },
    d50: {
      direction: 'down',
      number: 50,
      boxes: ['10,13','11,13','12,13','13,13','14,13'],
      clue: 'Sites for Christmas lights'
    },
    d51: {
      direction: 'down',
      number: 51,
      boxes: ['10,14','11,14','12,14','13,14','14,14'],
      clue: 'James Bond, e.g.'
    },
    d53: {
      direction: 'down',
      number: 53,
      boxes: ['11,6','12,6','13,6','14,6'],
      clue: 'Imprecise, as a memory'
    },
    d54: {
      direction: 'down',
      number: 54,
      boxes: ['11,7','12,7','13,7','14,7'],
      clue: 'Son of Rebekah'
    },
    d55: {
      direction: 'down',
      number: 55,
      boxes: ['12,0','13,0','14,0'],
      clue: 'Make a decision'
    },
    d56: {
      direction: 'down',
      number: 56,
      boxes: ['12,1','13,1','14,1'],
      clue: 'Crow\’s cry'
    }
  }
),
dailyWed = Daily.create!(
  wordcross_date: '2019-07-24',
  author: 'Jake Halperin',
  solution: [
    ['A','D','O','#','A','T','P','A','R','#','L','E','G','A','L'],
    ['B','E','N','#','D','I','A','N','E','#','A','B','O','D','E'],
    ['I','N','E','#','A','L','G','A','L','#','M','O','N','D','O'],
    ['T','O','N','A','M','E','A','C','O','U','P','L','E','#','#'],
    ['O','T','I','S','#','#','N','E','A','P','#','A','G','E','D'],
    ['F','E','L','L','I','N','I','#','D','R','E','#','I','M','O'],
    ['#','#','#','O','R','A','N','G','#','A','L','A','R','M','S'],
    ['#','T','O','P','U','T','I','T','M','I','L','D','L','Y','#'],
    ['L','E','V','E','L','A','#','O','A','S','I','S','#','#','#'],
    ['A','R','E','#','E','S','T','#','S','E','E','A','L','S','O'],
    ['W','I','R','Y','#','H','A','U','T','#','#','L','O','O','T'],
    ['#','#','T','O','S','A','Y','T','H','E','L','E','A','S','T'],
    ['E','R','I','K','A','#','L','E','E','L','A','#','T','O','E'],
    ['G','A','M','E','S','#','O','R','A','L','B','#','H','O','R'],
    ['O','P','E','L','S','#','R','I','D','E','S','#','E','N','S']
  ],
  label_set: [
    ['1','2','3','#','4','5','6','7','8','#','9','10','11','12','13'],
    ['14','','','#','15','','','','','#','16','','','',''],
    ['17','','','#','18','','','','','#','19','','','',''],
    ['20','','','21','','','','','','22','','','','#','#'],
    ['23','','','','#','#','24','','','','#','25','','26','27'],
    ['28','','','','29','30','','#','31','','32','#','33','',''],
    ['#','#','#','34','','','','35','#','36','','37','','',''],
    ['#','38','39','','','','','','40','','','','','','#'],
    ['41','','','','','','#','42','','','','','#','#','#'],
    ['43','','','#','44','','45','#','46','','','','47','48','49'],
    ['50','','','51','#','52','','53','','#','#','54','','',''],
    ['#','#','55','','56','','','','','57','58','','','',''],
    ['59','60','','','','#','61','','','','','#','62','',''],
    ['63','','','','','#','64','','','','','#','65','',''],
    ['66','','','','','#','67','','','','','#','68','','']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,0','0,1','0,2'],
      clue: 'Big fuss'
    },
    a4: {
      direction: 'across',
      number: 4,
      boxes: ['0,4','0,5','0,6','0,7','0,8'],
      clue: 'Neither above nor below face value'
    },
    a9: {
      direction: 'across',
      number: 9,
      boxes: ['0,10','0,11','0,12','0,13','0,14'],
      clue: 'Allowed'
    },
    a14: {
      direction: 'across',
      number: 14,
      boxes: ['1,0','1,1','1,2'],
      clue: '___ Bradlee, editor of The Washington Post during Watergate'
    },
    a15: {
      direction: 'across',
      number: 15,
      boxes: ['1,4','1,5','1,6','1,7','1,8'],
      clue: 'Actress Keaton'
    },
    a16: {
      direction: 'across',
      number: 16,
      boxes: ['1,10','1,11','1,12','1,13','1,14'],
      clue: 'Dwelling'
    },
    a17: {
      direction: 'across',
      number: 17,
      boxes: ['2,0','2,1','2,2'],
      clue: 'Like Stevie Wonder’s “Isn’t She Lovely”'
    },
    a18: {
      direction: 'across',
      number: 18,
      boxes: ['2,4','2,5','2,6','2,7','2,8'],
      clue: 'Like pond scum'
    },
    a19: {
      direction: 'across',
      number: 19,
      boxes: ['2,10','2,11','2,12','2,13','2,14'],
      clue: 'Mario’s world'
    },
    a20: {
      direction: 'across',
      number: 20,
      boxes: ['3,0','3,1','3,2','3,3','3,4','3,5','3,6','3,7','3,8','3,9','3,10','3,11','3,12'],
      clue: 'Task for new parents of twins?'
    },
    a23: {
      direction: 'across',
      number: 23,
      boxes: ['4,0','4,1','4,2','4,3'],
      clue: 'Elevator innovator Elisha'
    },
    a24: {
      direction: 'across',
      number: 24,
      boxes: ['4,6','4,7','4,8','4,9'],
      clue: '___ tide'
    },
    a25: {
      direction: 'across',
      number: 25,
      boxes: ['4,11','4,12','4,13','4,14'],
      clue: 'Like straight bourbon, for a minimum of two years'
    },
    a28: {
      direction: 'across',
      number: 28,
      boxes: ['5,0','5,1','5,2','5,3','5,4','5,5','5,6'],
      clue: '“La Dolce Vita” director'
    },
    a31: {
      direction: 'across',
      number: 31,
      boxes: ['5,8','5,9','5,10'],
      clue: 'Dad on “Black-ish”'
    },
    a33: {
      direction: 'across',
      number: 33,
      boxes: ['5,12','5,13','5,14'],
      clue: '“This texter thinks …”'
    },
    a34: {
      direction: 'across',
      number: 34,
      boxes: ['6,3','6,4','6,5','6,6','6,7'],
      clue: 'Long-armed zoo animal, informally'
    },
    a36: {
      direction: 'across',
      number: 36,
      boxes: ['6,9','6,10','6,11','6,12','6,13','6,14'],
      clue: 'Protection rackets?'
    },
    a38: {
      direction: 'across',
      number: 38,
      boxes: ['7,1','7,2','7,3','7,4','7,5','7,6','7,7','7,8','7,9','7,10','7,11','7,12','7,13'],
      clue: 'Task for a Thai chef cooking for typical Americans?'
    },
    a41: {
      direction: 'across',
      number: 41,
      boxes: ['8,0','8,1','8,2','8,3','8,4','8,5'],
      clue: 'Like the most protective hazmat suits'
    },
    a42: {
      direction: 'across',
      number: 42,
      boxes: ['8,7','8,8','8,9','8,10','8,11'],
      clue: 'Las Vegas was built around one'
    },
    a43: {
      direction: 'across',
      number: 43,
      boxes: ['9,0','9,1','9,2'],
      clue: 'What “bist” means in the 1930s hit “Bei Mir Bist Du Schoen”'
    },
    a44: {
      direction: 'across',
      number: 44,
      boxes: ['9,4','9,5','9,6'],
      clue: 'The “e” of i.e.'
    },
    a46: {
      direction: 'across',
      number: 46,
      boxes: ['9,8','9,9','9,10','9,11','9,12','9,13','9,14'],
      clue: 'Words of referral'
    },
    a50: {
      direction: 'across',
      number: 50,
      boxes: ['10,0','10,1','10,2','10,3'],
      clue: 'Lean and tough'
    },
    a52: {
      direction: 'across',
      number: 52,
      boxes: ['10,5','10,6','10,7','10,8'],
      clue: 'High, in Versailles'
    },
    a54: {
      direction: 'across',
      number: 54,
      boxes: ['10,11','10,12','10,13','10,14'],
      clue: 'Getaway car cargo'
    },
    a55: {
      direction: 'across',
      number: 55,
      boxes: ['11,2','11,3','11,4','11,5','11,6','11,7','11,8','11,9','11,10','11,11','11,12','11,13','11,14'],
      clue: 'Task for a Benedictine monk?'
    },
    a59: {
      direction: 'across',
      number: 59,
      boxes: ['12,0','12,1','12,2','12,3','12,4'],
      clue: 'Christensen of “Parenthood”'
    },
    a61: {
      direction: 'across',
      number: 61,
      boxes: ['12,6','12,7','12,8','12,9','12,10'],
      clue: 'Tank-topped, ponytailed “Futurama” character'
    },
    a62: {
      direction: 'across',
      number: 62,
      boxes: ['12,12','12,13','12,14'],
      clue: 'Aid in counting to 20?'
    },
    a63: {
      direction: 'across',
      number: 63,
      boxes: ['13,0','13,1','13,2','13,3','13,4'],
      clue: 'Much ESPN programming'
    },
    a64: {
      direction: 'across',
      number: 64,
      boxes: ['13,6','13,7','13,8','13,9','13,10'],
      clue: 'Maker of Glide floss'
    },
    a65: {
      direction: 'across',
      number: 65,
      boxes: ['13,12','13,13','13,14'],
      clue: 'Parallel to the x-axis: Abbr.'
    },
    a66: {
      direction: 'across',
      number: 66,
      boxes: ['14,0','14,1','14,2','14,3','14,4'],
      clue: 'Some German autos'
    },
    a67: {
      direction: 'across',
      number: 67,
      boxes: ['14,6','14,7','14,8','14,9','14,10'],
      clue: 'Coasters, e.g.'
    },
    a68: {
      direction: 'across',
      number: 68,
      boxes: ['14,12','14,13','14,14'],
      clue: 'Non-majority?'
    },



    d1: {
      direction: 'down',
      number: 1,
      boxes: ['0,0','1,0','2,0','3,0','4,0','5,0'],
      clue: 'Very little'
    },
    d2: {
      direction: 'down',
      number: 2,
      boxes: ['0,1','1,1','2,1','3,1','4,1','5,1'],
      clue: 'Indicate'
    },
    d3: {
      direction: 'down',
      number: 3,
      boxes: ['0,2','1,2','2,2','3,2','4,2','5,2'],
      clue: 'How the 2010 and 2014 FIFA World Cup finals ended'
    },
    d4: {
      direction: 'down',
      number: 4,
      boxes: ['0,4','1,4','2,4','3,4'],
      clue: 'Not know from ___'
    },
    d5: {
      direction: 'down',
      number: 5,
      boxes: ['0,5','1,5','2,5','3,5'],
      clue: 'Roofing option'
    },
    d6: {
      direction: 'down',
      number: 6,
      boxes: ['0,6','1,6','2,6','3,6','4,6','5,6','6,6','7,6'],
      clue: 'Violin virtuoso Niccolò'
    },
    d7: {
      direction: 'down',
      number: 7,
      boxes: ['0,7','1,7','2,7','3,7','4,7'],
      clue: 'Have ___ up one’s sleeve'
    },
    d8: {
      direction: 'down',
      number: 8,
      boxes: ['0,8','1,8','2,8','3,8','4,8','5,8'],
      clue: 'Circular arrow button in an address bar'
    },
    d9: {
      direction: 'down',
      number: 9,
      boxes: ['0,10','1,10','2,10','3,10'],
      clue: 'Common bedside item'
    },
    d10: {
      direction: 'down',
      number: 10,
      boxes: ['0,11','1,11','2,11','3,11','4,11'],
      clue: 'Virus first discovered in 1976'
    },
    d11: {
      direction: 'down',
      number: 11,
      boxes: ['0,12','1,12','2,12','3,12','4,12','5,12','6,12','7,12'],
      clue: 'Gillian Flynn thriller novel made into a hit 2014 film'
    },
    d12: {
      direction: 'down',
      number: 12,
      boxes: ['0,13','1,13','2,13'],
      clue: 'Interject'
    },
    d13: {
      direction: 'down',
      number: 13,
      boxes: ['0,14','1,14','2,14'],
      clue: 'Person born in late July'
    },
    d21: {
      direction: 'down',
      number: 21,
      boxes: ['3,3','4,3','5,3','6,3','7,3','8,3'],
      clue: 'Slanted'
    },
    d22: {
      direction: 'down',
      number: 22,
      boxes: ['3,9','4,9','5,9','6,9','7,9','8,9','9,9'],
      clue: 'Heighten'
    },
    d26: {
      direction: 'down',
      number: 26,
      boxes: ['4,13','5,13','6,13','7,13'],
      clue: 'Award for a soap, maybe'
    },
    d27: {
      direction: 'down',
      number: 27,
      boxes: ['4,14','5,14','6,14'],
      clue: 'Afros, e.g.'
    },
    d29: {
      direction: 'down',
      number: 29,
      boxes: ['5,5','6,5','7,5','8,5','9,5'],
      clue: 'Cry with a fist pump'
    },
    d30: {
      direction: 'down',
      number: 30,
      boxes: ['5,6','6,6','7,6','8,6','9,6','10,6','11,6'],
      clue: '“Sesame Street” baby Muppet'
    },
    d32: {
      direction: 'down',
      number: 32,
      boxes: ['5,11','6,11','7,11','8,11','9,11'],
      clue: 'Actress/comic Kemper'
    },
    d35: {
      direction: 'down',
      number: 35,
      boxes: ['6,7','7,7','8,7'],
      clue: 'Letters after “Yeah, yeah, little …,” in a 1964 hit'
    },
    d37: {
      direction: 'down',
      number: 37,
      boxes: ['6,11','7,11','8,11','9,11','10,11','11,11'],
      clue: 'Pitcher’s success?'
    },
    d38: {
      direction: 'down',
      number: 38,
      boxes: ['7,1','8,1','9,1','10,1'],
      clue: 'Actress Garr'
    },
    d39: {
      direction: 'down',
      number: 39,
      boxes: ['7,2','8,2','9,2','10,2','11,2','12,2','13,2','14,2'],
      clue: 'Reward for working late'
    },
    d40: {
      direction: 'down',
      number: 40,
      boxes: ['7,8','8,8','9,8','10,8','11,8','12,8','13,8','14,8'],
      clue: 'It names names in a newspaper'
    },
    d41: {
      direction: 'down',
      number: 41,
      boxes: ['8,0','9,0','10,0'],
      clue: 'Part of LSAT'
    },
    d45: {
      direction: 'down',
      number: 45,
      boxes: ['9,6','10,6','11,6','12,6','13,6','14,6'],
      clue: 'Lord’s partner'
    },
    d47: {
      direction: 'down',
      number: 47,
      boxes: ['9,12','10,12','11,12','12,12','13,12','14,12'],
      clue: 'Hate'
    },
    d48: {
      direction: 'down',
      number: 48,
      boxes: ['9,13','10,13','11,13','12,13','13,13','14,13'],
      clue: '“Already?”'
    },
    d49: {
      direction: 'down',
      number: 49,
      boxes: ['9,14','10,14','11,14','12,14','13,14','14,14'],
      clue: 'Predators of crayfish'
    },
    d51: {
      direction: 'down',
      number: 51,
      boxes: ['10,3','11,3','12,3','13,3','14,3'],
      clue: 'Cosmopolitan’s opposite'
    },
    d53: {
      direction: 'down',
      number: 53,
      boxes: ['10,7','11,7','12,7','13,7','14,7'],
      clue: 'Gestation stations?'
    },
    d56: {
      direction: 'down',
      number: 56,
      boxes: ['11,5','12,5','13,5','14,5'],
      clue: 'Some wisecracks'
    },
    d57: {
      direction: 'down',
      number: 57,
      boxes: ['11,9','12,9','13,9','14,9'],
      clue: 'Magazine with an “Ask E. Jean” column'
    },
    d58: {
      direction: 'down',
      number: 58,
      boxes: ['11,10','12,10','13,10','14,10'],
      clue: 'Places for vials'
    },
    d59: {
      direction: 'down',
      number: 59,
      boxes: ['12,0','13,0','14,0'],
      clue: 'Latin “I”'
    },
    d60: {
      direction: 'down',
      number: 60,
      boxes: ['12,1','13,1','14,1'],
      clue: 'Knock at the door'
    }
  }
),
dailyThu = Daily.create!(
  wordcross_date: '2020-07-23',
  author: 'Robyn Weintraub',
  solution: [
    ['S','U','N','#','#','S','P','E','D','#','R','A','M','A','#'],
    ['L','S','A','T','#','M','A','L','I','#','O','M','I','T','S'],
    ['U','H','O','H','#','E','R','I','N','#','T','E','N','S','E'],
    ['R','E','M','O','V','E','T','H','E','#','C','R','U','E','L'],
    ['P','R','I','M','A','#','Y','U','R','T','#','I','T','A','L'],
    ['#','#','#','A','R','C','H','#','O','U','N','C','E','#','#'],
    ['O','L','E','S','#','H','A','M','#','R','O','A','M','E','D'],
    ['S','T','L','#','L','E','T','T','E','R','W','#','E','R','A'],
    ['O','R','A','C','L','E','#','N','Y','E','#','C','N','E','T'],
    ['#','#','B','E','C','K','S','#','E','T','N','A','#','#','#'],
    ['T','R','O','N','#','S','I','T','S','#','B','R','A','V','A'],
    ['B','I','R','T','H','#','F','R','O','M','C','L','U','E','S'],
    ['S','P','A','R','E','#','T','U','N','A','#','O','T','I','C'],
    ['P','U','T','I','N','#','E','L','M','S','#','S','O','L','O'],
    ['#','P','E','C','S','#','D','Y','E','S','#','#','S','S','T']
  ],
  label_set:[
    ['1','2','3','#','#','4','5','6','7','#','8','9','10','11','#'],
    ['12','','','13','#','14','','','','#','15','','','','16'],
    ['17','','','','#','18','','','','#','19','','','',''],
    ['20','','','','21','','','','','#','22','','','',''],
    ['23','','','','','#','24','','','25','#','26','','',''],
    ['#','#','#','27','','28','','#','29','','30','','','#','#'],
    ['31','32','33','','#','34','','35','#','36','','','','37','38'],
    ['39','','','#','40','','','','41','','','#','42','',''],
    ['43','','','44','','','#','45','','','#','46','','',''],
    ['#','#','47','','','','48','#','49','','50','','#','#','#'],
    ['51','52','','','#','53','','54','','#','55','','56','57','58'],
    ['59','','','','60','#','61','','','62','','','','',''],
    ['63','','','','','#','64','','','','#','65','','',''],
    ['66','','','','','#','67','','','','#','68','','',''],
    ['#','69','','','','#','70','','','','#','#','71','','']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,0','0,1','0,2'],
      clue: 'Major source of wheat'
    },
    a4: {
      direction: 'across',
      number: 4,
      boxes: ['0,5','0,6','0,7','0,8'],
      clue: 'Zipped'
    },
    a8: { 
      direction: 'across',
      number: 8,
      boxes: ['0,10','0,11','0,12','0,13'],
      clue: 'Hindu avatar'
    },
    a12: {
      direction: 'across',
      number: 12,
      boxes: ['1,0','1,1','1,2','1,3'],
      clue: 'Kaplan course subj.'
    },
    a14: {
      direction: 'across',
      number: 14,
      boxes: ['1,5','1,6','1,7','1,8'],
      clue: 'Neighbor of Algeria'
    },
    a15: {
      direction: 'across',
      number: 15,
      boxes: ['1,10','1,11','1,12','1,13','1,14'],
      clue: 'Snubs, possibly'
    },
    a17: {
      direction: 'across',
      number: 17,
      boxes: ['2,0','2,1','2,2','2,3'],
      clue: 'Swaying just before a disaster'
    },
    a18: {
      direction: 'across',
      number: 18,
      boxes: ['2,5','2,6','2,7','2,8'],
      clue: 'Blarney Stone site'
    },
    a19: {
      direction: 'across',
      number: 19,
      boxes: ['2,10','2,11','2,12','2,13','2,14'],
      clue: 'Wedgy'
    },
    a20: {
      direction: 'across',
      number: 20,
      boxes: ['3,0','3,1','3,2','3,3','3,4','3,5','3,6','3,7','3,8'],
      clue: 'Part 1 of an instruction for solving this puzzle'
    },
    a22: {
      direction: 'across',
      number: 22,
      boxes: ['3,10','3,11','3,12','3,13','3,14'],
      clue: 'Mean'
    },
    a23: {
      direction: 'across',
      number: 23,
      boxes: ['4,0','4,1','4,2','4,3','4,4'],
      clue: 'Donna\’s predecessor?'
    },
    a24: {
      direction: 'across',
      number: 24,
      boxes: ['4,6','4,7','4,8','4,9'],
      clue: 'Glamping option'
    },
    a26: {
      direction: 'across',
      number: 26,
      boxes: ['4,11','4,12','4,13','4,14'],
      clue: 'Bold alternative: Abbr.'
    },
    a27: {
      direction: 'across',
      number: 27,
      boxes: ['5,3','5,4','5,5','5,6'],
      clue: 'Image on the Missouri state quarter'
    },
    a29: {
      direction: 'across',
      number: 29,
      boxes: ['5,8','5,9','5,10','5,11','5,12'],
      clue: 'A jigger is bigger than this'
    },
    a31: {
      direction: 'across',
      number: 31,
      boxes: ['6,0','6,1','6,2','6,3'],
      clue: 'Some loud chewers'
    },
    a34: {
      direction: 'across',
      number: 34,
      boxes: ['6,5','6,6','6,7'],
      clue: 'Limelight stealer'
    },
    a36: {
      direction: 'across',
      number: 36,
      boxes: ['6,9','6,10','6,11','6,12','6,13','6,14'],
      clue: 'Didn\’t stay put'
    },
    a39: {
      direction: 'across',
      number: 39,
      boxes: ['7,0','7,1','7,2'],
      clue: 'The Cardinals, on scoreboards'
    },
    a40: {
      direction: 'across',
      number: 40,
      boxes: ['7,4','7,5','7,6','7,7','7,8','7,9','7,10'],
      clue: 'Part 2 of the instruction'
    },
    a42: {
      direction: 'across',
      number: 42,
      boxes: ['7,12','7,13','7,14'],
      clue: 'Many wages'
    },
    a43: {
      direction: 'across',
      number: 43,
      boxes: ['8,0','8,1','8,2','8,3','8,4','8,5'],
      clue: 'Sewer'
    },
    a45: {
      direction: 'across',
      number: 45,
      boxes: ['8,7','8,8','8,9'],
      clue: 'TV\’s “Science Guy”'
    },
    a46: {
      direction: 'across',
      number: 46,
      boxes: ['8,11','8,12','8,13','8,14'],
      clue: 'Tech info site'
    },
    a47: {
      direction: 'across',
      number: 47,
      boxes: ['9,2','9,3','9,4','9,5','9,6'],
      clue: 'Heineken alternative'
    },
    a49: {
      direction: 'across',
      number: 49,
      boxes: ['9,8','9,9','9,10','9,11'],
      clue: 'Smoking hot Italian?'
    },
    a51: {
      direction: 'across',
      number: 51,
      boxes: ['10,0','10,1','10,2','10,3'],
      clue: '1982 film that takes place inside a computer'
    },
    a53: {
      direction: 'across',
      number: 53,
      boxes: ['10,5','10,6','10,7','10,8'],
      clue: 'Wrests'
    },
    a55: {
      direction: 'across',
      number: 55,
      boxes: ['10,10','10,11','10,12','10,13','10,14'],
      clue: 'Cry in an opera house'
    },
    a59: {
      direction: 'across',
      number: 59,
      boxes: ['11,0','11,1','11,2','11,3','11,4'],
      clue: 'Labor day event'
    },
    a61: {
      direction: 'across',
      number: 61,
      boxes: ['11,6','11,7','11,8','11,9','11,10','11,11','11,12','11,13','11,14'],
      clue: 'End of the instruction'
    },
    a63: {
      direction: 'across',
      number: 63,
      boxes: ['12,0','12,1','12,2','12,3','12,4'],
      clue: 'Minimalist'
    },
    a64: {
      direction: 'across',
      number: 64,
      boxes: ['12,6','12,7','12,8','12,9'],
      clue: 'Fish frequently caught by newts'
    },
    a65: {
      direction: 'across',
      number: 65,
      boxes: ['12,11','12,12','12,13','12,14'],
      clue: 'Ending for patri-'
    },
    a66: {
      direction: 'across',
      number: 66,
      boxes: ['13,0','13,1','13,2','13,3','13,4'],
      clue: 'Leader typically appearing shirtless in “S.N.L.” parodies'
    },
    a67: {
      direction: 'across',
      number: 67,
      boxes: ['13,6','13,7','13,8','13,9'],
      clue: 'Colonnade trees'
    },
    a68: {
      direction: 'across',
      number: 68,
      boxes: ['13,11','13,12','13,13','13,14'],
      clue: 'Hawn of the silver screen'
    },
    a69: {
      direction: 'across',
      number: 69,
      boxes: ['14,1','14,2','14,3','14,4'],
      clue: 'Bustline muscles, informally'
    },
    a70: {
      direction: 'across',
      number: 70,
      boxes: ['14,6','14,7','14,8','14,9'],
      clue: 'Some winks'
    },
    a71: {
      direction: 'across',
      number: 71,
      boxes: ['14,12','14,13','14,14'],
      clue: 'Retired means of travel, for short'
    },

    d1: {
      direction: 'down',
      number: 1 ,
      boxes: ['0,0','1,0','2,0','3,0','4,0','5,0'],
      clue: 'Result of loose lips?'
    },
    d2: {
      direction: 'down',
      number: 2 ,
      boxes: ['0,1','1,1','2,1','3,1','4,1'],
      clue: 'Job that involves a lot of sweating'
    },
    d3: {
      direction: 'down',
      number: 3 ,
      boxes: ['0,2','1,2','2,2','3,2','4,2'],
      clue: 'Judd of country music'
    },
    d4: {
      direction: 'down',
      number: 4 ,
      boxes: ['0,5','1,5','2,5','3,5'],
      clue: 'Hook associate'
    },
    d5: {
      direction: 'down',
      number: 5 ,
      boxes: ['0,6','1,6','2,6','3,6','4,6','5,6','6,6','7,6'],
      clue: 'Handout on December 31'
    },
    d6: {
      direction: 'down',
      number: 6 ,
      boxes: ['0,7','1,7','2,7','3,7','4,7'],
      clue: 'Peace Nobelist Root'
    },
    d7: {
      direction: 'down',
      number: 7 ,
      boxes: ['0,8','1,8','2,8','3,8','4,8','5,8'],
      clue: 'Dough used in a taqueria'
    },
    d8: {
      direction: 'down',
      number: 8 ,
      boxes: ['0,10','1,10','2,10','3,10'],
      clue: 'Org. for some future lts.'
    },
    d9: {
      direction: 'down',
      number: 9 ,
      boxes: ['0,11','1,11','2,11','3,11','4,11','5,11','6,11'],
      clue: 'AWOL part'
    },
    d10: {
      direction: 'down',
      number: 10,
      boxes: ['0,12','1,12','2,12','3,12','4,12','5,12','6,12','7,12','8,12'],
      clue: 'Colonial force'
    },
    d11: {
      direction: 'down',
      number: 11,
      boxes: ['0,13','1,13','2,13','3,13','4,13'],
      clue: 'Own a boat, say'
    },
    d13: {
      direction: 'down',
      number: 13,
      boxes: ['1,3','2,3','3,3','4,3','5,3','6,3'],
      clue: 'Pewter accompanier in the Bible'
    },
    d16: {
      direction: 'down',
      number: 16,
      boxes: ['1,14','2,14','3,14','4,14'],
      clue: 'Wads are made to do this'
    },
    d21: {
      direction: 'down',
      number: 21,
      boxes: ['3,4','4,4','5,4'],
      clue: '“Emeer” for “emir,” e.g.: Abbr.'
    },
    d25: {
      direction: 'down',
      number: 25,
      boxes: ['4,9','5,9','6,9','7,9','8,9','9,9'],
      clue: 'Castle feature'
    },
    d28: {
      direction: 'down',
      number: 28,
      boxes: ['5,5','6,5','7,5','8,5','9,5','10,5'],
      clue: '“Rosy” things'
    },
    d30: {
      direction: 'down',
      number: 30,
      boxes: ['5,10','6,10','7,10'],
      clue: 'Present … or a concise explanation of this puzzle\’s theme'
    },
    d31: {
      direction: 'down',
      number: 31,
      boxes: ['6,0','7,0','8,0'],
      clue: '“Special Agent ___” (Disney animated series)'
    },
    d32: {
      direction: 'down',
      number: 32,
      boxes: ['6,1','7,1','8,1'],
      clue: 'Copier tray abbr.'
    },
    d33: {
      direction: 'down',
      number: 33,
      boxes: ['6,2','7,2','8,2','9,2','10,2','11,2','12,2','13,2','14,2'],
      clue: 'Go on'
    },
    d35: {
      direction: 'down',
      number: 35,
      boxes: ['6,7','7,7','8,7'],
      clue: 'High point: Abbr.'
    },
    d37: {
      direction: 'down',
      number: 37,
      boxes: ['6,13','7,13','8,13'],
      clue: 'Poet\’s “before”'
    },
    d38: {
      direction: 'down',
      number: 38,
      boxes: ['6,14','7,14','8,14'],
      clue: '“Can\’t Help Lovin\’ ___ Man”'
    },
    d40: {
      direction: 'down',
      number: 40,
      boxes: ['7,4','8,4','9,4'],
      clue: 'Cousin of “Inc.”'
    },
    d41: {
      direction: 'down',
      number: 41,
      boxes: ['7,8','8,8','9,8','10,8','11,8','12,8','13,8','14,8'],
      clue: '“I need your full attention over here”'
    },
    d44: {
      direction: 'down',
      number: 44,
      boxes: ['8,3','9,3','10,3','11,3','12,3','13,3','14,3'],
      clue: 'Ending that\’s in the middle?'
    },
    d46: {
      direction: 'down',
      number: 46,
      boxes: ['8,11','9,11','10,11','11,11','12,11','13,11'],
      clue: 'Santana of Santana'
    },
    d48: {
      direction: 'down',
      number: 48,
      boxes: ['9,6','10,6','11,6','12,6','13,6','14,6'],
      clue: 'Like flour for baking'
    },
    d50: {
      direction: 'down',
      number: 50,
      boxes: ['9,10','10,10','11,10'],
      clue: 'Original airer of “The Monkees”'
    },
    d51: {
      direction: 'down',
      number: 51,
      boxes: ['10,0','11,0','12,0','13,0'],
      clue: 'Shortening used in recipes?'
    },
    d52: {
      direction: 'down',
      number: 52,
      boxes: ['10,1','11,1','12,1','13,1','14,1'],
      clue: 'Shrewd'
    },
    d54: {
      direction: 'down',
      number: 54,
      boxes: ['10,7','11,7','12,7','13,7','14,7'],
      clue: 'In all honesty'
    },
    d56: {
      direction: 'down',
      number: 56,
      boxes: ['10,12','11,12','12,12','13,12','14,12'],
      clue: 'Fiats, e.g.'
    },
    d57: {
      direction: 'down',
      number: 57,
      boxes: ['10,13','11,13','12,13','13,13','14,13'],
      clue: 'Bridal shop display'
    },
    d58: {
      direction: 'down',
      number: 58,
      boxes: ['10,14','11,14','12,14','13,14','14,14'],
      clue: 'Berkshire racecourse'
    },
    d60: {
      direction: 'down',
      number: 60,
      boxes: ['11,4','12,4','13,4','14,4'],
      clue: 'Certain lawyers'
    },
    d62: {
      direction: 'down',
      number: 62,
      boxes: ['11,9','12,9','13,9','14,9'],
      clue: 'It may be critical'
    }
  }
),
dailyFri = Daily.create!(
  wordcross_date: '2020-07-17',
  author: 'Rich Proulx',
  solution: [
    ['#','#','S','W','A','B','#','#','#','G','A','G','A','#','#'],
    ['#','S','T','E','N','O','S','#','A','E','O','L','U','S','#'],
    ['C','H','A','R','A','C','T','E','R','S','K','E','T','C','H'],
    ['R','A','T','E','#','C','A','R','T','S','#','N','O','R','A'],
    ['E','V','E','#','G','E','R','I','T','O','L','#','P','A','L'],
    ['D','E','L','T','A','#','L','E','E','#','A','D','A','P','T'],
    ['#','N','E','A','R','D','I','S','A','S','T','E','R','S','#'],
    ['#','#','G','L','O','A','T','#','C','H','E','S','T','#','#'],
    ['#','T','I','L','T','M','E','C','H','A','N','I','S','M','#'],
    ['H','A','S','#','T','O','R','R','E','N','T','#','S','E','A'],
    ['A','L','L','#','E','N','S','U','R','E','S','#','T','A','X'],
    ['J','O','A','N','#','#','#','#','#','#','#','D','O','N','E'],
    ['I','N','T','I','M','A','T','E','A','P','P','A','R','E','L'],
    ['#','S','O','L','O','P','E','R','F','O','R','M','E','R','#'],
    ['#','#','R','E','P','U','T','A','T','I','O','N','S','#','#']
  ],
  label_set:[
    ['#','#','1','2','3','4','#','#','#','5','6','7','8','#','#'],
    ['#','9','','','','','10','#','11','','','','','12','#'],
    ['13','','','','','','','14','','','','','','','15'],
    ['16','','','','#','17','','','','','#','18','','',''],
    ['19','','','#','20','','','','','','21','#','22','',''],
    ['23','','','24','','#','25','','','#','26','27','','',''],
    ['#','28','','','','29','','','','30','','','','','#'],
    ['#','#','31','','','','','#','32','','','','','#','#'],
    ['#','33','','','','','','34','','','','','','35','#'],
    ['36','','','#','37','','','','','','','#','38','','39'],
    ['40','','','#','41','','','','','','','#','42','',''],
    ['43','','','44','#','#','#','#','#','#','#','45','','',''],
    ['46','','','','47','48','49','50','51','52','53','','','',''],
    ['#','54','','','','','','','','','','','','','#'],
    ['#','#','55','','','','','','','','','','','#','#']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1 ,
      boxes: ['0,2','0,3','0,4','0,5'],
      clue: 'Clear, as the deck'
    },
    a5: {
      direction: 'across',
      number: 5 ,
      boxes: ['0,9','0,10','0,11','0,12'],
      clue: 'Nuts (over)'
    },
    a9: {
      direction: 'across',
      number: 9 ,
      boxes: ['1,1','1,2','1,3','1,4','1,5','1,6'],
      clue: 'Some office workers on “Mad Men”'
    },
    a11: {
      direction: 'across',
      number: 11,
      boxes: ['1,8','1,9','1,10','1,11','1,12','1,13'],
      clue: 'Greek god of the winds'
    },
    a13: {
      direction: 'across',
      number: 13,
      boxes: ['2,0','2,1','2,2','2,3','2,4','2,5','2,6','2,7','2,8','2,9','2,10','2,11','2,12','2,13','2,14'],
      clue: 'Literary profile'
    },
    a16: {
      direction: 'across',
      number: 16,
      boxes: ['3,0','3,1','3,2','3,3'],
      clue: 'Speed'
    },
    a17: {
      direction: 'across',
      number: 17,
      boxes: ['3,5','3,6','3,7','3,8','3,9'],
      clue: 'Links things?'
    },
    a18: {
      direction: 'across',
      number: 18,
      boxes: ['3,11','3,12','3,13','3,14'],
      clue: 'Romance novelist Roberts'
    },
    a19: {
      direction: 'across',
      number: 19,
      boxes: ['4,0','4,1','4,2'],
      clue: 'Woman\’s name that means “life”'
    },
    a20: {
      direction: 'across',
      number: 20,
      boxes: ['4,4','4,5','4,6','4,7','4,8','4,9','4,10'],
      clue: 'Vitamin supplement brand'
    },
    a22: {
      direction: 'across',
      number: 22,
      boxes: ['4,12','4,13','4,14'],
      clue: 'Bud'
    },
    a23: {
      direction: 'across',
      number: 23,
      boxes: ['5,0','5,1','5,2','5,3','5,4'],
      clue: 'It forms at the mouth'
    },
    a25: {
      direction: 'across',
      number: 25,
      boxes: ['5,6','5,7','5,8'],
      clue: 'Majors in acting'
    },
    a26: {
      direction: 'across',
      number: 26,
      boxes: ['5,10','5,11','5,12','5,13','5,14'],
      clue: 'Not be stuck in one’s ways'
    },
    a28: {
      direction: 'across',
      number: 28,
      boxes: ['6,1','6,2','6,3','6,4','6,5','6,6','6,7','6,8','6,9','6,10','6,11','6,12','6,13'],
      clue: 'Close ones'
    },
    a31: {
      direction: 'across',
      number: 31,
      boxes: ['7,2','7,3','7,4','7,5','7,6'],
      clue: 'Be a bad winner'
    },
    a32: {
      direction: 'across',
      number: 32,
      boxes: ['7,8','7,9','7,10','7,11','7,12'],
      clue: 'Home where the heart is?'
    },
    a33: {
      direction: 'across',
      number: 33,
      boxes: ['8,1','8,2','8,3','8,4','8,5','8,6','8,7','8,8','8,9','8,10','8,11','8,12','8,13'],
      clue: 'Pinball player\’s undoing'
    },
    a36: {
      direction: 'across',
      number: 36,
      boxes: ['9,0','9,1','9,2'],
      clue: 'Is blessed with'
    },
    a37: {
      direction: 'across',
      number: 37,
      boxes: ['9,4','9,5','9,6','9,7','9,8','9,9','9,10'],
      clue: 'Flood'
    },
    a38: {
      direction: 'across',
      number: 38,
      boxes: ['9,12','9,13','9,14'],
      clue: 'Title locale for a Hemingway novel, with “the”'
    },
    a40: {
      direction: 'across',
      number: 40,
      boxes: ['10,0','10,1','10,2'],
      clue: 'Tide competitor'
    },
    a41: {
      direction: 'across',
      number: 41,
      boxes: ['10,4','10,5','10,6','10,7','10,8','10,9','10,10'],
      clue: 'Sews up'
    },
    a42: {
      direction: 'across',
      number: 42,
      boxes: ['10,12','10,13','10,14'],
      clue: 'Strain'
    },
    a43: {
      direction: 'across',
      number: 43,
      boxes: ['11,0','11,1','11,2','11,3'],
      clue: 'Woman\’s name in English that\’s a man\’s name in Catalan'
    },
    a45: {
      direction: 'across',
      number: 45,
      boxes: ['11,11','11,12','11,13','11,14'],
      clue: 'What a “R-r-r-ring!” in the kitchen signifies'
    },
    a46: {
      direction: 'across',
      number: 46,
      boxes: ['12,0','12,1','12,2','12,3','12,4','12,5','12,6','12,7','12,8','12,9','12,10','12,11','12,12','12,13','12,14'],
      clue: 'Slips, e.g.'
    },
    a54: {
      direction: 'across',
      number: 54,
      boxes: ['13,1','13,2','13,3','13,4','13,5','13,6','13,7','13,8','13,9','13,10','13,11','13,12','13,13'],
      clue: 'Person with no one to play with'
    },
    a55: {
      direction: 'across',
      number: 55,
      boxes: ['14,2','14,3','14,4','14,5','14,6','14,7','14,8','14,9','14,10','14,11','14,12'],
      clue: 'Names'
    },



    d1: {
      direction: 'down',
      number: 1,
      boxes: ['0,2','1,2','2,2','3,2','4,2','5,2','6,2','7,2','8,2','9,2','10,2','11,2','12,2','13,2','14,2'],
      clue: 'Worker in Albany or Sacramento, say'
    },
    d2: {
      direction: 'down',
      number: 2,
      boxes: ['0,3','1,3','2,3','3,3'],
      clue: '“Now ___ talking!”'
    },
    d3: {
      direction: 'down',
      number: 3,
      boxes: ['0,4','1,4','2,4'],
      clue: 'Tokyo-based carrier'
    },
    d4: {
      direction: 'down',
      number: 4,
      boxes: ['0,5','1,5','2,5','3,5','4,5'],
      clue: 'Game played on a 90-foot-long court'
    },
    d5: {
      direction: 'down',
      number: 5,
      boxes: ['0,9','1,9','2,9','3,9','4,9'],
      clue: 'Painter\’s mixture'
    },
    d6: {
      direction: 'down',
      number: 6,
      boxes: ['0,10','1,10','2,10'],
      clue: '“Peachy!”'
    },
    d7: {
      direction: 'down',
      number: 7,
      boxes: ['0,11','1,11','2,11','3,11'],
      clue: 'A stream might run through it'
    },
    d8: {
      direction: 'down',
      number: 8,
      boxes: ['0,12','1,12','2,12','3,12','4,12','5,12','6,12','7,12','8,12','9,12','10,12','11,12','12,12','13,12','14,12'],
      clue: 'Hose and belt sellers'
    },
    d9: {
      direction: 'down',
      number: 9,
      boxes: ['1,1','2,1','3,1','4,1','5,1','6,1'],
      clue: 'Bald-faced'
    },
    d10: {
      direction: 'down',
      number: 10,
      boxes: ['1,6','2,6','3,6','4,6','5,6','6,6','7,6','8,6','9,6','10,6','11,6'],
      clue: 'Joey Dee\’s backup group in 1960s pop, with “the”'
    },
    d11: {
      direction: 'down',
      number: 11,
      boxes: ['1,8','2,8','3,8','4,8','5,8','6,8','7,8','8,8','9,8','10,8','11,8'],
      clue: 'One who might grade on the curve?'
    },
    d12: {
      direction: 'down',
      number: 12,
      boxes: ['1,13','2,13','3,13','4,13','5,13','6,13'],
      clue: 'Rows'
    },
    d13: {
      direction: 'down',
      number: 13,
      boxes: ['2,0','3,0','4,0','5,0'],
      clue: 'Street ___'
    },
    d14: {
      direction: 'down',
      number: 14,
      boxes: ['2,7','3,7','4,7','5,7','6,7'],
      clue: 'Western New York natives'
    },
    d15: {
      direction: 'down',
      number: 15,
      boxes: ['2,14','3,14','4,14','5,14'],
      clue: 'Discontinue'
    },
    d20: {
      direction: 'down',
      number: 20,
      boxes: ['4,4','5,4','6,4','7,4','8,4','9,4','10,4'],
      clue: 'Choke'
    },
    d21: {
      direction: 'down',
      number: 21,
      boxes: ['4,10','5,10','6,10','7,10','8,10','9,10','10,10'],
      clue: 'Faint prints, in detective work'
    },
    d24: {
      direction: 'down',
      number: 24,
      boxes: ['5,3','6,3','7,3','8,3'],
      clue: 'Like Wookiees'
    },
    d27: {
      direction: 'down',
      number: 27,
      boxes: ['5,11','6,11','7,11','8,11'],
      clue: 'Member of the South Asian diaspora'
    },
    d29: {
      direction: 'down',
      number: 29,
      boxes: ['6,5','7,5','8,5','9,5','10,5'],
      clue: 'One of the Wayans brothers'
    },
    d30: {
      direction: 'down',
      number: 30,
      boxes: ['6,9','7,9','8,9','9,9','10,9'],
      clue: 'Classic western hero who says “A man has to be what he is, Joey. Can\’t break the mold”'
    },
    d33: {
      direction: 'down',
      number: 33,
      boxes: ['8,1','9,1','10,1','11,1','12,1','13,1'],
      clue: 'Nails for kites'
    },
    d34: {
      direction: 'down',
      number: 34,
      boxes: ['8,7','9,7','10,7'],
      clue: 'Word on a French wine bottle'
    },
    d35: {
      direction: 'down',
      number: 35,
      boxes: ['8,13','9,13','10,13','11,13','12,13','13,13'],
      clue: 'Like bad, bad Leroy Brown vis-à-vis a junkyard dog, in song'
    },
    d36: {
      direction: 'down',
      number: 36,
      boxes: ['9,0','10,0','11,0','12,0'],
      clue: 'Mideast traveler, of a sort'
    },
    d39: {
      direction: 'down',
      number: 39,
      boxes: ['9,14','10,14','11,14','12,14'],
      clue: 'Double or triple feat in the Olympics'
    },
    d44: {
      direction: 'down',
      number: 44,
      boxes: ['11,3','12,3','13,3','14,3'],
      clue: 'View from Memphis'
    },
    d45: {
      direction: 'down',
      number: 45,
      boxes: ['11,11','12,11','13,11','14,11'],
      clue: '“Nuts!”'
    },
    d47: {
      direction: 'down',
      number: 47,
      boxes: ['12,4','13,4','14,4'],
      clue: 'Challenge for a barber'
    },
    d48: {
      direction: 'down',
      number: 48,
      boxes: ['12,5','13,5','14,5'],
      clue: '“The Problem With ___” (2017 documentary)'
    },
    d49: {
      direction: 'down',
      number: 49,
      boxes: ['12,6','13,6','14,6'],
      clue: 'Annual three-day celebration'
    },
    d50: {
      direction: 'down',
      number: 50,
      boxes: ['12,7','13,7','14,7'],
      clue: 'Tide competitor'
    },
    d51: {
      direction: 'down',
      number: 51,
      boxes: ['12,8','13,8','14,8'],
      clue: 'In the back'
    },
    d52: {
      direction: 'down',
      number: 52,
      boxes: ['12,9','13,9','14,9'],
      clue: 'Luau offering'
    },
    d53: {
      direction: 'down',
      number: 53,
      boxes: ['12,10','13,10','14,10'],
      clue: 'Backing'
    }
  }
),
dailySat = Daily.create!(
  wordcross_date: '2020-02-15',
  author: 'Randolph Ross',
  solution: [
    ['S','U','C','K','D','R','Y','#','A','P','P','E','A','S','E'],
    ['I','N','H','E','R','E','D','#','C','H','A','N','T','E','R'],
    ['T','H','R','E','A','D','S','#','T','O','R','T','O','L','A'],
    ['S','E','I','S','M','S','#','T','A','N','L','I','N','E','S'],
    ['H','A','S','H','E','E','S','H','#','E','O','C','E','N','E'],
    ['I','T','S','A','D','A','T','E','#','S','U','E','D','E','S'],
    ['V','E','I','N','Y','#','E','S','T','E','R','S','#','#','#'],
    ['A','D','E','#','#','R','E','M','A','X','#','#','T','E','A'],
    ['#','#','#','H','E','A','D','U','P','#','A','W','O','L','S'],
    ['S','A','L','A','M','I','#','R','I','P','T','I','D','E','S'],
    ['A','L','E','V','E','L','#','F','R','E','E','L','O','V','E'],
    ['L','E','V','E','R','E','T','S','#','L','A','D','L','E','S'],
    ['O','P','I','O','I','D','S','#','H','A','T','P','I','N','S'],
    ['O','P','E','N','T','A','P','#','E','G','O','I','S','T','E'],
    ['N','O','S','E','A','T','S','#','L','E','N','G','T','H','S']
  ],
  label_set:[
    ['1','2','3','4','5','6','7','#','8','9','10','11','12','13','14'],
    ['15','','','','','','','#','16','','','','','',''],
    ['17','','','','','','','#','18','','','','','',''],
    ['19','','','','','','#','20','','','','','','',''],
    ['21','','','','','','22','','#','23','','','','',''],
    ['24','','','','','','','','#','25','','','','',''],
    ['26','','','','','#','27','','28','','','','#','#','#'],
    ['29','','','#','#','30','','','','','#','#','31','32','33'],
    ['#','#','#','34','35','','','','','#','36','37','','',''],
    ['38','39','40','','','','#','41','','42','','','','',''],
    ['43','','','','','','#','44','','','','','','',''],
    ['45','','','','','','46','','#','47','','','','',''],
    ['48','','','','','','','#','49','','','','','',''],
    ['50','','','','','','','#','51','','','','','',''],
    ['52','','','','','','','#','53','','','','','','']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,0','0,1','0,2','0,3','0,4','0,5','0,6'],
      clue: 'Drink every last drop from'
    },
    a8: {
      direction: 'across',
      number: 8,
      boxes: ['0,8','0,9','0,10','0,11','0,12','0,13','0,14'],
      clue: 'Give a sop to, maybe'
    },
    a15: {
      direction: 'across',
      number: 15,
      boxes: ['1,0','1,1','1,2','1,3','1,4','1,5','1,6'],
      clue: 'Was naturally a part of something'
    },
    a16: {
      direction: 'across',
      number: 16,
      boxes: ['1,8','1,9','1,10','1,11','1,12','1,13','1,14'],
      clue: 'Street protester or Tibetan monk'
    },
    a17: {
      direction: 'across',
      number: 17,
      boxes: ['2,0','2,1','2,2','2,3','2,4','2,5','2,6'],
      clue: 'Duds'
    },
    a18: {
      direction: 'across',
      number: 18,
      boxes: ['2,8','2,9','2,10','2,11','2,12','2,13','2,14'],
      clue: 'Largest of the British Virgin Islands'
    },
    a19: {
      direction: 'across',
      number: 19,
      boxes: ['3,0','3,1','3,2','3,3','3,4','3,5'],
      clue: 'Bad vibrations'
    },
    a20: {
      direction: 'across',
      number: 20,
      boxes: ['3,7','3,8','3,9','3,10','3,11','3,12','3,13','3,14'],
      clue: 'Things picked up on beaches'
    },
    a21: {
      direction: 'across',
      number: 21,
      boxes: ['4,0','4,1','4,2','4,3','4,4','4,5','4,6','4,7'],
      clue: 'Pipe filler'
    },
    a23: {
      direction: 'across',
      number: 23,
      boxes: ['4,9','4,10','4,11','4,12','4,13','4,14'],
      clue: 'Epoch when modern mammals arose'
    },
    a24: {
      direction: 'across',
      number: 24,
      boxes: ['5,0','5,1','5,2','5,3','5,4','5,5','5,6','5,7'],
      clue: '“See you then”'
    },
    a25: {
      direction: 'across',
      number: 25,
      boxes: ['5,9','5,10','5,11','5,12','5,13','5,14'],
      clue: 'Soft leathers'
    },
    a26: {
      direction: 'across',
      number: 26,
      boxes: ['6,0','6,1','6,2','6,3','6,4'],
      clue: 'Like bodybuilders\’ arms'
    },
    a27: {
      direction: 'across',
      number: 27,
      boxes: ['6,6','6,7','6,8','6,9','6,10','6,11'],
      clue: 'Fruity and fragrant compounds'
    },
    a29: {
      direction: 'across',
      number: 29,
      boxes: ['7,0','7,1','7,2'],
      clue: 'Ending with many fruit names'
    },
    a30: {
      direction: 'across',
      number: 30,
      boxes: ['7,5','7,6','7,7','7,8','7,9'],
      clue: 'Competitor of Century 21'
    },
    a31: {
      direction: 'across',
      number: 31,
      boxes: ['7,12','7,13','7,14'],
      clue: 'Marijuana, in older slang'
    },
    a34: {
      direction: 'across',
      number: 34,
      boxes: ['8,3','8,4','8,5','8,6','8,7','8,8'],
      clue: 'Be in charge of'
    },
    a36: {
      direction: 'across',
      number: 36,
      boxes: ['8,10','8,11','8,12','8,13','8,14'],
      clue: 'Subjects of baseless charges?'
    },
    a38: {
      direction: 'across',
      number: 38,
      boxes: ['9,0','9,1','9,2','9,3','9,4','9,5'],
      clue: 'Food that\’s cured'
    },
    a41: {
      direction: 'across',
      number: 41,
      boxes: ['9,7','9,8','9,9','9,10','9,11','9,12','9,13','9,14'],
      clue: 'Dangers for swimmers'
    },
    a43: {
      direction: 'across',
      number: 43,
      boxes: ['10,0','10,1','10,2','10,3','10,4','10,5'],
      clue: 'Benchmark test for British students'
    },
    a44: {
      direction: 'across',
      number: 44,
      boxes: ['10,7','10,8','10,9','10,10','10,11','10,12','10,13','10,14'],
      clue: '1960s catchphrase'
    },
    a45: {
      direction: 'across',
      number: 45,
      boxes: ['11,0','11,1','11,2','11,3','11,4','11,5','11,6','11,7'],
      clue: 'Young hares'
    },
    a47: {
      direction: 'across',
      number: 47,
      boxes: ['11,9','11,10','11,11','11,12','11,13','11,14'],
      clue: 'Takes stock?'
    },
    a48: {
      direction: 'across',
      number: 48,
      boxes: ['12,0','12,1','12,2','12,3','12,4','12,5','12,6'],
      clue: '21st-century health menace'
    },
    a49: {
      direction: 'across',
      number: 49,
      boxes: ['12,8','12,9','12,10','12,11','12,12','12,13','12,14'],
      clue: 'Millinery items'
    },
    a50: {
      direction: 'across',
      number: 50,
      boxes: ['13,0','13,1','13,2','13,3','13,4','13,5','13,6'],
      clue: 'Source of running water'
    },
    a51: {
      direction: 'across',
      number: 51,
      boxes: ['13,8','13,9','13,10','13,11','13,12','13,13','13,14'],
      clue: 'Chanel fragrance with a French name'
    },
    a52: {
      direction: 'across',
      number: 52,
      boxes: ['14,0','14,1','14,2','14,3','14,4','14,5','14,6'],
      clue: 'S.R.O.'
    },
    a53: {
      direction: 'across',
      number: 53,
      boxes: ['14,8','14,9','14,10','14,11','14,12','14,13','14,14'],
      clue: 'Units in a horse race'
    },


    d1: {
      direction: 'down',
      number: 1,
      boxes: ['0,0','1,0','2,0','3,0','4,0','5,0','6,0','7,0'],
      clue: 'Mourn, in a way'
    },
    d2: {
      direction: 'down',
      number: 2,
      boxes: ['0,1','1,1','2,1','3,1','4,1','5,1','6,1','7,1'],
      clue: 'Cold'
    },
    d3: {
      direction: 'down',
      number: 3,
      boxes: ['0,2','1,2','2,2','3,2','4,2','5,2','6,2','7,2'],
      clue: 'Hynde of the Pretenders'
    },
    d4: {
      direction: 'down',
      number: 4,
      boxes: ['0,3','1,3','2,3','3,3','4,3','5,3','6,3'],
      clue: 'Bob of old children\’s TV'
    },
    d5: {
      direction: 'down',
      number: 5,
      boxes: ['0,4','1,4','2,4','3,4','4,4','5,4','6,4'],
      clue: 'Theater portmanteau'
    },
    d6: {
      direction: 'down',
      number: 6,
      boxes: ['0,5','1,5','2,5','3,5','4,5','5,5'],
      clue: 'It had a major part in the Bible'
    },
    d7: {
      direction: 'down',
      number: 7,
      boxes: ['0,6','1,6','2,6'],
      clue: 'N.F.L. stat: Abbr.'
    },
    d8: {
      direction: 'down',
      number: 8,
      boxes: ['0,8','1,8','2,8','3,8'],
      clue: 'Official proceedings'
    },
    d9: {
      direction: 'down',
      number: 9,
      boxes: ['0,9','1,9','2,9','3,9','4,9','5,9','6,9','7,9'],
      clue: 'Call on a hot line?'
    },
    d10: {
      direction: 'down',
      number: 10,
      boxes: ['0,10','1,10','2,10','3,10','4,10','5,10','6,10'],
      clue: 'British sitting room'
    },
    d11: {
      direction: 'down',
      number: 11,
      boxes: ['0,11','1,11','2,11','3,11','4,11','5,11','6,11'],
      clue: 'Draws in'
    },
    d12: {
      direction: 'down',
      number: 12,
      boxes: ['0,12','1,12','2,12','3,12','4,12','5,12'],
      clue: 'Made up (for)'
    },
    d13: {
      direction: 'down',
      number: 13,
      boxes: ['0,13','1,13','2,13','3,13','4,13','5,13'],
      clue: 'Sister of Helios'
    },
    d14: {
      direction: 'down',
      number: 14,
      boxes: ['0,14','1,14','2,14','3,14','4,14','5,14'],
      clue: 'Gets the lead out'
    },
    d20: {
      direction: 'down',
      number: 20,
      boxes: ['3,7','4,7','5,7','6,7','7,7','8,7','9,7','10,7','11,7'],
      clue: 'What are depicted in some blue prints?'
    },
    d22: {
      direction: 'down',
      number: 22,
      boxes: ['4,6','5,6','6,6','7,6','8,6'],
      clue: 'Knight mare?'
    },
    d28: {
      direction: 'down',
      number: 28,
      boxes: ['6,8','7,8','8,8','9,8','10,8'],
      clue: 'Jungle herbivore'
    },
    d30: {
      direction: 'down',
      number: 30,
      boxes: ['7,5','8,5','9,5','10,5','11,5','12,5','13,5','14,5'],
      clue: 'Chewed out'
    },
    d31: {
      direction: 'down',
      number: 31,
      boxes: ['7,12','8,12','9,12','10,12','11,12','12,12','13,12','14,12'],
      clue: 'Personal agenda'
    },
    d32: {
      direction: 'down',
      number: 32,
      boxes: ['7,13','8,13','9,13','10,13','11,13','12,13','13,13','14,13'],
      clue: 'Desperate hour'
    },
    d33: {
      direction: 'down',
      number: 33,
      boxes: ['7,14','8,14','9,14','10,14','11,14','12,14','13,14','14,14'],
      clue: 'Judges'
    },
    d34: {
      direction: 'down',
      number: 34,
      boxes: ['8,3','9,3','10,3','11,3','12,3','13,3','14,3'],
      clue: '“Here, try this”'
    },
    d35: {
      direction: 'down',
      number: 35,
      boxes: ['8,4','9,4','10,4','11,4','12,4','13,4','14,4'],
      clue: 'Title for a retired professor'
    },
    d36: {
      direction: 'down',
      number: 36,
      boxes: ['8,9','9,9','10,9','11,9','12,9','13,9','14,9'],
      clue: 'Had plateful after plateful'
    },
    d37: {
      direction: 'down',
      number: 37,
      boxes: ['8,10','9,10','10,10','11,10','12,10','13,10','14,10'],
      clue: 'Animal hunted in “Lord of the Flies”'
    },
    d38: {
      direction: 'down',
      number: 38,
      boxes: ['9,0','10,0','11,0','12,0','13,0','14,0'],
      clue: 'Site of a western gunfight'
    },
    d39: {
      direction: 'down',
      number: 39,
      boxes: ['9,1','10,1','11,1','12,1','13,1','14,1'],
      clue: 'Third-largest city of the later Ottoman Empire, surpassed only by Constantinople and Cairo'
    },
    d40: {
      direction: 'down',
      number: 40,
      boxes: ['9,2','10,2','11,2','12,2','13,2','14,2'],
      clue: 'Duties'
    },
    d42: {
      direction: 'down',
      number: 42,
      boxes: ['9,9','10,9','11,9','12,9','13,9','14,9'],
      clue: 'Fur'
    },
    d46: {
      direction: 'down',
      number: 46,
      boxes: ['11,6','12,6','13,6','14,6'],
      clue: 'Cough syrup amts.'
    },
    d49: {
      direction: 'down',
      number: 49,
      boxes: ['12,8','13,8','14,8'],
      clue: 'Daughter of Loki, in Norse myth'
    }
  }
),
dailySun = Daily.create!(
  wordcross_date: '2019-01-27',
  author: 'Randolph Ross',
  solution: [
    ['W','E','B','A','P','P','#','A','T','T','H','A','T','#','#','A','S','I','M','O','V'],
    ['A','V','A','T','A','R','#','S','H','E','E','S','H','#','A','C','T','F','I','V','E'],
    ['D','I','S','T','R','E','S','S','E','D','H','A','I','R','D','R','E','S','S','E','R'],
    ['E','T','S','#','O','C','T','A','L','#','#','B','E','A','M','O','N','#','S','R','I'],
    ['D','E','F','I','L','E','D','M','A','N','I','C','U','R','I','S','T','#','P','E','T'],
    ['#','#','I','C','E','D','#','#','W','A','G','#','#','E','R','S','#','S','E','X','Y'],
    ['B','A','D','S','E','E','D','#','#','H','O','M','A','G','E','#','C','U','L','P','#'],
    ['L','I','D','#','#','D','I','S','P','A','T','C','H','E','D','T','A','I','L','O','R'],
    ['A','D','L','I','B','#','V','O','L','#','#','D','A','M','#','A','P','T','E','S','T'],
    ['B','E','E','N','E','#','E','M','E','R','I','L','#','#','A','C','L','#','D','E','E'],
    ['#','#','#','D','E','G','R','A','D','E','D','T','E','A','C','H','E','R','#','#','#'],
    ['B','B','C','#','P','U','T','#','#','M','I','S','S','M','E','#','T','E','T','R','A'],
    ['E','R','A','S','E','R','#','U','N','A','#','#','P','O','T','#','S','C','H','E','D'],
    ['D','I','S','T','R','U','S','T','E','D','B','A','N','K','E','R','#','#','E','P','A'],
    ['#','G','E','L','S','#','C','A','V','E','A','T','#','#','N','E','W','S','B','O','Y'],
    ['D','A','Y','O','#','R','A','H','#','#','B','A','A','#','#','S','I','T','A','#','#'],
    ['I','N','K','#','D','E','R','A','N','G','E','D','C','A','T','T','L','E','M','A','N'],
    ['E','T','A','#','E','V','E','N','E','R','#','#','A','R','I','A','L','#','B','W','I'],
    ['D','I','S','I','L','L','U','S','I','O','N','E','D','M','A','G','I','C','I','A','N'],
    ['O','N','E','S','T','O','P','#','L','A','S','S','I','E','#','E','A','R','N','I','T'],
    ['N','E','M','E','A','N','#','#','S','N','A','P','A','T','#','S','M','O','O','T','H']
  ],
  label_set:[
    ['1','2','3','4','5','6','#','7','8','9','10','11','12','#','#','13','14','15','16','17','18'],
    ['19','','','','','','#','20','','','','','','#','21','','','','','',''],
    ['22','','','','','','23','','','','','','','24','','','','','','',''],
    ['25','','','#','26','','','','','#','#','27','','','','','','#','28','',''],
    ['29','','','30','','','','','','31','32','','','','','','','#','33','',''],
    ['#','#','34','','','','#','#','35','','','#','#','36','','','#','37','','',''],
    ['38','39','','','','','40','#','#','41','','42','43','','','#','44','','','','#'],
    ['45','','','#','#','46','','47','48','','','','','','','49','','','','','50'],
    ['51','','','52','53','#','54','','','#','#','55','','','#','56','','','','',''],
    ['57','','','','','#','58','','','59','60','','#','#','61','','','#','62','',''],
    ['#','#','#','63','','64','','','','','','','65','66','','','','67','#','#','#'],
    ['68','69','70','#','71','','','#','#','72','','','','','','#','73','','74','75','76'],
    ['77','','','78','','','#','79','80','','#','#','81','','','#','82','','','',''],
    ['83','','','','','','84','','','','85','86','','','','87','#','#','88','',''],
    ['#','89','','','','#','90','','','','','','#','#','91','','92','93','','',''],
    ['94','','','','#','95','','','#','#','96','','97','#','#','98','','','','#','#'],
    ['99','','','#','100','','','','101','102','','','','103','104','','','','','105','106'],
    ['107','','','#','108','','','','','','#','#','109','','','','','#','110','',''],
    ['111','','','112','','','','','','','113','114','','','','','','115','','',''],
    ['116','','','','','','','#','117','','','','','','#','118','','','','',''],
    ['119','','','','','','#','#','120','','','','','','#','121','','','','','']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,0','0,1','0,2','0,3','0,4','0,5'],
      clue: ' Google Calendar, e.g.'
    },
    a7: {
      direction: 'across',
      number: 7,
      boxes: ['0,7','0,8','0,9','0,10','0,11','0,12'],
      clue: ' In addition'
    },
    a13: {
      direction: 'across',
      number: 13,
      boxes: ['0,15','0,16','0,17','0,18','0,19','0,20'],
      clue: '“Foundation” author'
    },
    a19: {
      direction: 'across',
      number: 19,
      boxes: ['1,0','1,1','1,2','1,3','1,4','1,5'],
      clue: 'Hit 2009 movie set in the 22nd century'
    },
    a20: {
      direction: 'across',
      number: 20,
      boxes: ['1,7','1,8','1,9','1,10','1,11','1,12'],
      clue: 'Cry of exasperation'
    },
    a21: {
      direction: 'across',
      number: 21,
      boxes: ['1,14','1,15','1,16','1,17','1,18','1,19','1,20'],
      clue: 'When Hamlet dies'
    },
    a22: {
      direction: 'across',
      number: 22,
      boxes: ['2,0','2,1','2,2','2,3','2,4','2,5','2,6','2,7','2,8','2,9','2,10','2,11','2,12','2,13','2,14','2,15','2,16','2,17','2,18','2,19','2,20'],
      clue: 'Unemployed salon worker?'
    },
    a25: {
      direction: 'across',
      number: 25,
      boxes: ['3,0','3,1','3,2'],
      clue: 'Venusians, e.g., informally'
    },
    a26: {
      direction: 'across',
      number: 26,
      boxes: ['3,4','3,5','3,6','3,7','3,8'],
      clue: 'In base 8'
    },
    a27: {
      direction: 'across',
      number: 27,
      boxes: ['3,11','3,12','3,13','3,14','3,15','3,16'],
      clue: 'Bob ____, 1968 record-setting long jumper'
    },
    a28: {
      direction: 'across',
      number: 28,
      boxes: ['3,18','3,19','3,20'],
      clue: 'Foreign title that’s an anagram of its English equivalent'
    },
    a29: {
      direction: 'across',
      number: 29,
      boxes: ['4,0','4,1','4,2','4,3','4,4','4,5','4,6','4,7','4,8','4,9','4,10','4,11','4,12','4,13','4,14','4,15','4,16'],
      clue: 'Unemployed nail polisher?'
    },
    a33: {
      direction: 'across',
      number: 33,
      boxes: ['4,18','4,19','4,20'],
      clue: 'Most preferred'
    },
    a34: {
      direction: 'across',
      number: 34,
      boxes: ['5,2','5,3','5,4','5,5'],
      clue: 'Coffee order'
    },
    a35: {
      direction: 'across',
      number: 35,
      boxes: ['5,8','5,9','5,10'],
      clue: 'Jokester'
    },
    a36: {
      direction: 'across',
      number: 36,
      boxes: ['5,13','5,14','5,15'],
      clue: 'Some TV drama settings, for short'
    },
    a37: {
      direction: 'across',
      number: 37,
      boxes: ['5,17','5,18','5,19','5,20'],
      clue: 'Hot'
    },
    a38: {
      direction: 'across',
      number: 38,
      boxes: ['6,0','6,1','6,2','6,3','6,4','6,5','6,6'],
      clue: 'Troublemaker since birth'
    },
    a41: {
      direction: 'across',
      number: 41,
      boxes: ['6,9','6,10','6,11','6,12','6,13','6,14'],
      clue: 'Something paid to a hero'
    },
    a44: {
      direction: 'across',
      number: 44,
      boxes: ['6,16','6,17','6,18','6,19'],
      clue: 'Cosby’s “I Spy” co-star'
    },
    a45: {
      direction: 'across',
      number: 45,
      boxes: ['7,0','7,1','7,2'],
      clue: 'Jack-in- the-box part'
    },
    a46: {
      direction: 'across',
      number: 46,
      boxes: ['7,5','7,6','7,7','7,8','7,9','7,10','7,11','7,12','7,13','7,14','7,15','7,16','7,17','7,18','7,19','7,20'],
      clue: 'Unemployed men’s clothier?'
    },
    a51: {
      direction: 'across',
      number: 51,
      boxes: ['8,0','8,1','8,2','8,3','8,4'],
      clue: 'Wing it'
    },
    a54: {
      direction: 'across',
      number: 54,
      boxes: ['8,6','8,7','8,8'],
      clue: 'Remote figure: Abbr.'
    },
    a55: {
      direction: 'across',
      number: 55,
      boxes: ['8,11','8,12','8,13'],
      clue: 'Hydro-plant locale'
    },
    a56: {
      direction: 'across',
      number: 56,
      boxes: ['8,15','8,16','8,17','8,18','8,19','8,20'],
      clue: 'Exam scored on a scale of 1 to 5, informally'
    },
    a57: {
      direction: 'across',
      number: 57,
      boxes: ['9,0','9,1','9,2','9,3','9,4'],
      clue: 'Designer Geoffrey'
    },
    a58: {
      direction: 'across',
      number: 58,
      boxes: ['9,6','9,7','9,8','9,9','9,10','9,11'],
      clue: '“____ Live” (onetime cooking show)'
    },
    a61: {
      direction: 'across',
      number: 61,
      boxes: ['9,14','9,15','9,16'],
      clue: '____ tear (sports injury)'
    },
    a62: {
      direction: 'across',
      number: 62,
      boxes: ['9,18','9,19','9,20'],
      clue: 'Jay preceder'
    },
    a63: {
      direction: 'across',
      number: 63,
      boxes: ['10,3','10,4','10,5','10,6','10,7','10,8','10,9','10,10','10,11','10,12','10,13','10,14','10,15','10,16','10,17'],
      clue: 'Unemployed educator?'
    },
    a68: {
      direction: 'across',
      number: 68,
      boxes: ['11,0','11,1','11,2'],
      clue: 'Media inits. before One, Two or Four'
    },
    a71: {
      direction: 'across',
      number: 71,
      boxes: ['11,4','11,5','11,6'],
      clue: 'Wall Street order'
    },
    a72: {
      direction: 'across',
      number: 72,
      boxes: ['11,9','11,10','11,11','11,12','11,13','11,14'],
      clue: 'Question after “I’m back”'
    },
    a73: {
      direction: 'across',
      number: 73,
      boxes: ['11,16','11,17','11,18','11,19','11,20'],
      clue: 'Fish in a tank'
    },
    a77: {
      direction: 'across',
      number: 77,
      boxes: ['12,0','12,1','12,2','12,3','12,4','12,5'],
      clue: 'Rubber'
    },
    a79: {
      direction: 'across',
      number: 79,
      boxes: ['12,7','12,8','12,9'],
      clue: 'Article in La Repubblica'
    },
    a81: {
      direction: 'across',
      number: 81,
      boxes: ['12,12','12,13','12,14'],
      clue: 'Kitty'
    },
    a82: {
      direction: 'across',
      number: 82,
      boxes: ['12,16','12,17','12,18','12,19','12,20'],
      clue: 'Port Authority posting: Abbr.'
    },
    a83: {
      direction: 'across',
      number: 83,
      boxes: ['13,0','13,1','13,2','13,3','13,4','13,5','13,6','13,7','13,8','13,9','13,10','13,11','13,12','13,13','13,14','13,15'],
      clue: 'Unemployed loan officer?'
    },
    a88: {
      direction: 'across',
      number: 88,
      boxes: ['13,18','13,19','13,20'],
      clue: 'Watchdog org. established by Nixon'
    },
    a89: {
      direction: 'across',
      number: 89,
      boxes: ['14,1','14,2','14,3','14,4'],
      clue: 'Salon supply'
    },
    a90: {
      direction: 'across',
      number: 90,
      boxes: ['14,6','14,7','14,8','14,9','14,10','14,11'],
      clue: '“No returns,” e.g.'
    },
    a91: {
      direction: 'across',
      number: 91,
      boxes: ['14,14','14,15','14,16','14,17','14,18','14,19','14,20'],
      clue: '“Extra! Extra!” shouter'
    },
    a94: {
      direction: 'across',
      number: 94,
      boxes: ['15,0','15,1','15,2','15,3'],
      clue: 'Repeated word in a 1957 Harry Belafonte hit'
    },
    a95: {
      direction: 'across',
      number: 95,
      boxes: ['15,5','15,6','15,7'],
      clue: 'Fan noise'
    },
    a96: {
      direction: 'across',
      number: 96,
      boxes: ['15,10','15,11','15,12'],
      clue: 'Cote call'
    },
    a98: {
      direction: 'across',
      number: 98,
      boxes: ['15,15','15,16','15,17','15,18'],
      clue: '____ spell'
    },
    a99: {
      direction: 'across',
      number: 99,
      boxes: ['16,0','16,1','16,2'],
      clue: 'It’s kept in a pen'
    },
    a100: {
      direction: 'across',
      number: 100,
      boxes: ['16,4','16,5','16,6','16,7','16,8','16,9','16,10','16,11','16,12','16,13','16,14','16,15','16,16','16,17','16,18','16,19','16,20'],
      clue: 'Unemployed rancher?'
    },
    a107: {
      direction: 'across',
      number: 107,
      boxes: ['17,0','17,1','17,2'],
      clue: 'Capt.’s guess'
    },
    a108: {
      direction: 'across',
      number: 108,
      boxes: ['17,4','17,5','17,6','17,7','17,8','17,9'],
      clue: 'More balanced'
    },
    a109: {
      direction: 'across',
      number: 109,
      boxes: ['17,12','17,13','17,14','17,15','17,16'],
      clue: 'Popular font'
    },
    a110: {
      direction: 'across',
      number: 110,
      boxes: ['17,18','17,19','17,20'],
      clue: 'Airport near D.C.'
    },
    a111: {
      direction: 'across',
      number: 111,
      boxes: ['18,0','18,1','18,2','18,3','18,4','18,5','18,6','18,7','18,8','18,9','18,10','18,11','18,12','18,13','18,14','18,15','18,16','18,17','18,18','18,19','18,20'],
      clue: 'Unemployed prestidigitator?'
    },
    a116: {
      direction: 'across',
      number: 116,
      boxes: ['19,0','19,1','19,2','19,3','19,4','19,5','19,6'],
      clue: 'Efficient kind of shopping'
    },
    a117: {
      direction: 'across',
      number: 117,
      boxes: ['19,8','19,9','19,10','19,11','19,12','19,13'],
      clue: 'Iconic 1950s-’70s female TV role played by a male'
    },
    a118: {
      direction: 'across',
      number: 118,
      boxes: ['19,15','19,16','19,17','19,18','19,19','19,20'],
      clue: 'Achieve something by merit'
    },
    a119: {
      direction: 'across',
      number: 119,
      boxes: ['20,0','20,1','20,2','20,3','20,4','20,5'],
      clue: 'Like the lion slain by Hercules'
    },
    a120: {
      direction: 'across',
      number: 120,
      boxes: ['20,8','20,9','20,10','20,11','20,12','20,13'],
      clue: 'Be short with'
    },
    a121: {
      direction: 'across',
      number: 121,
      boxes: ['20,15','20,16','20,17','20,18','20,19','20,20'],
      clue: 'Peanut-butter choice'
    },


    d1: {
      direction: 'down',
      number: 1,
      boxes: ['0,0','1,0','2,0','3,0','4,0'],
      clue: 'Tested the waters, say'
    },
    d2: {
      direction: 'down',
      number: 2,
      boxes: ['0,1','1,1','2,1','3,1','4,1'],
      clue: 'Request for an online R.S.V.P.'
    },
    d3: {
      direction: 'down',
      number: 3,
      boxes: ['0,2','1,2','2,2','3,2','4,2','5,2','6,2','7,2','8,2','9,2'],
      clue: 'Bluegrass instrument'
    },
    d4: {
      direction: 'down',
      number: 4,
      boxes: ['0,3','1,3','2,3'],
      clue: '____.com, site with the category “Cellphones & tablets”'
    },
    d5: {
      direction: 'down',
      number: 5,
      boxes: ['0,4','1,4','2,4','3,4','4,4','5,4','6,4'],
      clue: 'One out?'
    },
    d6: {
      direction: 'down',
      number: 6,
      boxes: ['0,5','1,5','2,5','3,5','4,5','5,5','6,5','7,5'],
      clue: 'Came before'
    },
    d7: {
      direction: 'down',
      number: 7,
      boxes: ['0,7','1,7','2,7','3,7','4,7'],
      clue: '____ tea'
    },
    d8: {
      direction: 'down',
      number: 8,
      boxes: ['0,8','1,8','2,8','3,8','4,8','5,8'],
      clue: 'Sheriffs, marshals, etc.'
    },
    d9: {
      direction: 'down',
      number: 9,
      boxes: ['0,9','1,9','2,9'],
      clue: '“The Mary Tyler Moore Show” character'
    },
    d10: {
      direction: 'down',
      number: 10,
      boxes: ['0,10','1,10','2,10'],
      clue: 'Short snicker'
    },
    d11: {
      direction: 'down',
      number: 11,
      boxes: ['0,11','1,11','2,11','3,11','4,11'],
      clue: 'Easy ____'
    },
    d12: {
      direction: 'down',
      number: 12,
      boxes: ['0,12','1,12','2,12','3,12','4,12'],
      clue: 'President during the Vietnam War'
    },
    d13: {
      direction: 'down',
      number: 13,
      boxes: ['0,15','1,15','2,15','3,15','4,15','5,15'],
      clue: 'Straddling'
    },
    d14: {
      direction: 'down',
      number: 14,
      boxes: ['0,16','1,16','2,16','3,16','4,16'],
      clue: 'Surgical tube'
    },
    d15: {
      direction: 'down',
      number: 15,
      boxes: ['0,17','1,17','2,17'],
      clue: 'Suppositions'
    },
    d16: {
      direction: 'down',
      number: 16,
      boxes: ['0,18','1,18','2,18','3,18','4,18','5,18','6,18','7,18','8,18','9,18'],
      clue: 'Like Feburary'
    },
    d17: {
      direction: 'down',
      number: 17,
      boxes: ['0,19','1,19','2,19','3,19','4,19','5,19','6,19','7,19','8,19','9,19'],
      clue: 'Advertise excessively'
    },
    d18: {
      direction: 'down',
      number: 18,
      boxes: ['0,20','1,20','2,20','3,20','4,20','5,20'],
      clue: 'It’s the truth'
    },
    d21: {
      direction: 'down',
      number: 21,
      boxes: ['1,14','2,14','3,14','4,14','5,14','6,14','7,14'],
      clue: 'Used as a role model'
    },
    d23: {
      direction: 'down',
      number: 23,
      boxes: ['2,6','3,6','4,6'],
      clue: 'Part of S.O.P.: Abbr.'
    },
    d24: {
      direction: 'down',
      number: 24,
      boxes: ['2,13','3,13','4,13','5,13','6,13','7,13','8,13'],
      clue: 'Beauty that’s seldom seen'
    },
    d30: {
      direction: 'down',
      number: 30,
      boxes: ['4,3','5,3','6,3'],
      clue: 'Suffix with linguist'
    },
    d31: {
      direction: 'down',
      number: 31,
      boxes: ['4,9','5,9','6,9','7,9'],
      clue: 'Okinawa port'
    },
    d32: {
      direction: 'down',
      number: 32,
      boxes: ['4,10','5,10','6,10','7,10'],
      clue: '“____ Rhythm”'
    },
    d37: {
      direction: 'down',
      number: 37,
      boxes: ['5,17','6,17','7,17','8,17'],
      clue: 'Exec'
    },
    d38: {
      direction: 'down',
      number: 38,
      boxes: ['6,0','7,0','8,0','9,0'],
      clue: 'Spill the beans'
    },
    d39: {
      direction: 'down',
      number: 39,
      boxes: ['6,1','7,1','8,1','9,1'],
      clue: 'Second'
    },
    d40: {
      direction: 'down',
      number: 40,
      boxes: ['6,6','7,6','8,6','9,6','10,6','11,6'],
      clue: 'Send in a different direction'
    },
    d42: {
      direction: 'down',
      number: 42,
      boxes: ['6,11','7,11','8,11','9,11','10,11','11,11'],
      clue: 'Fast-food sandwiches introduced in 1985'
    },
    d43: {
      direction: 'down',
      number: 43,
      boxes: ['6,12','7,12','8,12'],
      clue: '“Bingo!”'
    },
    d44: {
      direction: 'down',
      number: 44,
      boxes: ['6,16','7,16','8,16','9,16','10,16','11,16','12,16'],
      clue: 'They go down easily'
    },
    d47: {
      direction: 'down',
      number: 47,
      boxes: ['7,7','8,7','9,7','10,7'],
      clue: '“Brave New World” drug'
    },
    d48: {
      direction: 'down',
      number: 48,
      boxes: ['7,8','8,8','9,8','10,8'],
      clue: 'Responded in court'
    },
    d49: {
      direction: 'down',
      number: 49,
      boxes: ['7,15','8,15','9,15','10,15'],
      clue: 'Dash gauge'
    },
    d50: {
      direction: 'down',
      number: 50,
      boxes: ['7,20','8,20','9,20'],
      clue: 'AAA suggestion: Abbr.'
    },
    d52: {
      direction: 'down',
      number: 52,
      boxes: ['8,3','9,3','10,3'],
      clue: 'It borders Ky.'
    },
    d53: {
      direction: 'down',
      number: 53,
      boxes: ['8,4','9,4','10,4','11,4','12,4','13,4','14,4'],
      clue: 'You can page through them'
    },
    d59: {
      direction: 'down',
      number: 59,
      boxes: ['9,9','10,9','11,9','12,9','13,9','14,9'],
      clue: 'Like “A Star Is Born,” several times'
    },
    d60: {
      direction: 'down',
      number: 60,
      boxes: ['9,10','10,10','11,10'],
      clue: 'A mean Amin'
    },
    d61: {
      direction: 'down',
      number: 61,
      boxes: ['9,14','10,14','11,14','12,14','13,14','14,14'],
      clue: 'Blackjack combo'
    },
    d64: {
      direction: 'down',
      number: 64,
      boxes: ['10,5','11,5','12,5','13,5'],
      clue: 'Maven'
    },
    d65: {
      direction: 'down',
      number: 65,
      boxes: ['10,12','11,12','12,12','13,12'],
      clue: 'Locker-room shower?'
    },
    d66: {
      direction: 'down',
      number: 66,
      boxes: ['10,13','11,13','12,13','13,13'],
      clue: 'Every which way'
    },
    d67: {
      direction: 'down',
      number: 67,
      boxes: ['10,17','11,17','12,17'],
      clue: '____ center'
    },
    d68: {
      direction: 'down',
      number: 68,
      boxes: ['11,0','12,0','13,0'],
      clue: 'Hospital unit'
    },
    d69: {
      direction: 'down',
      number: 69,
      boxes: ['11,1','12,1','13,1','14,1','15,1','16,1','17,1','18,1','19,1','20,1'],
      clue: 'Two-masted sailing vessel'
    },
    d70: {
      direction: 'down',
      number: 70,
      boxes: ['11,2','12,2','13,2','14,2','15,2','16,2','17,2','18,2','19,2','20,2'],
      clue: 'Longtime host of “American Top 40”'
    },
    d74: {
      direction: 'down',
      number: 74,
      boxes: ['11,18','12,18','13,18','14,18','15,18','16,18','17,18','18,18','19,18','20,18'],
      clue: 'Source of a Boston “curse”'
    },
    d75: {
      direction: 'down',
      number: 75,
      boxes: ['11,19','12,19','13,19','14,19'],
      clue: 'Defaulter’s comeuppance'
    },
    d76: {
      direction: 'down',
      number: 76,
      boxes: ['11,20','12,20','13,20','14,20'],
      clue: 'Every 24 hours'
    },
    d78: {
      direction: 'down',
      number: 78,
      boxes: ['12,3','13,3','14,3','15,3'],
      clue: 'Normandy invasion town'
    },
    d79: {
      direction: 'down',
      number: 79,
      boxes: ['12,7','13,7','14,7','15,7','16,7','17,7','18,7'],
      clue: 'Marie and Donny Osmond, e.g.'
    },
    d80: {
      direction: 'down',
      number: 80,
      boxes: ['12,8','13,8','14,8'],
      clue: 'It borders Ida.'
    },
    d84: {
      direction: 'down',
      number: 84,
      boxes: ['13,6','14,6','15,6','16,6','17,6','18,6','19,6'],
      clue: 'Find with difficulty'
    },
    d85: {
      direction: 'down',
      number: 85,
      boxes: ['13,10','14,10','15,10','16,10'],
      clue: 'Hon'
    },
    d86: {
      direction: 'down',
      number: 86,
      boxes: ['13,11','14,11','15,11','16,11'],
      clue: 'Not very much'
    },
    d87: {
      direction: 'down',
      number: 87,
      boxes: ['13,15','14,15','15,15','16,15','17,15','18,15','19,15','20,15'],
      clue: 'Produces a revival of'
    },
    d92: {
      direction: 'down',
      number: 92,
      boxes: ['14,16','15,16','16,16','17,16','18,16','19,16','20,16'],
      clue: 'Royal Charlotte’s father'
    },
    d93: {
      direction: 'down',
      number: 93,
      boxes: ['14,17','15,17','16,17'],
      clue: 'Abbr. in many an office address'
    },
    d94: {
      direction: 'down',
      number: 94,
      boxes: ['15,0','16,0','17,0','18,0','19,0','20,0'],
      clue: 'Failed, as a cellphone or car to its user'
    },
    d95: {
      direction: 'down',
      number: 95,
      boxes: ['15,5','16,5','17,5','18,5','19,5','20,5'],
      clue: 'Estée Lauder competitor'
    },
    d97: {
      direction: 'down',
      number: 97,
      boxes: ['15,12','16,12','17,12','18,12','19,12','20,12'],
      clue: '“Evangeline” setting'
    },
    d100: {
      direction: 'down',
      number: 100,
      boxes: ['16,4','17,4','18,4','19,4','20,4'],
      clue: 'Symbol of change'
    },
    d101: {
      direction: 'down',
      number: 101,
      boxes: ['16,8','17,8','18,8','19,8','20,8'],
      clue: 'Young and Simon'
    },
    d102: {
      direction: 'down',
      number: 102,
      boxes: ['16,9','17,9','18,9','19,9','20,9'],
      clue: 'Preceder of “Do I have to?”'
    },
    d103: {
      direction: 'down',
      number: 103,
      boxes: ['16,13','17,13','18,13','19,13','20,13'],
      clue: 'Headgear for a knight'
    },
    d104: {
      direction: 'down',
      number: 104,
      boxes: ['16,14','17,14','18,14'],
      clue: 'Padre’s hermana'
    },
    d105: {
      direction: 'down',
      number: 105,
      boxes: ['16,19','17,19','18,19','19,19','20,19'],
      clue: 'Look for'
    },
    d106: {
      direction: 'down',
      number: 106,
      boxes: ['16,20','17,20','18,20','19,20','20,20'],
      clue: 'Beethoven’s “Choral” Symphony'
    },
    d112: {
      direction: 'down',
      number: 112,
      boxes: ['18,3','19,3','20,3'],
      clue: 'Suffix with expert'
    },
    d113: {
      direction: 'down',
      number: 113,
      boxes: ['18,10','19,10','20,10'],
      clue: 'Code-cracking org.'
    },
    d114: {
      direction: 'down',
      number: 114,
      boxes: ['18,11','19,11','20,11'],
      clue: 'Special gift'
    },
    d115: {
      direction: 'down',
      number: 115,
      boxes: ['18,17','19,17','20,17'],
      clue: '____-Magnon'
    }
  }
)