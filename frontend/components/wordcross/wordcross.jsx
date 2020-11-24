import React from 'react';
import { withRouter } from 'react-router-dom';
import Advert from '../body/advert';
import WordcrossHeader from './wordcross_header/wordcross_header';
import CurrentClue from './current_clue/current_clue';
import Grid from './grid/grid';
import ClueList from './clue_list/clue_list';


class Wordcross extends React.Component {
  constructor(props){

    super(props);
    // receives as props: 
      // location.state.referringComponent
      // userId, 
      // wordcrossDate, 
      // wordcrossType,
      // fetchWordcross, 
      // updateWordcross,
      // (after fetchWordcross():
        // wordcrossDataSet

    this.state = {
      activeClue: "a1",
      board: null,
      boardExists: false,
      boxInFocus: null,
      elapsedHours: 0,
      elapsedMinutes: 0,
      elapsedSeconds: 0,
      highlightedBoxes: [],
      isTimerRunning: false,
      modalType: 'ready',
      solved: false,
      solvingDirection: "across",
    };

    this.boxesInRow = null;
    this.boxesInCol = null;
    this.boxRatio = null;
    this.wordcrossCategory = null;
    this.referringComponent = null;
    this.today = new Date(); // for determining whether the user completed the
    // puzzle on the day of (gold star) or afterwards (blue star)
    this.displayedDate = null;
    // Display the ACTUAL DATE of the wordcross in the db if the user
      // navigates here from the archive page. Display the current date if 
      // the user navigates here from the dashboard.
    this.initialTimer = [];

    this.calculateDisplayedDate = this.calculateDisplayedDate.bind(this);
    // this.calculateGridDimensions = this.calculateGridDimensions.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
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
    this.isSolved = this.isSolved.bind(this);
    this.processSolvedWordcross = this.processSolvedWordcross.bind(this);
    this.disableBoxInputs = this.disableBoxInputs.bind(this);
    this.enableBoxInputs = this.enableBoxInputs.bind(this);

    this.hideModal = this.hideModal.bind(this);
    this.displayPausedModal = this.displayPausedModal.bind(this);
    this.displaySolvedModal = this.displaySolvedModal.bind(this);
    this.displayKeepTryingModal = this.displayKeepTryingModal.bind(this);
    this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
    this.handlePauseButtonClick = this.handlePauseButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);

