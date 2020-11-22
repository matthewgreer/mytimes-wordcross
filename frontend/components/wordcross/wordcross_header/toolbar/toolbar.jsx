import React from 'react';
import Timer from './timer';
import ToolbarButton from './toolbar_button';

const Toolbar = ({ 
  elapsedHours,
  elapsedMinutes,
  elapsedSeconds,
  handlePauseButtonClick,
  handleResetButtonClick,
  isTimerRunning
}) => {
  return (
    <div className="wordcross-toolbar-container">Toolbar
      <Timer
        elapsedHours={elapsedHours}
        elapsedMinutes={elapsedMinutes}
        elapsedSeconds={elapsedSeconds}
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