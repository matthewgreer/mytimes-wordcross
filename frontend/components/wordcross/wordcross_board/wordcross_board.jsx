import React from 'react';
import Box from './box';

class WordcrossBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      solvingDirection: "across",
      boxInFocus: "0,0",
      // when can I set this.state.board to the solving_state in props
        // componentDidMount?, componentDidUpdate?
    };
  
    this.createBoard = this.createBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);

  };

  // componentDidMount() {
  //   if (this.props.data.solving_state) {
  //     this.createBoard()
  //   }
  // };

  componentDidUpdate() {
    if (!this.state.board && this.props.data.solving_state) {
      this.createBoard()
    }
  };

  createBoard() {
    const newBoard = []
    this.props.data.solving_state.map((row, rowIdx) => {
      newBoard.push([]);
      row.map((boxValue, boxIdx) => {
        let position = [rowIdx, boxIdx];
        newBoard[rowIdx].push(
          <Box
            position={position}
            key={position.toString()}
            isInFocus={false}
            updateBoard={this.updateBoard}
            value={boxValue}
          />
          // new Box({
          //   position: position,
          //   key: position.toString(),
          //   value: boxValue,
          //   isInFocus: false,
          //   updateBoard: this.updateBoard
          // })
        )
      });
    });
    debugger
    return this.setState({
      board: newBoard
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
            <>
              {row.map((box) => {
                return box
              })}
            </>
          </div>)
        })}
        {/* {this.state.board && <table className="wordcross-grid">
          <tbody>
            {
              this.state.board.map((row, rowIdx) => {
                return <tr key={"row" + rowIdx.toString()}>
                  {row.map((boxValue, boxIdx) => {
                    let position = [rowIdx, boxIdx];
                    return <Box
                      position={position}
                      key={position.toString()}
                      value={boxValue}
                      isInFocus={false}
                      update={this.updateBoard}
                    />
                  })}
                </tr>
              })
            }
          </tbody>
        </table>} */}
        
      </section>
    )
  }
    
}

export default WordcrossBoard;