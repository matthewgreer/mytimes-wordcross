import React from 'react';

const Modal = ({ modalType, onClick, wordcrossCategory, time }) => {

  let buttonText;
  let modalText;

  const initializeModal = (modalType) => {
    switch (modalType) {
      case "ready":
        buttonText = "OK";
        modalText = readyModalText();
        break;
      case "paused":
        buttonText = "RESUME";
        modalText = pausedModalText();
        break;
      case "keepTrying":
        buttonText = "KEEP TRYING";
        modalText = keepTryingModalText();
        break;
      case "solved":
        buttonText = "TRY LINOLEUM";
        modalText = completedModalText(time, wordcrossCategory);
        break;
      case "none":
        buttonText = null;
        modalText = null;
        break;
      default:
        buttonText = "CONTINUE";
        modalText = errorModalText();
      break;
    };
  };

  
    
  const readyModalText = () => {
    return (
      <div className="modal-message">
        Ready to get started?
      </div>
    )
  };

  const pausedModalText = () => {
    return (
      <div className="modal-message">
        Your game has been <span className="boldface">paused</span>.
      </div>
    )
  };

  const keepTryingModalText = () => {
    return (
      <div className="modal-message">
        <div className="modal-title">Just about</div>
        <div className="modal-message">The wordcross is filled, but at least one square's amiss. Shucks!</div>  
      </div>
    );
  };

  const completedModalText = (time, wordcrossCategory) => {
    return (
      <div className="modal-message">
        <div>Icon goes here</div>
        <div className="modal-title">Congratulations! You solved a {wordcrossCategory} wordcross in {time} seconds.</div>
        <div className="modal-message">Have you played our new matching game? It's mesmerizing.</div>
      </div>
    );
  };

  const errorModalText = () => {
    return (
      <div className="modal-message">This modal is broken. Woe is modal!</div>
    );
  };

  initializeModal(modalType);

    if (modalType != "none") {
      return (
        <div id="modal-container">
          <div className="modal-veil"></div>
          <div className="modal-panel-container">
            <article className="modal-panel">
              <div className="modal-message">
                {modalText}
              </div>
              <button className="modal-button" onClick={onClick} type="button">
                {buttonText}
              </button>
            </article>
          </div>
        </div>
      )}
    else {
      return null;
    }
  
};


export default Modal;