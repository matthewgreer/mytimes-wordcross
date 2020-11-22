import React from 'react';

const ModalButton = ({buttonText, handleModalButtonClick}) => {

  return (
        <button
          className="modal-button" 
          onClick={handleModalButtonClick}
          type="button"
        >
          {buttonText}
        </button>
  );
};

export default ModalButton;