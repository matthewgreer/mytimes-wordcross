import React from 'react';

const Clue = ({ 
  boxes, 
  clue, 
  direction, 
  isHighlighted, 
  number 
}) => {
  const highlight = isHighlighted ? "highlighted" : "";
  return (
    <li className={`clue-set-clue ${highlight}`}>
      <div className="clue-set-clue-number">
        {number}
      </div>
      <div className="clue-set-clue-text">
        {clue}
      </div>
    </li>
  );
};

export default Clue;