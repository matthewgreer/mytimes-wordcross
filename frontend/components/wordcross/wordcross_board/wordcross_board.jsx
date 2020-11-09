import React from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom';
import Box from './box';

class WordcrossBoard extends React.Component {
  constructor(props) {
    super(props);

    debugger

    this.rows = 0;
    this.cols = 0;
    // for (let r = 0; r < this.rows; r++) {
    //   for (let c = 0; c < this.cols; c++) {
    //     initialBoard[r][c] = this.props.data.solving_state[r][c]
    //   }
    // }

    this.state = {
      solvingDirection: "across",
      boxInFocus: "0,0",
      board: []
    };

    // this.renderBoard = this.renderBoard.bind(this)
  
  };

  componentDidUpdate() {
    if (this.props.data.solving_state && this.state.board != this.props.data.solving_state){
      this.setState({
        board: this.props.data.solving_state
      })
      this.rows = this.props.data.solving_state.length;
      this.cols = this.props.data.solving_state[0].length
    }
  };

  render() {
    debugger
    const grid = []
    
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const position = [r, c]
        grid.push(
          <Box
            position={position}
            key={position.toString()}
            value={this.state.board[r][c]}
          />
        )
      }
    }
    
    debugger

    return(
      <div>
        {grid}
      </div>
    )
  }
    
}

export default WordcrossBoard;

// iterate through solving_state, create Box instances
  // for each square