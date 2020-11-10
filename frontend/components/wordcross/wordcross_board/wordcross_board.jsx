import React from 'react';
import Box from './box';

class WordcrossBoard extends React.Component {
  constructor(props) {
    super(props);
    // EXAMPLE props: {
      // data: {
        // author: "Author Name",
        // clue_set: {
          // a1: {
            // boxes: ['0,2','0,3','0,4']
            // clue: "Clue string",
            // direction: "Across/Down",
            // number: "1"
          // },
          // a2: {...}
        // },
        // id: 5,
        // label_set: [
          // ["#","#","1","2","3"],
          // ...
          // ["7"," "," ","#","#"]
        // ],
        // micro_id: 8,
        // solution: [
          // ["#","#","T","W","O"],
          // ...
          // ["I","N","S","#","#"]
        // ],
        // solved: false,
        // solving_state: [
          // ["#","#","T","",""],
          // ...
          // ["","","S","#","#"]
        // ],
        // timer: 0,
        // user_id: 7,
        // wordcross_date: "2020-10-26T00:00:00.000Z"
        // }
      // }
    // }
    this.state = {
      solvingDirection: "across",
      boxInFocus: "0,0",
    };
  
    this.createBoard = this.createBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);

  };

  componentDidUpdate() {
    if (this.props.data){
      if (!this.state.board) {
        this.createBoard()
      }
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
                const label = this.props.data.label_set[rowIdx][boxIdx];
                const key = position.toString();
                return (
                  <Box
                    isBlackBox={boxValue === "#"}
                    position={position}
                    key={key}
                    isInFocus={key === this.state.isInFocus}
                    updateBoard={this.updateBoard}
                    label={label}
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