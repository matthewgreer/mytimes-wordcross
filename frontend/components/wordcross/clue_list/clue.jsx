import React from 'react';

const Clue = ({
    clueName, 
    clue, 
    direction, 
    highlight,
    number,
    updateActiveClue
  }) => {

  const handleClick = (e) => {
    updateActiveClue(clueName, direction);
  };  

  return (
    <li
      className={`clue-set-clue ${highlight}`}
      onClick={handleClick}
    > 
      <span className="clue-set-clue-number">
        {number}
      </span>
      <span className="clue-set-clue-text">
        {clue}
      </span>
    </li>
  );
};

export default Clue;