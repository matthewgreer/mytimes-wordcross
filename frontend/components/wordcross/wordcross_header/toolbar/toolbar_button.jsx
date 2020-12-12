import React from 'react';

const ToolbarButton = ({ 
  onClick,
  buttonIcon
}) => {
  return (
    <button
      className="toolbar-timer-Toolbar-button"
      onClick={onClick}
    >
      {buttonIcon}
      {/* <icon className={buttonIcon}></icon>  */}
    </button>
  )
};

export default ToolbarButton;