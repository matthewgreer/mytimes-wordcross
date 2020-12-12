import React from "react";

const Timer = ({ calculateTime }) => {
  return (
    <div className="wordcross-toolbar-section">
      <span>
        {calculateTime()}
      </span>
    </div>
  );
};

export default Timer;