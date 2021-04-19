import React from 'react';
import Timer from './timer';
import ToolbarButton from './toolbar_button';

const Toolbar = ({ 
  calculateTime,
  handlePauseButtonClick,
  handleResetButtonClick,
  isSolved
}) => {
  return (
    <div className="wordcross-toolbar-container">&nbsp;
      <Timer
        isSolved={isSolved}
        calculateTime={calculateTime}
        handlePauseButtonClick={handlePauseButtonClick}
      />
      {isSolved ? 
        <div>&nbsp;</div> :
        <ToolbarButton 
          onClick={handleResetButtonClick}
          buttonIcon="reset-icon"
        />
      }
    </div>
  )
}
export default Toolbar;