import React from 'react';
import Clue from './clue'

const ClueList = ({
  activeBox,
  activeClue,
  clueSet,
  solvingDirection,
  updateActiveClue
  }) => {


  // THIS LOGIC IS NOW ELEVATED TO WORDCROSS COMPONENT -- OBSOLETE
  // const acrossClues = [];
  // const downClues = [];

  // if (!acrossClues.length) {
  //   Object.keys(clueSet).forEach(clueName => {
  //     const clueProperties = clueSet[clueName];
  //     clueProperties.name = clueName;
  //     clueProperties.direction === 'across' ? 
  //       acrossClues.push(clueProperties) :
  //       downClues.push(clueProperties);
  //   });

  //   acrossClues.sort((a, b) => { a.number - b.number });
  //   downClues.sort((a, b) => { a.number - b.number });
  // }

  const renderClues = (clueArray) => {
    return (
      <ul>
        {clueArray.map((clueElement) => {
          const clueName = clueElement.name;
          let clueHighlight = "";
          if (clueName === activeClue) {
            clueHighlight = "active-clue-highlight";
          } 
          if (
            clueElement.direction != solvingDirection &&
            clueElement.boxes.includes(activeBox)
            ) {
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
                updateActiveClue={updateActiveClue}
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