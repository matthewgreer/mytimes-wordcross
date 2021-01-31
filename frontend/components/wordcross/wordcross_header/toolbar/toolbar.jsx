import React from 'react';
import Timer from './timer';
import ToolbarButton from './toolbar_button';

const Toolbar = ({ 
  calculateTime,
  handlePauseButtonClick,
  handleResetButtonClick,
}) => {
  return (
    <div className="wordcross-toolbar-container">&nbsp;
      <Timer
        calculateTime={calculateTime}
        handlePauseButtonClick={handlePauseButtonClick}
      />
      <ToolbarButton 
        onClick={handleResetButtonClick}
        buttonIcon="reset-icon"
      />
    </div>
  )
}
export default Toolbar;