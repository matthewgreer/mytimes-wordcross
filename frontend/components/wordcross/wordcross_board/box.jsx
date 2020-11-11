import React from 'react'

class Box extends React.Component {
  constructor(props) {
    // props: position, key, value, label, isBlackBox, isInFocus, clueNumber, updateBoard
    super(props);
    this.state = {
      isHighlighted: false,
      maxLength: 1
    }

    this.handleLetterInput = this.handleLetterInput.bind(this);

  }

  handleLetterInput(e) {
    this.props.updateBoard(this.props.position, e.target.value.toUpperCase())
  };

  // handleFocus(e) {
  //   // call wordcross_board instance method for highlighting appropriate
  //     // boxes and setting 
  // }


  render() {
    if (this.props.isBlackBox) { 
      return(
        <div className="wordcross-grid-box">
          <div>
            <input className="wordcross-box black-box" disabled></input>
          </div>
        </div>
      );
    } else {
      return(
        <div className="wordcross-grid-box">
            <div>
              <span className="clue-number-label">{this.props.label}</span>
              <input 
                className={"wordcross-box input-box"}
                onChange={this.handleLetterInput} 
                value={this.props.value.toUpperCase()}
                maxLength={this.maxLength}
                autoComplete="off"
                pattern="[A-Za-z]{1}"
                // onFocus={this.highlightBoxes}
              />
            </div>
        </div>
      );
    }
  }


};

export default Box;