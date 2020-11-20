import React from 'react';
import TitleDate from './title_date'
import Byline from './byline'
import Toolbar from './toolbar/toolbar'

const WordcrossHeader = ({ displayedDate, author }) => {
    return(
    <div className="wordcross-header">
      <div className="wordcross-header-content-wrapper">
        <div className="wordcross-header-title">The Micro Wordcross</div>
        <div className="wordcross-header-date">{displayedDate}</div> 
        <div className="wordcross-header-byline">By {author}</div>
      </div>
      <Toolbar />
    </div>
  )
}

export default WordcrossHeader;