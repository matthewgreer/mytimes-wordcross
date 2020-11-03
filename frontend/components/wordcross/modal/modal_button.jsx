import React from 'react';

const ModalButton = ({buttonText, onClick}) => {

  return (
        <button className="modal-button" onClick={onClick} type="button">
          {buttonText}
        </button>
  );
};

export default ModalButton;