import React from 'react';

const Clue = ({
    clueName, 
    clue, 
    direction, 
    highlight,
    number,
    handleClueClick
  }) => {

  const handleClick = (e) => {
    handleClueClick(clueName, direction);
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