import React from 'react'

class Box extends React.Component {
  constructor(props) {
    super(props);
    // props:
      // boxName
      // columns,
      // isBlackBox,
      // value,
      // label,
      // isHighlighted,
      // isInFocus,
      // isBoardBlurred,
      // handleBoxClick()
      // handleCharacterKey()
      // handleTabOrEnter()
      // handleSpacebar()
      // handleBackspace()
      // handleDelete()
      // handleArrowKey()

    this.state = {
      maxLength: 1 // this is in state because if I make a rebus button,
                    // using it will change maxLength
    };

    this.boxInput = React.createRef();

    this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.focusInput = this.focusInput.bind(this);
  };

  componentDidUpdate() {
    if (this.props.isInFocus) {
      this.focusInput();
    }
  };

  focusInput() {
    return this.boxInput.current.focus();
  };

  handleKeyboardInput(e) {
    const {
      boxName,
      isBoardBlurred,
      handleTabOrEnter,
      handleSpacebar,
      handleBackspace,
      handleDelete,
      handleArrowKey,
      handleCharacterKey
    } = this.props;
    // if (e.target.value.length >= this.state.maxLength) {
    //   this.props.updateBoard(this.props.position, e.target.value.toUpperCase());
    //   return this.props.findNextEmptyInput(this.props.position);
    // }
    e.preventDefault(); // move if this doesn't work

    if (e.key === 'CapsLock' || e.key === 'Escape') { return null };

    if ( e.shiftKey === true ) {
      if ( e.key === 'Tab' ) {
        return handleTabOrEnter(true);
      } else if ( e.key === 'Shift' ) {
        return null;
      }
    }

    if ( e.location === 0 ){
      switch (e.key) {
        case 'Tab':
        case 'Enter':
          return handleTabOrEnter(false);
        case ' ':
          return handleSpacebar();
        case 'Backspace':
          return handleBackspace();
        case 'Delete':
          return handleDelete();
        case 'ArrowUp':
          return handleArrowKey('ArrowUp', boxName);
        case 'ArrowDown':
          return handleArrowKey('ArrowDown', boxName);
        case 'ArrowLeft':
          return handleArrowKey('ArrowLeft', boxName);
        case 'ArrowRight':
          return handleArrowKey('ArrowRight', boxName);
        default:
          return handleCharacterKey(e.key);
      }
    }
  };

  handleClick(e) {
    const { handleBoxClick, boxName } = this.props;
    return handleBoxClick(boxName);
  };

  render() {
    const {
      isBlackBox,
      isInFocus,
      isHighlighted,
      isBoardBlurred,
      label,
      value
    } = this.props;

    if ( isBlackBox === true ) {
      return(
        <div
          className="wordcross-grid-box"
        >
          <input
            className="wordcross-box-input black-box"
            disabled
          />
        </div>
      );
    } else {
      const blurText = isBoardBlurred ? "blur-box-text" : "";
      let highlight = " ";
      if  ( isInFocus === true ) {
        highlight = "active-box-highlight";
      } else if ( isHighlighted === true ) {
        highlight = "active-entry-highlight";
      }

      return(
        <div
          className={`wordcross-grid-box ${highlight}`}
          style={{ paddingLeft: `${Math.ceil(20 / this.props.columns)}px`, paddingTop: `${Math.ceil(20 / this.props.columns)}px` }}
        >
          <span
            className="clue-number-label"
            style={{fontSize: `${Math.ceil(160 / this.props.columns)}px`}}
          >{label}</span>
          <input
            ref={this.boxInput}
            autoFocus={isInFocus}
            onFocus={e => e.target.select()}
            className={`wordcross-box-input input-box ${blurText}`}
            value={value.toUpperCase()}
            maxLength={this.state.maxLength}
            autoComplete={"off"}
            onClick={this.handleClick}
            onKeyDown={this.handleKeyboardInput}
            onChange={this.handleKeyboardInput}
          />
        </div>
      );
    }
  }


};

export default Box;
