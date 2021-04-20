import React from 'react';
import ModalButton from './modal_button';
import GameIcon from '../../../body/game_icon';

const Modal = ({
  modalType,
  wordcrossCategory,
  calculateTime,
  isSolvedDayOf,
  handleModalButtonClick,
  handleResetWordcross
}) => {

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
      case "reset":
        buttonText = "CANCEL";
        modalText = resetModalText();
        break;
      case "dummyLink":
        buttonText = "RETURN TO WORDCROSS";
        modalText = dummyLinkText();
        break;
      case "keepTrying":
        buttonText = "KEEP TRYING";
        modalText = keepTryingModalText();
        break;
      case "solved":
        const time = calculateTime();
        buttonText = "REVIEW WORDCROSS";
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
    );
  };

  const pausedModalText = () => {
    return (
      <div className="modal-message">
        Your game has been <span className="boldface">paused</span>.
      </div>
    );
  };

  const resetModalText = () => {
    return (
      <div className="modal-message">
        <div className="modal-title">Reset? Are you sure?</div>
        <div className="modal-message">
          All completed squares will be erased!
        </div>
      </div>
    );
  };

  const redirectToPortfolio = () => {
    return window.open("http://www.matthewgreer.net", " ")
  };

  const redirectToWaylon = () => {
    return window.open("https://matthewgreer.github.io/waylon/", " ")
  }

  const dummyLinkText = () => {
    return (
      <div className="modal-message">
        <div className="modal-title">Want more NYTimes puzzle homages?</div>
        <div className="modal-message">
          Hire Matthew Greer, sole developer of <br /> the Mad Year Times Wordcross!
        </div>
      </div>
    );
  };

  const secondModalButton = () => {
    if (modalType === "reset") {
      return (
        <ModalButton
          buttonText="RESET WORDCROSS"
          handleModalButtonClick={handleResetWordcross}
        />
      );
    } else if (modalType === "dummyLink") {
      return (
        <ModalButton
          buttonText="VISIT MATTHEWGREER.NET"
          handleModalButtonClick={redirectToPortfolio}
        />
      );
    } else if (modalType === "solved") {
      return (
        <ModalButton
          buttonText="TRY WAYLON"
          handleModalButtonClick={redirectToWaylon}
        />
      );
    } else {
      return null;
    }
  }

  const keepTryingModalText = () => {
    return (
      <div className="modal-message">
        <div className="modal-title">Just about</div>
        <div className="modal-message">
          The wordcross is filled, but at least one square's amiss. Shucks!
        </div>  
      </div>
    );
  };

  const simplifyWordcrossType = () => {
    return wordcrossCategory === "Micro" ? "micro" : "daily";
  };

  const completionIconNumber = () => {
    if (simplifyWordcrossType() === "micro") {
      return 7;
    } else {
      return isSolvedDayOf() ? 20 : 19;
    }
  }

  const completedModalText = (time, wordcrossCategory) => {
    return (
      <div className="modal-message">
        <div className="success-icon-wrapper">
          <GameIcon 
            type={simplifyWordcrossType()}
            number={completionIconNumber()}
          /> 
        </div>
        <div className="modal-title">Congratulations! You solved a {wordcrossCategory} wordcross in {time} seconds.</div>
        <div className="modal-message">Have you played our developer's unique scrolling game? Give WAYLON a try.</div>
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
              {secondModalButton()}
              <ModalButton
                buttonText={buttonText}
                handleModalButtonClick={handleModalButtonClick}
              />
            </article>
          </div>
        </div>
      )}
    else {
      return null;
    }
  
};

export default Modal;