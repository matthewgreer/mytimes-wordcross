import React from 'react'

class Box extends React.Component {
  constructor(props) {
    // props: position, key, value, isBlackBox, isInFocus, clueNumber, updateBoard
    super(props);
    this.state = {
      isHighlighted: false,
      maxLength: 1
    }

    // if (this.props.value === "#") {
    //   this.boxAttributes = {
    //     className: "wordcross-box black-box",
    //     isDisabled: "disabled"
    //   }
    // } else {
    //   this.boxAttributes = {
    //     className: "wordcross-box input-box",
    //     isDisabled: ""
    //   }
    // }

    this.handleLetterInput = this.handleLetterInput.bind(this);

  }

  handleLetterInput(e) {
    this.props.updateBoard(this.props.position, e.target.value.toUpperCase())
  };


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

              />
            </div>
        </div>
      );
    }
  }


};

export default Box;