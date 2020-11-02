import React from 'react';
import ModalButton from './modal_button'

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalText: "",
      isActive: true
    }

  }

// NOTE! What is the logic to determine what text is displayed on the modal
  // and modal button? NYTimes modals:
  // On component mounting: "Ready to get started?"" <Button "OK" >
  // Paused: "Your game has been *paused*."" <Button "RESUME" >
  // Filled but incorrectly: "*Just about* <hl> The puzzle is filled, but at
    // least one square's amiss. Oh, crumbs!" <Button "KEEP TRYING" >
      // surrounding area receives (-webkit-)filter: blur(33px)
  // Completed correctly: <icon> Congratulations! You solved a _____ puzzle
    // in ___ seconds. <hl> Have you played our new matching game? It's 
    // mesmerizing. <Button "TRY TILES" >


  render() {
    if (isActive) {
    return (
      <div id="modal-container">
        <div className="modal-panel">
          <div className="modal-message">
            Ready to get started?
          </div>
        <ModalButton buttonText={buttonText} />
        </div>
      </div>
    )}
  }
};

export default Modal;