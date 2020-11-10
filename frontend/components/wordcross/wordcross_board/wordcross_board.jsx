import React from 'react';
import Box from './box';

class WordcrossBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      solvingDirection: "across",
      boxInFocus: "[0, 0]",
    };
  
    this.createBoard = this.createBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);

  };

  componentDidUpdate() {
    if (!this.state.board && this.props.data.solving_state) {
      this.createBoard()
    }
  };

  createBoard() {
    return this.setState({
      board: Object.assign([], this.props.data.solving_state)
    });
  };

  updateBoard(position, newValue) {
    const updatedBoard = Object.assign([], this.state.board)
    const row = position[0];
    const col = position[1];
    updatedBoard[row][col] = newValue;
    return this.setState({
      board: updatedBoard
    });
  };

  render() {
    debugger
    return (
      <section className="wordcross-board">
        {this.state.board && this.state.board.map((row, rowIdx) => {
          return (
            <div 
              key={"row" + rowIdx.toString()}
              className="wordcross-row"
            >
              {row.map((boxValue, boxIdx) => {
                const position = [rowIdx, boxIdx];
                const key = position.toString();
                return (
                  <Box
                    isBlackBox={boxValue === "#"}
                    position={position}
                    key={key}
                    isInFocus={key === this.state.isInFocus}
                    updateBoard={this.updateBoard}
                    value={boxValue}
                  />  
                )
              })}
            </div>
          )
        })}   
      </section>
    )
  }
}

export default WordcrossBoard;