import React from 'react';
import Modal from './modal';

class ModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: ''
    }

    
  };
  
  // NOTE! Does this function need to be a Modal class instance method
    // instead, since its purpose is to hide that element? I imagine it
    // will accomplish that purpose as part of the ModalButton class, but
    // is it better separation of concerns to put it in the Modal class?


  render() {
    return (
          <button className="modal-button" onClick=''>
            {this.state.buttonText}
          </button>
    )
  }
}

export default ModalButton;