    this.pauseTimer = this.pauseTimer.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this);
    this.countUp = this.countUp.bind(this);
    this.incrementSeconds = this.incrementSeconds.bind(this);
    this.incrementMinutes = this.incrementMinutes.bind(this);
    this.incrementHours = this.incrementHours.bind(this);
    this.calculateTime = this.calculateTime.bind(this);

    this.saveWordcross = this.saveWordcross.bind(this);
  };

  componentDidMount() {
    this.props.fetchWordcross(
      this.props.userId,
      this.props.wordcrossDate
    );
    return setInterval(this.countUp, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.countUp, 1000);
    return this.saveWordcross();
  };

  componentDidUpdate(prevProps, prevState) {
    if (!this.referringComponent) {
      if (
        this.props.location.state && 
        this.referringComponent != 
        this.props.location.state.referringComponent
        ){
          this.referringComponent = this.props.location.state.referringComponent;  
      } else {
        this.referringComponent = 'refresh';
      }
    } 

    if (
      this.referringComponent && 
      this.props.wordcrossDate && 
      !this.state.displayedDate
      )
    { this.calculateDisplayedDate(); }

    if (this.props.wordcrossDataSet) {
      // calculate grid size, to scale grid accordingly (not implemented yet)
      if (!this.boxesInRow) {
        this.calculateGridDimensions();
      }
      // update the box in focus to the first input of the first across clue,
        // then create the grid based on the solving_state received from props
      if (!this.state.boardExists) {
        this.createBoard();
      }
      
      if (!this.initialTimer.length) {
        this.initialTimer = this.props.wordcrossDataSet.timer;
        const [h, m, s] = this.initialTimer;
        this.setState({
          elapsedHours: parseInt(h),
          elapsedMinutes: parseInt(m),
          elapsedSeconds: parseInt(s),
          solved: this.props.wordcrossDataSet.solved
        });
      }
    }

    if (this.state.solvingDirection != prevState.solvingDirection) {
      this.highlightBoxes(this.state.boxInFocus)
    }
  };

  calculateDisplayedDate() {
    let date;
    if (this.referringComponent != 'archive') {
      date = this.today;
    } else {
      date = new Date( Date.parse(this.props.wordcrossDate) );
    }
    const dateToDisplay = date.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    );
    return this.displayedDate = dateToDisplay;
  };

  calculateGridDimensions() {
    this.boxesInRow = this.props.wordcrossDataSet.solution[0].length;
    this.boxesInCol = this.props.wordcrossDataSet.solution.length;
//     const longerSide = this.boxesInRow >= this.boxesInCol ?
//       this.boxesInRow : this.boxesInCol;
//     const gridWidth = document.getElementsByName("wordcross-grid").clientWidth;
//     const boxSizeRatio = () => {
//       const boxSize =  (gridWidth - 4) / longerSide;
//       return boxSize.toString() + 'px'
//     }
//     this.boxRatio = boxSizeRatio();
  };


  createBoard() {
    // creates the board in state based on solving_state
      // also sets boxInFocus to the first box of the a1 clue (set by default in
      // constructor)
    this.updateBoxInFocusFromClue(this.state.activeClue);
    return this.setState({
      board: Object.assign([], this.props.wordcrossDataSet.solving_state),
      boardExists: true,
      solved: this.props.wordcrossDataSet.solved
    });
  };

  // changes the board in state to reflect user input
  updateBoard(position, newValue) {
    const updatedBoard = Object.assign([], this.state.board);
    const row = position[0];
    const col = position[1];
    updatedBoard[row][col] = newValue;
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
    Object.keys(this.props.wordcrossDataSet.clue_set).forEach((clueName) => {
      if (
        this.props.wordcrossDataSet.clue_set[clueName].direction === newDirection &&
        this.props.wordcrossDataSet.clue_set[clueName].boxes.includes(box)
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
    // a Box in the Grid
  updateBoxInFocus(newBox) {
    this.highlightBoxes(newBox); 
    this.updateActiveClueFromBox(newBox);
    return this.setState({
      boxInFocus: newBox
    });
  };

  // change the boxInFocus in state based on a user focusing (clicking) on 
  // a Clue in the ClueList 
  updateBoxInFocusFromClue(clueName) {
    if (
      this.state.boxInFocus != 
      this.props.wordcrossDataSet.clue_set[clueName].boxes[0]
    ) {
      return this.updateBoxInFocus(
        this.props.wordcrossDataSet.clue_set[clueName].boxes[0]
      );
    }
  };

  // change the activeClue based on a user focusing (clicking) on a Clue
    // in the ClueList
  updateActiveClue(clueName, direction) {
    this.updateBoxInFocusFromClue(clueName);
    if (
      this.state.activeClue != clueName || 
      this.state.solvingDirection != direction
      ) {
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
    Object.keys(this.props.wordcrossDataSet.clue_set).forEach((clueName) => {
      if (
        this.props.wordcrossDataSet.clue_set[clueName].direction === 
        this.state.solvingDirection &&
        this.props.wordcrossDataSet.clue_set[clueName].boxes.includes(box)
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
    Object.keys(this.props.wordcrossDataSet.clue_set).forEach((clueName) => {
      if (
        this.props.wordcrossDataSet.clue_set[clueName].direction === 
        this.state.solvingDirection &&
        this.props.wordcrossDataSet.clue_set[clueName].boxes.includes(focusedBox)
      ) {
        return this.setState({
          highlightedBoxes: this.props.wordcrossDataSet.clue_set[clueName].boxes
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
      if (this.isSolved()) {
        this.processSolvedWordcross();
        return this.displaySolvedModal();
      } else {
        return this.displayKeepTryingModal();
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
      if (this.props.wordcrossDataSet.solving_state[i].includes("")) {   
        flag = false;
      }
    }
    return flag;
  };

  isSolved() {
    let flag = true;
    for (let r = 0; r < this.boxesInCol; r++) {
      for (let c = 0; c < this.boxesInRow; c++) {
        if (
          this.props.wordcrossDataSet.solving_state[r][c] != 
          this.props.wordcrossDataSet.solution[r][c]
          ) {
          flag = false;
        }
      }
    }
    return flag;
  };

  processSolvedWordcross() {
    clearInterval(this.countUp, 1000);
    this.disableBoxInputs();
    this.setState({
      solved: true,
      isTimerRunning:false
    });
    this.saveWordcross();
  };

  disableBoxInputs() {
    document.getElementsByClassName("input-box").disabled = true;
  };

  enableBoxInputs() {
    document.getElementsByClassName("input-box").disabled = false;
  };


// the following methods handle Modal display & UI
  hideModal() {
    this.setState({ modalType: 'none' });
  };

  displayPausedModal() {
    this.setState({ modalType: 'paused'})
  };

  displaySolvedModal() {
    // NEEDED !!! Play Sound !!!
    this.setState({ modalType: 'solved'});
  };

  displayKeepTryingModal() {
    this.setState({ modalType: 'keepTrying'})
  };

  handleModalButtonClick() {
    if (
      this.state.solved ||
      this.state.modalType === 'solved'
      ) {
      return this.hideModal();
    } else {
      return this.resumeTimer();
    }
  };


  // these methods handle Toolbar Button interaction
  handlePauseButtonClick() {
    if (this.state.isTimerRunning) {
      return this.pauseTimer();
    } else {
      return this.resumeTimer();
    }
  };

  handleResetButtonClick() {
    // change Icon ????
    const newBoard = Object.assign([], this.state.board);
    newBoard.map((row, rowIdx) => {
      row.map((box, colIdx) => {
        if (box != "#") {
          newBoard[rowIdx][colIdx] = "";
        }
      });
    });
    return this.setState({ board: newBoard });
  };


// timer logic
  pauseTimer() {
    this.setState( {
      isTimerRunning: false
    });
    return this.displayPausedModal();
  };

  resumeTimer() {
    this.setState({
      isTimerRunning: true
    });
    return this.hideModal();
  };

  countUp() {
    if (this.state.isTimerRunning) {
      this.incrementSeconds();
      if (this.state.elapsedSeconds > 59) {
        this.setState({ elapsedSeconds: 0 });
        this.incrementMinutes();
        if (this.state.elapsedMinutes > 59) {
          this.setState({ elapsedMinutes: 0 });
          this.incrementHours();
        }
      }
    }
  };

  incrementSeconds() {
    return this.setState(({ elapsedSeconds }) => ({
      elapsedSeconds: elapsedSeconds + 1 
    }));
  };

  incrementMinutes() {
    return this.setState(({ elapsedMinutes }) => ({
      elapsedMinutes: elapsedMinutes + 1 
    }));
  };

  incrementHours() {
    return this.setState(({ elapsedHours }) => ({
      elapsedHours: elapsedHours + 1 
    }));
  };

  calculateTime() {
    const h = this.state.elapsedHours > 0 ?
      this.state.elapsedHours.toString() + ":" :
      "";
    const m = this.state.elapsedHours > 0 && this.state.elapsedMinutes < 10 ?
      "0" + this.state.elapsedMinutes.toString() :
      this.state.elapsedMinutes.toString();
    const s = this.state.elapsedSeconds < 10 ?
      "0" + this.state.elapsedSeconds.toString() :
      this.state.elapsedSeconds.toString();
    return h + m + ":" + s;
  }


  saveWordcross() {
    const newTime = [
      this.state.elapsedHours,
      this.state.elapsedMinutes,
      this.state.elapsedSeconds
    ]
    let newMicro = {
        id: this.props.wordcrossDataSet.id,
        user_id: this.props.wordcrossDataSet.user_id,
        micro_id: this.props.wordcrossDataSet.micro_id,
        solved: this.state.solved,
        solving_state: this.state.board,
        timer: newTime,
        wordcross_date: this.props.wordcrossDataSet.wordcross_date
    };
    debugger
    return this.props.updateWordcross(
      newMicro
    );
  };

  render(){
    return (
      <div className='wordcross-container'>
        {this.state.boardExists && <div className='banner-buffer'></div>}
        {this.state.boardExists && <Advert isSubscriber='subscriber' />}
        {this.state.boardExists && 
        <div className="wordcross-board-with-header">
          <div className="wordcross-board-aspect-ratio-wrapper">
            <WordcrossHeader 
              displayedDate={this.displayedDate}
              author={this.props.wordcrossDataSet.author}
              modalType={this.state.modalType} 
              wordcrossCategory={this.state.wordcrossCategory}
              handleModalButtonClick={this.handleModalButtonClick}
              handlePauseButtonClick={this.handlePauseButtonClick}
              handleResetButtonClick={this.handleResetButtonClick}
              calculateTime={this.calculateTime}
              elapsedHours={this.state.elapsedHours}
              elapsedMinutes={this.state.elapsedMinutes}
              elapsedSeconds={this.state.elapsedSeconds}
              isTimerRunning={this.state.isTimerRunning}
            />
            <div className="wordcross-board">
              <div className="wordcross-board-column">
                {/* {this.state.boardExists &&  */}
                <CurrentClue 
                  activeClue={this.props.wordcrossDataSet.clue_set[this.state.activeClue]}
                />
                {/* {this.state.boardExists &&  */}
                <Grid
                  board={this.state.board}
                  ratio={this.boxRatio}
                  labelSet={this.props.wordcrossDataSet.label_set}
                  highlightedBoxes={this.state.highlightedBoxes}
                  boxInFocus={this.state.boxInFocus}
                  updateBoard={this.updateBoard}
                  updateBoxInFocus={this.updateBoxInFocus}
                  changeSolvingDirection={this.changeSolvingDirection}
                  findNextEmptyInput={this.findNextEmptyInput}
                />
              </div>
              <div className="wordcross-board-column clue-lists-column">
                {/* {this.state.boardExists &&  */}
                <ClueList 
                  activeClue={this.state.activeClue}
                  clueSet={this.props.wordcrossDataSet.clue_set}
                  activeBox={this.state.boxInFocus}
                  solvingDirection={this.state.solvingDirection}
                  updateActiveClue={this.updateActiveClue}
              />
              
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  };
;}

export default withRouter(Wordcross);