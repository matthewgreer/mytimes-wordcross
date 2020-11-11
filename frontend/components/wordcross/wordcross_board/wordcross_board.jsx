import React from 'react';
import CurrentClue from './current_clue/current_clue';
import Box from './box';
import ClueList from './clue_list/clue_list'

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
      activeClue: "a1",
      boxInFocus: "", // when this.props.data is available, set to a1.boxes[0],
      solvingDirection: "across",
    };

    this.clueSet = {};
    this.labelSet = [];
  
    this.createBoard = this.createBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    // this.highlightBoxes = this.highlightBoxes.bind(this);

  };

  componentDidUpdate() {
    if (this.props.data) {
      this.clueSet = this.props.data.clue_set;
      this.labelSet = this.props.data.label_set;
      if (!this.state.board) {
        this.createBoard();
      }
      if (!this.state.boxInFocus) {
        this.setState({
          boxInFocus: this.props.data.clue_set.a1.boxes[0]
        })
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
      <section className="wordcross-board-with-clues">
        <section className="wordcross-current-clue-and-grid">
          {this.clueSet && 
          <CurrentClue 
            activeClue={this.clueSet[this.state.activeClue]}
          />
          }
          {this.state.board && this.state.board.map((row, rowIdx) => {
            return (
              <div 
                key={"row" + rowIdx.toString()}
                className="wordcross-row"
              >
                {row.map((boxValue, boxIdx) => {
                  const position = [rowIdx, boxIdx];
                  const label = this.labelSet[rowIdx][boxIdx];
                  const key = position.toString();
                  return (
                    <Box
                      isBlackBox={boxValue === "#"}
                      position={position}
                      key={key}
                      isInFocus={key === this.state.boxInFocus}
                      updateBoard={this.updateBoard}
                      // highlightBoxes={this.highlightBoxes}
                      label={label}
                      value={boxValue}
                    />  
                  )
                })}
              </div>
            )
          })}
        </section>
        <section className="wordcross-clue-lists">
          {this.clueSet && <ClueList 
            clueSet={this.clueSet}
          />}
        </section>
      </section>
    )
  }
}

export default WordcrossBoard;