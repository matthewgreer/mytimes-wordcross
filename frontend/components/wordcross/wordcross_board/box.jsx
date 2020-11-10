import React from 'react'

class Box extends React.Component {
  constructor(props) {
    // props: position, key, value, isInFocus, clueNumber, updateBoard
    super(props);
    this.state = {
      isHighlighted: false,
      // currentValue: ""
    }

    this.handleLetterInput = this.handleLetterInput.bind(this);

  }

  handleLetterInput(e) {
    this.props.updateBoard(this.props.position, e.target.value)
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
              value={this.props.value}
            />
          </div>
      </div>
    )
  }


};

export default Box;