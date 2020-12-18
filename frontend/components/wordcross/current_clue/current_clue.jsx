import React from 'react';

const CurrentClue = ({ activeClue, isBoardBlurred }) => {
  const { clue, direction, number } = activeClue;
  const label = (
    direction === 'across' ? 
    `${number.toString()}A` : 
    `${number.toString()}D`
  );

  const blurText = isBoardBlurred ? "blur-current-clue-text" : ""

  if (activeClue) {
    return (
        <div className="current-active-clue-container">
          <div className="current-active-clue-label">
            {label}
          </div>
          <div className={`current-active-clue-text ${blurText}`}>
            {clue}
          </div>
        </div>
    );
  } else {
    return null;
  }
};

export default CurrentClue;