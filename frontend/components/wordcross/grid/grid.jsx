import React from 'react';
import Box from './box';

const Grid = (
  {
    board,
    columns,
    labelSet,
    boxInFocusName,
    activeClueBoxArray,
    isBoardBlurred,

    changeSolvingDirection,
    handleBoxClick,
    handleCharacterKey,
    handleTabOrEnter,
    handleSpacebar,
    handleBackspace,
    handleDelete,
    handleArrowKey
  }
) => {
    return (
    <div className="wordcross-grid-container">
      <div id="wordcross-grid"
        style={{gridTemplateColumns: `repeat(${columns}, 1fr`}}
      >
        {board && board.map((row, rowIdx) => {
          return row.map((boxValue, boxIdx) => {
            const position = [rowIdx, boxIdx];
            const label = labelSet[rowIdx][boxIdx];
            const boxName = position.toString();
            return (
              <Box
                key={boxName}
                boxName={boxName}
                columns={columns}
                isBlackBox={boxValue === "#"}
                isBoardBlurred={isBoardBlurred}
                value={boxValue}
                label={label}
                isHighlighted={activeClueBoxArray.includes(boxName)}
                isInFocus={boxName === boxInFocusName}
                changeSolvingDirection={changeSolvingDirection}
                handleBoxClick={handleBoxClick}
                handleCharacterKey={handleCharacterKey}
                handleTabOrEnter={handleTabOrEnter}
                handleSpacebar={handleSpacebar}
                handleBackspace={handleBackspace}
                handleDelete={handleDelete}
                handleArrowKey={handleArrowKey}
              />
            );
          })
        })}
      </div>
    </div>
  );
};

export default Grid;
