import React from 'react'

class Box extends React.Component {
  constructor(props) {
    super(props);
    // props: 
      // boxName
      // ratio
      // isBlackBox, 
      // // position, 
      // value, 
      // label, 
      // isHighlighted,
      // isInFocus,
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
    }

    this.boxInput = React.createRef();

    this.handleKeyboardInput = this.handleKeyboardInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  componentDidUpdate() {
    if (this.props.isInFocus) {
      this.focusInput();
    }
  }

  focusInput() {
    return this.boxInput.current.focus();
  }

  handleKeyboardInput(e) {
    // if (e.target.value.length >= this.state.maxLength) {
    //   this.props.updateBoard(this.props.position, e.target.value.toUpperCase());
    //   return this.props.findNextEmptyInput(this.props.position);
    // }
    e.preventDefault(); // move if this doesn't work

    if (e.shiftKey) {
      if (e.key === 'Tab') {
        return this.props.handleTabOrEnter(true);
      } else if (e.key === 'Shift') {
        return null;
      } else {
        this.props.handleCharacterKey(e.key);
      }
    }
    
    switch (e.key) {
        case 'Tab':
        case 'Enter':
          return this.props.handleTabOrEnter(false);
        case ' ':
          return this.props.handleSpacebar();
        case 'Backspace':
          return this.props.handleBackspace();
        case 'Delete':
          return this.props.handleDelete();
        case 'ArrowUp':
          return this.props.handleArrowKey('ArrowUp');
        case 'ArrowDown':
          return this.props.handleArrowKey('ArrowDown');
        case 'ArrowLeft':
          return this.props.handleArrowKey('ArrowLeft');
        case 'ArrowRight':
          return this.props.handleArrowKey('ArrowRight');
        default:
          return this.props.handleCharacterKey(e.key);
      }
  };

  handleClick(e) {
    return this.props.handleBoxClick(this.props.boxName);
  };

  render() {
    if (this.props.isBlackBox) { 
      return(
        <div 
          className="wordcross-grid-box"
        >
          <input className="wordcross-box-input black-box" disabled />
        </div>
      );
    } else {
      let highlight = " ";
      if  (this.props.isInFocus) {
        highlight = "active-box-highlight";
      }else if (this.props.isHighlighted){
        highlight = "active-entry-highlight";
      }
      return(
        <div 
          className={`wordcross-grid-box ${highlight}`}
        >
          <span className="clue-number-label">{this.props.label}</span>
          <input
            ref={this.boxInput}
            autoFocus={this.props.isInFocus}
            className={`wordcross-box-input input-box`}
            value={this.props.value.toUpperCase()}
            // readOnly={true}
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