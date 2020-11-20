import React from 'react';
import WordcrossHeader from '../wordcross_header/wordcross_header';
import CurrentClue from './current_clue/current_clue';
import ClueList from './clue_list/clue_list'
import Grid from './grid/grid';

class WordcrossBoard extends React.Component {
  constructor(props) {
    super(props);
    // props: {
      // author: eg. "Eugene T. Maleska"
      // clueSet: eg. {
        // a1: {
          // boxes: ['0,2','0,3','0,4']
          // clue: "Clue string",
          // direction: "across"/"down",
          // number: 1
        // },
        // a2: {...}
      // },
      // displayedDate: eg. "Wednesday, Nov. 18, 2020"
      // labelSet: eg. [
        // ["#","#","1","2","3"],
        // ...
        // ["7"," "," ","#","#"]
      // ],
      // solution: eg. [
        // ["#","#","T","W","O"],
        // ...
        // ["I","N","S","#","#"]
      // ],
      // solved: eg. false,
      // solvingState: eg. [
        // ["#","#","T","",""],
        // ...
        // ["","","S","#","#"]
      // ],
      // timer: eg. 0,
      // displaySolvedModal(),
      // displayKeepTryingModal()
    // }

    this.state = {
      // set by default for when a wordcross first mounts
      boardExists: false,
      solvingDirection: "across",
      activeClue: "a1",
      highlightedBoxes: [],

      // when this.props.solvingState is available, the following are set by
        // componentDidUpdate():
      // board:      // set to the solvingState by createBoard();
      // boxInFocus: eg '0,3' // set to a1.boxes[0] by updateBoxInFocusFromClue()
      
    };
    
    // this.boxesInCol: // (soon to be) used to style box size relative to grid dimensions,
    // this.boxesInRow: // (soon to be) used to style box size relative to grid dimensions,
  
    this.createBoard = this.createBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.changeSolvingDirection = this.changeSolvingDirection.bind(this);
    this.updateBoxInFocus = this.updateBoxInFocus.bind(this);
    this.updateBoxInFocusFromClue = this.updateBoxInFocusFromClue.bind(this);
    this.updateActiveClue = this.updateActiveClue.bind(this);
    this.updateActiveClueFromBox = this.updateActiveClueFromBox.bind(this);
    this.highlightBoxes = this.highlightBoxes.bind(this);
    this.findNextEmptyInput = this.findNextEmptyInput.bind(this);
    this.findNextInputAcross = this.findNextInputAcross.bind(this);
    this.findNextInputDown = this.findNextInputDown.bind(this);
    this.checkForEmptyBox = this.checkForEmptyBox.bind(this);
    this.isCompleted = this.isCompleted.bind(this);
    this.isCorrect = this.isCorrect.bind(this);
  };

  componentDidUpdate(prevProps, prevState) {
        if (this.props.solution) {
      // calculate grid size, to scale grid accordingly (not implemented yet)
      if (!this.boxesInRow) {
                this.boxesInRow = this.props.solution[0].length;
        return this.boxesInCol = this.props.solution.length;
      }
      // update the box in focus to the first input of the first across clue,
        // then create the grid based on the solving_state received from props
      if (!this.state.boardExists) {
                return this.createBoard();
      }

      if (this.state.solvingDirection != prevState.solvingDirection) {
        return this.highlightBoxes(this.state.boxInFocus)
      }
    }
  };

  // creates the board in state based on solving_state
    // also sets boxInFocus to the first box of the a1 clue (set by default in
    // constructor)
  createBoard() {
    this.updateBoxInFocusFromClue(this.state.activeClue);
        return this.setState({
      board: Object.assign([], this.props.solvingState),
      boardExists: true,
      solved: this.props.solved
    });
  };

  // changes the board in state to reflect user input
  updateBoard(position, newValue) {
    const updatedBoard = Object.assign([], this.state.board);
    const row = position[0];
    const col = position[1];
    updatedBoard[row][col] = newValue;
    // NOTE !!! a method determining which input to focus on next
      //  should probably be called here
    return this.setState({
      board: updatedBoard
    });
  };

