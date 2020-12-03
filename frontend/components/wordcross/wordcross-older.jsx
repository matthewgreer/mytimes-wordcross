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
    /* 
      If reached normally, from dashboard:
        this.props = {
          fetchWordcross: fn, 
          updateWordcross: fn,
          location.state.referringComponent: eg. 'dashboard',
          location.state.today: eg. Date object: 
            Thu Nov 26 2020 13:02:15 GMT-0500 (Eastern Standard Time)
          location.state.wordcrossCategory: eg. 'Tuesday',
          userId: eg. 7, 
          wordcrossDate: eg. '2020-11-23', 
          wordcrossType: eg. 'Daily' || 'Micro',
          wordcrossDataSet: eg. {
            author: eg. 'Joel Fagliano',
            clue_set: eg. {
              a1: {
                boxes: ['0,2', '0,3', '0,4'],
                clue: 'Who can get these nuts?',
                direction: 'across',
                name: 'a1',
                number: 1
              },
              a2: ...etc.
            },
            id: eg. 9,
            label_set: eg. [
              ['#', '#', '1', '2', '3'],
              ['#', '4', ' ', ' ', ' '],
              [] ...etc.
            ],
            micro_id: eg. 12,
            solution: eg. [
              ['#', '#', 'Y', 'O', 'U'],
              [] ...etc.
            ],
            solved: eg. false,
            solving_state: eg. [
              ['#', '#', 'Y', ' ', ' '],
              [] ...etc.
            ],
            timer: eg. ['0', '1', '34'],
            user_id: eg. 3,
            wordcross_date: '2020-11-23T00:00.000Z'
          }
        }

      HOWEVER, if the user refreshes the wordcross page:
        this.props = {
          fetchWordcross: fn, 
          updateWordcross: fn,
          location.state: undefined,
          wordcrossDate: eg. "2020-10-21",
          wordcrossType: eg. "Micro" || "Daily",
          wordcrossDataSet: undefined
        }

      Then this.fetchWordcross needs to be called in componentDidMount,
        and when that async request returns:
        this.props = {
          fetchWordcross: fn, 
          updateWordcross: fn,
          location.state: undefined,
          wordcrossDate: eg. "2020-10-21",
          wordcrossType: eg. "Micro" || "Daily",
          wordcrossDataSet: eg. {
            author: eg. 'Joel Fagliano',
            clue_set: eg. {
              a1: {
                boxes: ['0,2', '0,3', '0,4'],
                clue: 'Who can get these nuts?',
                direction: 'across',
                name: 'a1',
                number: 1
              },
              a2: ...etc.
            etc as above...
            }
          }
        }
    */
    
    this.state = {
      activeClue: 'a1',
      board: null,
      boxInFocus: '0,0',
      elapsedHours: 0,
      elapsedMinutes: 0,
      elapsedSeconds: 0,
      highlightedBoxes: [],
      isTimerRunning: false,
      modalType: 'ready',
      solvingDirection: 'across',
    };

    this.isWordcrossLoaded = false;
    this.boxesInRow = null;
    this.boxesInCol = null;
    this.boxRatio = null;
    this.wordcrossCategory = null;
    this.referringComponent = null;
    this.acrossClues = [];
    this.downClues = [];
    this.solved = false;
    this.initialTimer = [];

    this.today = new Date(); // for determining whether the user completed the
      // puzzle on the day of (gold star) or afterwards (blue star).
    this.displayedDate = null; // Display the ACTUAL DATE of the wordcross 
      // in the db if the user navigates here from the archive page. Display
      // the current date if the user navigates here from the dashboard.

    // methods for setting up the wordcross
    this.initializeWordcross = this.initializeWordcross.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.sortClues = this.sortClues.bind(this);
    this.setDisplayedDateAndCategory = this.setDisplayedDateAndCategory.bind(this);
    this.calculateGridDimensions = this.calculateGridDimensions.bind(this);
    this.setInitialTimer = this.setInitialTimer.bind(this);
    
    //methods for updating gameplay based on user input
    this.updateBoard = this.updateBoard.bind(this);
    this.changeSolvingDirection = this.changeSolvingDirection.bind(this);
    this.updateBoxInFocus = this.updateBoxInFocus.bind(this);
    this.updateBoxInFocusFromClue = this.updateBoxInFocusFromClue.bind(this);
    this.updateActiveClue = this.updateActiveClue.bind(this);
    this.updateActiveClueFromBox = this.updateActiveClueFromBox.bind(this);
    this.highlightBoxes = this.highlightBoxes.bind(this);
    this.findNextClue = this.findNextClue.bind(this);
    this.findNextEmptyInput = this.findNextEmptyInput.bind(this);
    this.findNextInputAcross = this.findNextInputAcross.bind(this);
    this.findNextInputDown = this.findNextInputDown.bind(this);
    this.checkForEmptyBox = this.checkForEmptyBox.bind(this);
    this.checkForEmptyBoxInSameClue = this.checkForEmptyBoxInSameClue.bind(this);
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
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this);
    this.countUp = this.countUp.bind(this);
    this.incrementSeconds = this.incrementSeconds.bind(this);
    this.incrementMinutes = this.incrementMinutes.bind(this);
    this.incrementHours = this.incrementHours.bind(this);
    this.calculateTime = this.calculateTime.bind(this);
    
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    
    this.saveWordcross = this.saveWordcross.bind(this);
  };

  componentDidMount() {
    if (!this.props.wordcrossDataSet){
      return this.props.fetchWordcross(
        this.props.userId,
        this.props.wordcrossDate
      );
    } else {
      return this.createBoard();
    }
  };

  componentWillUnmount() {
    clearInterval(this.countUp, 1000);
    return this.saveWordcross();
  };

  componentDidUpdate(prevProps, prevState) {
    if (!this.isWordcrossLoaded && this.props.wordcrossDataSet) {
      if (!this.state.board) {
        return this.createBoard();
      } else {
        return this.initializeWordcross();
      }
    }

    if (this.isWordcrossLoaded && 
        this.state.solvingDirection != prevState.solvingDirection) {
      this.highlightBoxes(this.state.boxInFocus)
    }
  };

  createBoard() {
    // creates the board in state based on solving_state
    this.updateBoxInFocusFromClue(this.state.activeClue);
    this.solved = this.props.wordcrossDataSet.solved;
    return this.setState({
      board: Object.assign([], this.props.wordcrossDataSet.solving_state),
    });
  };

  initializeWordcross() {
    this.setInitialTimer();
    this.calculateGridDimensions();
    this.sortClues();
    if (this.props.location.state){
    this.referringComponent = this.props.location.state.referringComponent;
    this.wordcrossCategory = this.props.location.state.wordcrossCategory;
    } else {
      this.referringComponent = 'refresh';
    }
    this.setDisplayedDateAndCategory();
    this.findNextEmptyInput([0,0]);
    this.isWordcrossLoaded = true;
    return setInterval(this.countUp, 1000);
  };

  sortClues() {
    Object.keys(this.props.wordcrossDataSet.clueSet).forEach(clueName => {
      const clueProperties = this.props.wordcrossDataSet.clueSet[clueName];
      clueProperties.name = clueName;
      clueProperties.direction === 'across' ? 
        this.acrossClues.push(clueProperties) :
        this.downClues.push(clueProperties);
    });

    this.acrossClues.sort((a, b) => { a.number - b.number });
    this.downClues.sort((a, b) => { a.number - b.number });
  };

  setDisplayedDateAndCategory() {
    let date;
    if (this.referringComponent === 'archive') {
      date = new Date( Date.parse(this.props.wordcrossDate) );
    } else {
      date = this.today;
    }
    const dateToDisplay = date.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    );
    if (!this.wordcrossCategory) {
      this.wordcrossCategory = this.props.wordcrossType === 'Daily' ?
        date.toLocaleDateString(undefined, {weekday: 'long'}) : 'Micro'
    }
    return this.displayedDate = dateToDisplay;
  };

  setInitialTimer() {
    this.initialTimer = this.props.wordcrossDataSet.timer;
    const [h, m, s] = this.initialTimer;
    this.setState({
      elapsedHours: parseInt(h),
      elapsedMinutes: parseInt(m),
      elapsedSeconds: parseInt(s),
    });
  };

  calculateGridDimensions() {
    this.boxesInRow = this.props.wordcrossDataSet.solution[0].length;
    this.boxesInCol = this.props.wordcrossDataSet.solution.length;
//     const longerSide = this.boxesInRow >= this.boxesInCol ?
//       this.boxesInRow : this.boxesInCol;
//     const gridWidth = document.getElementById("wordcross-grid").clientWidth;
//     const boxSizeRatio = () => {
//       const boxSize =  (gridWidth - 4) / longerSide;
//       return boxSize.toString() + 'px'
//     }
//     this.boxRatio = boxSizeRatio();
  };



  updateBoard(position, newValue) {
    // takes the value that the user types in the boxInFocus's input, 
      // and inserts it in the corresponding position in the board
    const updatedBoard = Object.assign([], this.state.board);
    const row = position[0];
    const col = position[1];
    updatedBoard[row][col] = newValue;
    return this.setState({
      board: updatedBoard
    });
  };

  changeSolvingDirection(direction, box) {
    // changes the direction in which the user is currently solving the 
      // wordcross and updates the activeClue
      // now that the clue arrays live in this component, shouldn't this be
      // SO much simpler? Like switch the solving direction, iterate through
      // that direction's array and set activeClue to be the one that includes
      // the boxInFocus?
    
    let newDirection = (this.state.solvingDirection === "across" ? 
      "down" : "across");

      // THIS CODE IS PROBABLY OBSOLETE!
      // let newDirection;
      // if (box != this.state.boxInFocus) {
      //   newDirection = this.state.solvingDirection;
      // } else if (direction === "switch") {      // not sure if this is still relevant
      //   newDirection = this.state.solvingDirection === "across" ?
      //    "down" : "across";
      // } else {
      //   newDirection = direction;
      // }
      // Object.keys(this.props.wordcrossDataSet.clue_set).forEach((clueName) => {
      //   if (
      //     this.props.wordcrossDataSet.clue_set[clueName].direction === newDirection &&
      //     this.props.wordcrossDataSet.clue_set[clueName].boxes.includes(box)
      //   ) {
      //     this.setState({
      //       activeClue: clueName
      //     });
      //   }
      // });
    return this.setState({
      solvingDirection: newDirection,
    });
  };

  updateBoxInFocus(newBox) {
    // changes the boxInFocus in state based on a user focusing (clicking) on
      // a Box in the Grid
    this.highlightBoxes(newBox); 
    this.updateActiveClueFromBox(newBox);
    return this.setState({
      boxInFocus: newBox
    });
  };

  updateBoxInFocusFromClue(clueName) {
    // changes the boxInFocus in state based on a user focusing (clicking) on 
      // a Clue in the ClueList 
    if (
      this.state.boxInFocus != 
      this.props.wordcrossDataSet.clue_set[clueName].boxes[0]
    ) {
      return this.updateBoxInFocus(
        this.props.wordcrossDataSet.clue_set[clueName].boxes[0]
      );
    }
  };

  updateActiveClue(clueName, direction) {
    // changes the activeClue based on a user focusing (clicking) on a Clue
      // in the ClueList
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

  updateActiveClueFromBox(box) {
    // changes the activeClue based on a Box in the grid receiving focus,
      // checking each clue matching the solvingDirection for the Box's 
      // inclusion in that clue's boxes array
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

  highlightBoxes(focusedBox) {
    // change the highlightedBoxes array based on a Box receiving focus,
      // checking each clue matching the solvingDirection for the Box's 
      // inclusion in that clue's boxes array
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


  findNextClue(position) {
    // If unsolved, switches the currentClue to the next clue in the current
      // solvingDirection with an unfilled Box.
      // If solved, switches the currentClue to the next clue in the current
      // solvingDirection, and updates the boxInFocus to the first Box in that
      // clue's boxes array.
    let row = position[0];
    let col = position[1];
    let nextFirstBox;
    if (this.state.solvingDirection === "across") {
      nextFirstBox = `${row},${col}`
    }
  };

  // the next several methods are logic for checking whether the wordcross 
    // has been completed, and if so, whether it has been solved correctly, 
    // and if not, changing the boxInFocus to the next available input (in 
    // that clue, or the next clue of the same direction, or the first clue 
    // in the opposite direction, and so on) .

  

  findNextEmptyInput(position) {
    let row = position[0];
    let col = position[1];
    if (this.state.solvingDirection === "across") {
      return this.findNextInputAcross(row, col);
    } else if (this.state.solvingDirection === "down") {
      return this.findNextInputDown(row, col);
    }
  };


  findNextInputAcross(row, col) {
    // first check current clue for an empty box -- not yet implemented
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
    // first check current clue for an empty box -- not yet implemented
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
      } else {
        return this.displayKeepTryingModal();
      }  
    } else if (this.state.board[row][col] === "") {
      this.updateActiveClueFromBox(`${row},${col}`);
      return this.setState({boxInFocus: `${row},${col}`});
    } else if (direction === "a") {
      return this.findNextInputAcross(row, col);
    } else if (direction === "d") {
      return this.findNextInputDown(row, col);
    }
  };

  checkForEmptyBoxInSameClue() {
    if (!this.solved) {
      
    }
  };

  isCompleted() {
    let flag = true;
    for (let i = 0; i < this.boxesInCol; i++) {
      if (this.state.board[i].includes("")) {   
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
          this.state.board[r][c] != 
          this.props.wordcrossDataSet.solution[r][c]
          ) {
          flag = false;
        }
      }
    }
    if (this.solved != flag){ this.solved = flag }
    return flag;
  };

  processSolvedWordcross() {
    clearInterval(this.countUp, 1000);
    this.saveWordcross();
    return this.displaySolvedModal();
  };

  disableBoxInputs() {
    return document.getElementsByClassName("input-box").disabled = true;
  };

  enableBoxInputs() {
    return document.getElementsByClassName("input-box").disabled = false;
  };


