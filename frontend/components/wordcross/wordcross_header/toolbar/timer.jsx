import React from "react";

const Timer = ({
  elapsedHours,
  elapsedMinutes,
  elapsedSeconds,
}) => {
  debugger
  return (
    <div className="wordcross-toolbar-section">
      <span>
        {elapsedHours > 0 &&
        <span>{elapsedHours}:</span>}
        <span>{elapsedMinutes}:</span>
        {elapsedSeconds < 10 &&
        <span>0</span>}
        <span>{elapsedSeconds}</span>
      </span>
    </div>
  );
};

export default Timer;