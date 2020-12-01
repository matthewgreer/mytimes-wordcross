import React from 'react';
import Box from './box';

const Grid = (
  { 
    board,
    ratio,
    labelSet,
    highlightedBoxes,
    boxInFocus,
    updateBoard,
    changeSolvingDirection,
    updateBoxInFocus,
    findNextBoxName,
    handleBoxClick,
    handleCharacterKey,
    handleTabOrEnter,
    handleShiftTab,
    handleSpacebar,
    handleBackspace,
    handleDelete,
    handleArrowKey
  }
) => {
    return (
    <div className="wordcross-grid-container">
      <div id="wordcross-grid">
      {board && board.map((row, rowIdx) => {
        return (
          <div key={"row" + rowIdx.toString()} className="wordcross-row">
            {row.map((boxValue, boxIdx) => {
              const position = [rowIdx, boxIdx];
              const label = labelSet[rowIdx][boxIdx];
              const boxName = position.toString();
              return (
                <Box
                  key={boxName}
                  boxName={boxName}
                  ratio={ratio}
                  isBlackBox={boxValue === "#"}
                  position={position}
                  value={boxValue}
                  label={label}
                  isHighlighted={highlightedBoxes.includes(boxName)}
                  isInFocus={boxName === boxInFocus}
                  // updateBoard={updateBoard}
                  changeSolvingDirection={changeSolvingDirection}
                  updateBoxInFocus={updateBoxInFocus}
                  findNextBoxName={findNextBoxName}
                  handleBoxClick={handleBoxClick}
                  handleCharacterKey={handleCharacterKey}
                  handleTabOrEnter={handleTabOrEnter}
                  handleSpacebar={handleSpacebar}
                  handleBackspace={handleBackspace}
                  handleDelete={handleDelete}
                  handleArrowKey={handleArrowKey}
                />  
              );
            })}
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Grid;