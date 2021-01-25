import React from 'react';

const GameIcon = ({
  type,       // 'micro' || 'daily' || 'other'
  number
}) => {

  const MICRO_ICONS = {
    0: 'micro-progress-0',
    1: 'micro-progress-1',
    2: 'micro-progress-2',
    3: 'micro-progress-3',
    4: 'micro-progress-4',
    5: 'micro-progress-5',
    6: 'micro-progress-6',
    7: 'micro-progress-7'
  };

  const DAILY_ICONS = {
    0: 'daily-progress-00',
    1: 'daily-progress-01',
    2: 'daily-progress-02',
    3: 'daily-progress-03',
    4: 'daily-progress-04',
    5: 'daily-progress-05',
    6: 'daily-progress-06',
    7: 'daily-progress-07',
    8: 'daily-progress-08',
    9: 'daily-progress-09',
    10: 'daily-progress-10',
    11: 'daily-progress-11',
    12: 'daily-progress-12',
    13: 'daily-progress-13',
    14: 'daily-progress-14',
    15: 'daily-progress-15',
    16: 'daily-progress-16',
    17: 'daily-progress-17',
    18: 'daily-progress-18',
    19: 'daily-progress-19',
    20: 'daily-progress-20'
  };

  const OTHER_GAME_ICONS = {
    // 99: 'waylon.svg',
    100: 'other-icon-100',
    101: 'other-icon-101',
    102: 'other-icon-102',
    103: 'other-icon-103',
  };

  const currentIcon = (type, number) => {
    switch(type) {
      case 'micro':
        return MICRO_ICONS[number];
      case 'daily':
        return DAILY_ICONS[number];
      case 'other':
        return OTHER_GAME_ICONS[number];
      default:
        return null;
    }
  };

  const currentRibbon = (type, number) => {
    if (number === 0) {
      return (
        <div className={`ribbon ${type}-ribbon subscribe-ribbon`}>
          Subscribe
        </div>
      );
    } else if (number === 1) {
      return (
        <div className={`ribbon ${type}-ribbon play-ribbon`}>
          Play
        </div>
      );
    } else if (
        (type === 'micro' && number === 7) || 
        (type === 'daily' && number > 18)
      ) {
      return (
        <div className={`ribbon ${type}-ribbon review-ribbon`}>
          Review
        </div>
      );
    } else if (number >= 99){
      return (
        <div className="new-badge">
          New
        </div>
      );
    } else if (number > 1) {
      return (
        <div className={`ribbon ${type}-ribbon resume-ribbon`}>
          Resume
        </div>
      );
    } else {
      return null;
    }
  };
  return(
    <div className={`${type}-icon-wrapper`}>
      <div 
        // style={{ backgroundImage: `url('/assets/${currentIcon(type,number)}')`}}
        className={`game-icon ${type}-icon ${currentIcon(type, number)}`} 
      />
      {currentRibbon(type, number)}
    </div>
  );

};

export default GameIcon;