import React from 'react'

class Box extends React.Component {
  constructor(props) {
    // props: position, key, value, isInFocus, clueNumber, updateBoard
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
    debugger
    return(
      <div className="wordcross-grid-box">
          <div>
            <span className="clue-number-label">1</span>
            <input 
              className={this.props.value === "#" ?
                "wordcross-box black-box" : 
                "wordcross-box input-box"}
              onChange={this.handleLetterInput} 
              value={this.props.value.toUpperCase()}
              maxLength={this.maxLength}
              autoComplete="off"
              pattern="[A-Za-z]{1}"

            />
          </div>
      </div>
    )
  }


};

export default Box;