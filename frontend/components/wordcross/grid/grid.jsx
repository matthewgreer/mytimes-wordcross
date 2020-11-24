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
    updateBoxInFocus,
    changeSolvingDirection,
    findNextEmptyInput,
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
                  updateBoard={updateBoard}
                  updateBoxInFocus={updateBoxInFocus}
                  changeSolvingDirection={changeSolvingDirection}
                  findNextEmptyInput={findNextEmptyInput}
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