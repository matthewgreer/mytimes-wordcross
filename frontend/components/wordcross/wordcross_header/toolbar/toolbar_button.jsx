import React from 'react';

const ToolbarButton = ({ 
  onClick,
  buttonIcon
}) => {
  return (
    <div 
      className={`wordcross-toolbar-button ${buttonIcon}`}
      onClick={onClick}
    ></div> 
  )
};

export default ToolbarButton;