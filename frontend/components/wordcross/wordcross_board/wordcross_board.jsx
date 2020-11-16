import React from 'react';
import CurrentClue from './current_clue/current_clue';
import Box from './box';
import ClueList from './clue_list/clue_list'

// NOTE !!! I should probably abstract the Grid portion of this component
  // to a separate, more specific component

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
            // direction: "across"/"down",
            // number: 1
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
      // set by default for when a wordcross first mounts
      solvingDirection: "down",
      activeClue: "a1",
      highlightedBoxes: [],
      // when this.props.data is available, the following are set by
        // componentDidUpdate():
      // board:      // set to the solving_state by createBoard();

      // boxInFocus: // set to a1.boxes[0] by updateBoxInFocusFromClue()
      
      // boxesInCol: // (soon to be) used to style box size relative to grid dimensions,
      // boxesInRow: // (soon to be) used to style box size relative to grid dimensions,
    };

    // most likely redundant and to be deleted:
    // this.clueSet = {};
    // this.labelSet = [];
  
    this.createBoard = this.createBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.changeSolvingDirection = this.changeSolvingDirection.bind(this);
    this.updateBoxInFocus = this.updateBoxInFocus.bind(this);
    this.updateBoxInFocusFromClue = this.updateBoxInFocusFromClue.bind(this);
    this.updateActiveClue = this.updateActiveClue.bind(this);
    this.updateActiveClueFromBox = this.updateActiveClueFromBox.bind(this);
    this.highlightBoxes = this.highlightBoxes.bind(this);

  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.data) {
      // calculate grid size, to scale grid accordingly (not implemented yet)
      if (!this.boxesInRow && this.props.data.solution) {
        this.boxesInRow = this.props.data.solution[0].length;
        return this.boxesInCol = this.props.data.solution.length;
      }

      // update the box in focus to the first input of the first across clue,
        // then create the grid based on the solving_state received from props
      if (!this.state.board) {
        return this.createBoard();
      }

      if (this.state.solvingDirection != prevState.solvingDirection) {
        return this.highlightBoxes(this.state.boxInFocus)
      }
            
      // does stupid JS require this method need to explicitly return something?

    }
  };

  // creates the board in state based on solving_state
    // also sets boxInFocus to the first box of the a1 clue (set by default in
    // constructor)
  createBoard() {
    this.updateBoxInFocusFromClue(this.state.activeClue);
    return this.setState({
      board: Object.assign([], this.props.data.solving_state)
    });
  };

  // changes the board in state to reflect user input
  updateBoard(position, newValue) {
    const updatedBoard = Object.assign([], this.state.board)
    const row = position[0];
    const col = position[1];
    updatedBoard[row][col] = newValue;
    // NOTE !!! a method determining which input to focus on next
      //  should probably be called here
    return this.setState({
      board: updatedBoard
    });
  };

  changeSolvingDirection(direction, box) {
    let newDirection;
    if (box != this.state.boxInFocus) {
      newDirection = this.state.solvingDirection;
    } else if (direction === "switch") {
      newDirection = this.state.solvingDirection === "across" ?
       "down" : "across";
    } else {
      newDirection = direction;
    }
    return this.setState({
      solvingDirection: newDirection
    });
  };

  // change the boxInFocus in state based on a user focusing (clicking) on
    // a Box in the grid
  updateBoxInFocus(newBox) {
    this.highlightBoxes(newBox); 
    this.updateActiveClueFromBox(newBox);
    return this.setState({
      boxInFocus: newBox
    });
  };

  // change the boxInFocus in state based on a Clue in the ClueList receiving
    // focus
  updateBoxInFocusFromClue(focusedClue) {
    if (
      this.state.boxInFocus != this.props.data.clue_set[focusedClue].boxes[0]
    ) {
      return this.updateBoxInFocus(this.props.data.clue_set[focusedClue].boxes[0]);
    }
  };

  // change the activeClue based on a user focusing (clicking) on a Clue
    // in the ClueList
  updateActiveClue(clueName) {
    this.updateBoxInFocusFromClue(clueName);
      return this.setState({
        activeClue: clueName
      });
  };

  // change the activeClue based on a Box in the grid receiving focus,
    // checking each clue matching the solvingDirection for the Box's 
    // inclusion in that clue's boxes array
  updateActiveClueFromBox(focusedBox) {
    Object.keys(this.props.data.clue_set).forEach((clueName) => {
      if (
        this.props.data.clue_set[clueName].direction === this.state.solvingDirection &&
        this.props.data.clue_set[clueName].boxes.includes(focusedBox)
      ) {
        return this.setState({
          activeClue: clueName
        });
      }
    });
  };

  // change the highlightedBoxes array based on a Box receiving focus,
    // checking each clue matching the solvingDirection for the Box's 
    // inclusion in that clue's boxes array
  highlightBoxes(focusedBox) {
    Object.keys(this.props.data.clue_set).forEach((clueName) => {
      if (
        this.props.data.clue_set[clueName].direction === this.state.solvingDirection &&
        this.props.data.clue_set[clueName].boxes.includes(focusedBox)
        // && this.state.highlightedBoxes.toString() != this.props.data.clue_set[clueName].boxes.toString()
      ) {
        return this.setState({
          highlightedBoxes: this.props.data.clue_set[clueName].boxes
        });
      }
    });
  };

  render() {
    return (
      <section className="wordcross-board-with-clues">
        <section className="wordcross-current-clue-and-grid">
          {this.props.data && 
          <CurrentClue 
            activeClue={this.props.data.clue_set[this.state.activeClue]}
          />
          }
          {/* this section could/should be a separate component */}
          <section className="wordcross-grid">
            {this.state.board && this.state.board.map((row, rowIdx) => {
              return (
                <div 
                  key={"row" + rowIdx.toString()}
                  className="wordcross-row"
                >
                  {row.map((boxValue, boxIdx) => {
                    const position = [rowIdx, boxIdx];
                    const label = this.props.data.label_set[rowIdx][boxIdx];
                    const boxName = position.toString();
                    return (
                      <Box
                        key={boxName}
                        boxName={boxName}
                        isBlackBox={boxValue === "#"}
                        position={position}
                        isHighlighted={this.state.highlightedBoxes.includes(boxName)}
                        isInFocus={boxName === this.state.boxInFocus}
                        updateBoard={this.updateBoard}
                        updateBoxInFocus={this.updateBoxInFocus}
                        changeSolvingDirection={this.changeSolvingDirection}
                        label={label}
                        value={boxValue}
                      />  
                    )
                  })}
                </div>
              )
            })}
          </section>
        </section>
        <section className="wordcross-clue-lists">
          {this.props.data && <ClueList 
            clueSet={this.props.data.clue_set}
            activeClue={this.state.activeClue}
            updateActiveClue={this.updateActiveClue}
          />}
        </section>
      </section>
    )
  }
}

export default WordcrossBoard;