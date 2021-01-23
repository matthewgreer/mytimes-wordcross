import React from 'react';

const GameIcon = ({
  type,       // 'micro' || 'daily' || 'other'
  number
}) => {

  const MICRO_ICONS = {
    0: 'micro_progress_0.svg',
    1: 'micro_progress_1.svg',
    2: 'micro_progress_2.svg',
    3: 'micro_progress_3.svg',
    4: 'micro_progress_4.svg',
    5: 'micro_progress_5.svg',
    6: 'micro_progress_6.svg',
    7: 'micro_progress_7.svg'
  };

  const DAILY_ICONS = {
    0: 'daily_progress_00.svg',
    1: 'daily_progress_01.svg',
    2: 'daily_progress_02.svg',
    3: 'daily_progress_03.svg',
    4: 'daily_progress_04.svg',
    5: 'daily_progress_05.svg',
    6: 'daily_progress_06.svg',
    7: 'daily_progress_07.svg',
    8: 'daily_progress_08.svg',
    9: 'daily_progress_09.svg',
    10: 'daily_progress_10.svg',
    11: 'daily_progress_11.svg',
    12: 'daily_progress_12.svg',
    13: 'daily_progress_13.svg',
    14: 'daily_progress_14.svg',
    15: 'daily_progress_15.svg',
    16: 'daily_progress_16.svg',
    17: 'daily_progress_17.svg',
    18: 'daily_progress_18.svg',
    19: 'daily_progress_19.svg',
    20: 'daily_progress_20.svg'
  };

  const OTHER_GAME_ICONS = {
    // 99: 'waylon.svg',
    100: 'word_wasp.svg',
    101: 'linoleum.svg',
    102: 'ricochet.svg',
    103: 'nexus.svg',
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
        style={{ backgroundImage: `url('/assets/${currentIcon(type,number)}')`}}
        className={`game-icon ${type}-icon`} 
      />
      {currentRibbon(type, number)}
    </div>
  );

};

export default GameIcon;