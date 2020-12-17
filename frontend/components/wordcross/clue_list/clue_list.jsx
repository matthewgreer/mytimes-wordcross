import React from 'react';
import Clue from './clue'

const ClueList = ({
  acrossClues,
  downClues,
  activeClueName,
  crossingClueName,
  clueSet,
  handleClueClick
  }) => {

  const renderClues = (clueArray) => {
    return (
      <ul>
        {clueArray.map((clueName) => {
          let clueHighlight = "";
          if (clueName === activeClueName) {
            clueHighlight = "active-clue-highlight";
          } 
          if (clueName === crossingClueName) {
            clueHighlight = "crossing-clue-highlight";
          }
          return (
              <Clue
                key={clueName}
                clueName={clueName}
                clue={clueSet[clueName].clue}
                highlight={clueHighlight}
                number={clueSet[clueName].number}
                handleClueClick={handleClueClick}
              />
          );
        })}
      </ul>
    );
  };

  return (
    <div className="wordcross-board-column clue-lists-column">
      <div className="clue-list-by-direction">
        <div className="clue-list-header">ACROSS</div>
        <div className="clue-list">
          {renderClues(acrossClues)}
        </div>
      </div>
      <div className="clue-list-by-direction">
        <div className="clue-list-header">DOWN</div>
        <div className="clue-list">
          {renderClues(downClues)}
        </div>
      </div>
    </div>
  );
};

export default ClueList;