// the following methods handle Modal display & UI
  hideModal() {
    this.setState({ modalType: 'none' });
    if (!this.solved) {
      return this.enableBoxInputs();
    }
  };

  displayPausedModal() {
    this.setState({ modalType: 'paused'})
    return this.disableBoxInputs();
  };

  displaySolvedModal() {
    // NEEDED !!! Play Sound !!!
    this.setState({ 
      modalType: 'solved',
      isTimerRunning: false
    });
    return this.disableBoxInputs();
  };

  displayKeepTryingModal() {
    this.setState({ 
      modalType: 'keepTrying',
      isTimerRunning: false
    });
  };

  handleModalButtonClick() {
    if (
      this.solved ||
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
    if (this.props.wordcrossDataSet) {
      const newTime = [
        this.state.elapsedHours,
        this.state.elapsedMinutes,
        this.state.elapsedSeconds
      ];
      let newMicro = {
          id: this.props.wordcrossDataSet.id,
          micro_id: this.props.wordcrossDataSet.micro_id,
          solved: this.solved,
          user_id: this.props.wordcrossDataSet.user_id,
          wordcross_date: this.props.wordcrossDate,
          timer: newTime,
          solving_state: this.state.board
      };      
      return this.props.updateWordcross(newMicro);
    }
  };

  render(){
    return (
      <div className='wordcross-container'>
        {this.state.board && <div className='banner-buffer'></div>}
        {this.state.board && <Advert isSubscriber='subscriber' />}
        {this.state.board && 
        <div className="wordcross-board-with-header">
          <div className="wordcross-board-aspect-ratio-wrapper">
            <WordcrossHeader 
              displayedDate={this.displayedDate}
              author={this.props.wordcrossDataSet.author}
              modalType={this.state.modalType} 
              wordcrossCategory={this.wordcrossCategory}
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
                <CurrentClue 
                  activeClue={this.props.wordcrossDataSet.clue_set[this.state.activeClue]}
                />
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