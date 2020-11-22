import React from 'react';
import Timer from './timer';
import ToolbarButton from './toolbar_button';

const Toolbar = ({ 
  calculateTime,
  handlePauseButtonClick,
  handleResetButtonClick,
  isTimerRunning
}) => {
  return (
    <div className="wordcross-toolbar-container">Toolbar
      <Timer
        calculateTime={calculateTime}

      />
      <ToolbarButton 
        onClick={handlePauseButtonClick}
        buttonIcon={isTimerRunning ? "pause-icon" :"play-icon"}
      />
      <ToolbarButton 
        onClick={handleResetButtonClick}
        buttonIcon="reset-icon"
      />
    </div>
  )
}
export default Toolbar;