import React from 'react';
import ModalButton from './modal_button'

class Modal extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   modalText: "Ready to get started?",
    //   buttonText: "OK",
    //   isActive: true
    // }
    // this.configureModal = this.configureModal.bind(this);
    // this.hideModal = this.hideModal.bind(this);
    
    readyModalText = () => {
      return (
        <div className="modal-message">
          Ready to get started?
        </div>
      )
    };

    pausedModalText = () => {
      return (
        <div className="modal-message">
          Your game has been <span className="boldface">paused</span>.
        </div>
      )
    };

    keepTryingModalText = () => {
      return (
        <div className="modal-message">
         <div className="modal-title">Just about</div>
         <div>The puzzle is filled, but at least one square's amiss. Shucks!</div>  
        </div>
      )
    };

    switch (this.props.modalType) {
      case "ready":
        this.buttonText = "OK";
        this.modalText = readyModalText();
        break;
      case "paused":
        this.buttonText = "RESUME";
        this.modalText = pausedModalText();
        break;
      case "keepTrying":
        this.buttonText = "KEEP TRYING";
        this.modalText = keepTryingModalText();
        break;
      case "solved":
    }



  }

  // hideModal() {
  //   this.setState(state => ({ isActive: false }));
  //   // callback? to start timer, redirect, etc.?
  // };

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
    // if (this.state.isActive) {
    if (this.props.modalType != "none") {
      return (
        <div id="modal-container">
          <div className="modal-panel">
            <div className="modal-message">
              {this.state.modalText}
            </div>
          {/* <ModalButton buttonText={this.state.buttonText} onClick={this.hideModal} /> */}
            <button className="modal-button" onClick={onClick} type="button">
              {buttonText}
            </button>
          </div>
        </div>
      )}
    else {
      return null;
    }
  }
};

export default Modal;