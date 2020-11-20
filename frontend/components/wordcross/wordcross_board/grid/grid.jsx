import React from 'react';
import Box from '../box';

const Grid = (
  { 
    board,
    labelSet,
    highlightedBoxes,
    boxInFocus,
    // createBoard,
    updateBoard,
    updateBoxInFocus,
    changeSolvingDirection,
    findNextEmptyInput,
  }
) => {
  // if (!board) {createBoard()};
    return (
    <section className="wordcross-grid">
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
                  isBlackBox={boxValue === "#"}
                  position={position}
                  isHighlighted={highlightedBoxes.includes(boxName)}
                  isInFocus={boxName === boxInFocus}
                  updateBoard={updateBoard}
                  updateBoxInFocus={updateBoxInFocus}
                  changeSolvingDirection={changeSolvingDirection}
                  findNextEmptyInput={findNextEmptyInput}
                  label={label}
                  value={boxValue}
                />  
              );
            })}
          </div>
        )
      })}
    </section>
  );
};

export default Grid;