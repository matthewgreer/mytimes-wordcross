import React from 'react';
import TitleDate from './title_date'
import Byline from './byline'
import Toolbar from './toolbar/toolbar'

const PuzzleHeader = ({ displayedDate, author }) => {
  return(
    <div className="micro-puzzle-header">
      <div className="micro-puzzle-header-content-wrapper">
        <div className="micro-puzzle-header-title">The Micro Wordcross</div>
        {/* Displays todays date rather than puzzle's actual date */}
        <div className="micro-puzzle-header-date">{displayedDate}</div> 
        <div className="micro-puzzle-header-byline">By {author}</div>
      </div>
    </div>
  )
}

export default PuzzleHeader;