  resetBoard() {
    const newBoard = Object.assign([], this.state.board);
    newBoard.map((row, rowIdx) => {
      row.map((box, colIdx) => {
        if (box != "#") {
          newBoard[rowIdx][colIdx] = ""
        }
      });
    });
    this.setState({
      board: newBoard
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
    Object.keys(this.props.clueSet).forEach((clueName) => {
      if (
        this.props.clueSet[clueName].direction === newDirection &&
        this.props.clueSet[clueName].boxes.includes(box)
      ) {
        this.setState({
          activeClue: clueName
        });
      }
    });
    return this.setState({
      solvingDirection: newDirection,
      boxInFocus: box
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
  updateBoxInFocusFromClue(clueName) {
    if (
      this.state.boxInFocus != this.props.clueSet[clueName].boxes[0]
    ) {
      return this.updateBoxInFocus(this.props.clueSet[clueName].boxes[0]);
    }
  };

  // change the activeClue based on a user focusing (clicking) on a Clue
    // in the ClueList
  updateActiveClue(clueName, direction) {
    this.updateBoxInFocusFromClue(clueName);
    if (this.state.activeClue != clueName || this.state.solvingDirection != direction) {
      return this.setState({
        activeClue: clueName,
        solvingDirection: direction
      });
    }
  };

  // change the activeClue based on a Box in the grid receiving focus,
    // checking each clue matching the solvingDirection for the Box's 
    // inclusion in that clue's boxes array
  updateActiveClueFromBox(box) {
    Object.keys(this.props.clueSet).forEach((clueName) => {
      if (
        this.props.clueSet[clueName].direction === this.state.solvingDirection &&
        this.props.clueSet[clueName].boxes.includes(box)
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
    Object.keys(this.props.clueSet).forEach((clueName) => {
      if (
        this.props.clueSet[clueName].direction === this.state.solvingDirection &&
        this.props.clueSet[clueName].boxes.includes(focusedBox)
      ) {
        return this.setState({
          highlightedBoxes: this.props.clueSet[clueName].boxes
        });
      }
    });
  };

  // the next several methods are logic for focusing on the next available input
    // (in that clue, or the next clue of the same direction, or the first 
    // clue in the opposite direction) and for checking if the wordcross has
    // been completed, and if so, correctly.

  findNextEmptyInput(position) {
    
    let row = position[0];
    let col = position[1];
    if (this.state.solvingDirection === "across") {
      
      return this.findNextInputAcross(row, col);
    } else if (this.state.solvingDirection === "down") {
      
      return this.findNextInputDown(row, col);
    }
  }

  // do the trick where you modular the # of elements
  findNextInputAcross(row, col) {
    
    let nextRow = row
    let nextCol = col + 1
    if (nextCol > this.boxesInCol - 1) {
      nextRow ++
      nextCol = 0
    }
    if (nextRow > this.boxesInRow - 1) {
      
      return this.findNextInputDown(0, 0);
    } else {
      
      return this.checkForEmptyBox(nextRow, nextCol, "a");
    }
  };

  findNextInputDown(row, col) {
    
    let nextRow = row + 1
    let nextCol = col
    if (nextRow > this.boxesInRow - 1) {
      nextRow = 0
      nextCol ++
    }
    if (nextCol > this.boxesInCol - 1) {
      
      return this.findNextInputAcross(0, 0);
    } else {
      
      return this.checkForEmptyBox(nextRow, nextCol, "d");
    }
  };

  checkForEmptyBox(row, col, direction) {
    if (this.isCompleted()) {
      if (this.isCorrect()) {
        // disable all inputs
        return this.props.displaySolvedModal();
      } else {
        return this.props.displayKeepTryingModal();
      }  
    } else if (this.state.board[row][col] === "") {
      
      return this.setState({boxInFocus: `${row},${col}`});
    } else if (direction === "a") {
      
      return this.findNextInputAcross(row, col);
    } else if (direction === "d") {
      
      return this.findNextInputDown(row, col);
    }
  };

  isCompleted() {
    let flag = true;
    for (let i = 0; i < this.boxesInCol; i++) {
      if (this.props.solvingState[i].includes("")) {   
        flag = false;
      }
    }
    return flag;
  };

  isCorrect() {
    let flag = true;
    for (let r = 0; r < this.boxesInCol; r++) {
      for (let c = 0; c < this.boxesInRow; c++) {
        if (this.props.solvingState[r][c] != this.props.solution[r][c]) {
          flag = false;
        }
      }
    }
    return flag;
  };
  
  render() {
        return (
      <section className="wordcross-header-board-and-clues">
        <WordcrossHeader 
          displayedDate={this.props.displayedDate}
          author={this.props.author}
          resetBoard={this.resetBoard}
        />
        <section className="wordcross-board-with-clues">
          <section className="wordcross-current-clue-and-grid">
            {this.props.clueSet && 
            <CurrentClue 
              activeClue={this.props.clueSet[this.state.activeClue]}
            />}
            {this.state.board && 
            <Grid
              board={this.state.board}
              labelSet={this.props.labelSet}
              highlightedBoxes={this.state.highlightedBoxes}
              boxInFocus={this.state.boxInFocus}
              createBoard={this.createBoard}
              updateBoard={this.updateBoard}
              updateBoxInFocus={this.updateBoxInFocus}
              changeSolvingDirection={this.changeSolvingDirection}
              findNextEmptyInput={this.findNextEmptyInput}
            />}
          </section>
          <section className="wordcross-clue-lists">
            {this.props.clueSet && <ClueList 
              clueSet={this.props.clueSet}
              activeBox={this.state.boxInFocus}
              solvingDirection={this.state.solvingDirection}
              updateActiveClue={this.updateActiveClue}
            />}
          </section>
        </section>
      </section>
    )
  }
}

export default WordcrossBoard;