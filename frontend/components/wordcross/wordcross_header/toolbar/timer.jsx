import React from "react";
import ToolbarButton from './toolbar_button';


const Timer = ({ calculateTime, handlePauseButtonClick }) => {
  return (
    <div className="wordcross-toolbar-timer">
      <span>
        {calculateTime()}
      </span>
      <ToolbarButton 
        onClick={handlePauseButtonClick}
        buttonIcon="pause-icon"
      />
    </div>
  );
};

export default Timer;