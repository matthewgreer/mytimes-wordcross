import React from 'react';
import ModalButton from './modal_button'

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalText: "Ready to get started?",
      buttonText: "OK",
      isActive: true
    }
    // this.configureModal = this.configureModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    this.setState(state => ({ isActive: false }));
  };

  // NOTE! What is the logic to determine what text is displayed on the modal
  // and modal button? NYTimes modals display this text:

    // configureModal = (modalType) => {
    //   switch (modalType) {
    //     case "ready":
    //       this.setState((state) => {
    //         return {
    //           modalText: "Ready to get started?",
    //           buttonText: "OK",
    //           isActive: true
    //         }
    //       });
    //       break;
    //     case "paused":
    //       this.setState((state) => {
    //         return {
    //           modalText: "Your game has been paused",
    //            // how do I manage boldfacing the text for "paused"?
    //           buttonText: "RESUME",
    //           isActive: true
    //         }
    //       });
    //       break;
    //     case "incorrect":
    //       this.setState((state) => {
    //         return {
    //           modalText: "*Just about* <hl> The puzzle is filled, but at least one square's amiss. Oh, crumbs!",
    //            // how do I manage boldfacing the text for "Just about" or the horizontal line?
    //           buttonText: "KEEP TRYING",
    //           isActive: true
    //         }
    //       });
    //       break;
    //     case "complete":
    //       this.setState((state) => {
    //         return {
    //           modalText: "<icon> Congratulations! You solved a _____ puzzle in ___ seconds. <hl> Have you played our new matching game? It's mesmerizing.",
    //            // how do I manage icon, variables, horizontal lines? Oy.
    //           buttonText: "TRY LINOLEUM",
    //           isActive: true
    //         }
    //       });
    //     default:
    //       this.setState((state) => {
    //         return {
    //           isActive: false
    //         }
    //       })
    //       break;
    //   }
    // }

  render() {
    if (this.state.isActive) {
      return (
        <div id="modal-container">
          <div className="modal-panel">
            <div className="modal-message">
              {this.state.modalText}
            </div>
          <ModalButton buttonText={this.state.buttonText} onClick={this.hideModal} />
          </div>
        </div>
      )}
    else {
      return null;
    }
  }
};

export default Modal;