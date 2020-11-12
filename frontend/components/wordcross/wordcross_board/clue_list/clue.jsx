import React from 'react';

const Clue = ({ 
  boxes, 
  clue, 
  direction, 
  isHighlighted, 
  number 
}) => {
  const highlight = isHighlighted ? "highlighted" : "";
  debugger
  return (
    <li className={`clue-set-clue ${highlight}`}>
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