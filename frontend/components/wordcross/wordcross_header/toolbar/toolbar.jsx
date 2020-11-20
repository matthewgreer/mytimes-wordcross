import React from 'react';
import Timer from './timer'

const Toolbar = ({ resetBoard }) => {
  const handleReset = (e) => {
    resetBoard();
  }
  return (
    <div className="wordcross-toolbar-container">Toolbar
      <Timer className="wordcross-toolbar-section"/>
      <div 
        className="wordcross-toolbar-section" 
        onClick={handleReset}
      >reset button</div>
    </div>
  )
}
export default Toolbar;