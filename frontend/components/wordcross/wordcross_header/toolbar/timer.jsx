import React from "react";
import ToolbarButton from './toolbar_button';


const Timer = ({ 
  calculateTime, 
  handlePauseButtonClick,
  isSolved 
}) => {
  
  return (
    <div className="wordcross-toolbar-timer">
      <span>
        {calculateTime()}
      </span>
      {!isSolved && <ToolbarButton 
        onClick={handlePauseButtonClick}
        buttonIcon="pause-icon"
      />}
    </div>
  );
};

export default Timer;