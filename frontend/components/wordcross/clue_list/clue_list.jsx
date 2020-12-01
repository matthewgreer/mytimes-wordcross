import React from 'react';
import Clue from './clue'

const ClueList = ({
  acrossClues,
  downClues,
  // activeBox,
  activeClue,
  crossingClue,
  // solvingDirection,
  // findNextClueName,
  // updateActiveAndCrossingClues,
  handleClueClick
  }) => {

  const renderClues = (clueArray) => {
    return (
      <ul>
        {clueArray.map((clueElement) => {
          const clueName = clueElement.name;
          let clueHighlight = "";
          if (clueName === activeClue) {
            clueHighlight = "active-clue-highlight";
          } 
          if (clueName === crossingClue) {
            clueHighlight = "crossing-clue-highlight";
          }
          return (
              <Clue
                key={clueName}
                clueName={clueName}
                clue={clueElement.clue}
                direction={clueElement.direction}
                highlight={clueHighlight}
                number={clueElement.number}
                handleClueClick={handleClueClick}
              />
          );
        })}
      </ul>
    );
  };

  return (
    <section className="clue-list-container">
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
    </section>
  );
};

export default ClueList;