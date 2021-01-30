import React from 'react';
import Modal from './modal/modal'
import Toolbar from './toolbar/toolbar'

const WordcrossHeader = ({
  displayedDate,
  author,
  modalType,
  wordcrossCategory,
  handlePauseButtonClick,
  handleModalButtonClick,
  handleResetButtonClick,
  handleResetWordcross,
  isSolvedDayOf,
  calculateTime,
  }) => {

  return(

    <div className="wordcross-header">
      {<Modal 
        modalType={modalType} 
        wordcrossCategory={wordcrossCategory}
        calculateTime={calculateTime}
        isSolvedDayOf={isSolvedDayOf}
        handleModalButtonClick={handleModalButtonClick}
        handleResetWordcross={handleResetWordcross}
      />}
      <div className="wordcross-header-content-wrapper">
        <div className="wordcross-header-title">The {wordcrossCategory} Wordcross</div>
        <div className="wordcross-header-date">{displayedDate}</div> 
        <div className="wordcross-header-byline">By {author}</div>
      </div>
      <Toolbar 
        handlePauseButtonClick={handlePauseButtonClick}
        handleResetButtonClick={handleResetButtonClick}
        calculateTime={calculateTime}
      />
    </div>
  );
};

export default WordcrossHeader;