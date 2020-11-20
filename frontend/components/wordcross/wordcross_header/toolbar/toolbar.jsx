import React from 'react';

const Toolbar = ({ resetBoard }) => {
  const handleReset = (e) => {
    resetBoard();
  }
  return (
    <div className="wordcross-toolbar-container">Toolbar
      <div className="wordcross-toolbar-section">timer</div>
      <div 
        className="wordcross-toolbar-section" 
        onClick={handleReset}
      >reset button</div>
    </div>
  )
}
export default Toolbar;