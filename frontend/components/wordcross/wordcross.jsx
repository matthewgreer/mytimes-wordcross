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

      // wordcross state properties
      activeClue: 'a1', // => updateActiveAndCrossingClues
      crossingClue: null, // => updateActiveAndCrossingClues
      board: null, // => updateBoard
      boxInFocus: '0,0', // => updateBoxInFocus
      solvingDirection: 'across', // => changeSolvingDirection

      // timer state properties
      elapsedHours: 0,
      elapsedMinutes: 0,
      elapsedSeconds: 0,
      highlightedBoxes: [],
      isTimerRunning: false,

      // modal state property
      modalType: 'ready'

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
    this.today = new Date();
    this.displayedDate = null;



    // methods for setting up the wordcross
    this.createBoard = this.createBoard.bind(this);
    this.initializeWordcross = this.initializeWordcross.bind(this);
    this.sortClues = this.sortClues.bind(this);
    this.setDisplayedDateAndCategory = this.setDisplayedDateAndCategory.bind(this);
    this.calculateGridDimensions = this.calculateGridDimensions.bind(this);
    this.setInitialTimer = this.setInitialTimer.bind(this);
    
    //methods for executing gameplay based on user input
    this.updateBoard = this.updateBoard.bind(this);
    this.changeSolvingDirection = this.changeSolvingDirection.bind(this);
    this.updateBoxInFocus = this.updateBoxInFocus.bind(this);
    this.updateActiveAndCrossingClues = this.updateActiveAndCrossingClues.bind(this);

    // helper methods for extrapolation
    this.findClueContainingBox = this.findClueContainingBox.bind(this);
    this.determineClueArray = this.determineClueArray.bind(this);
    this.determineDirectionOfClue = this.determineDirectionOfClue.bind(this);
    this.determineBoxPosition = this.determineBoxPosition.bind(this);

    // methods to navigate Grid & ClueList
    this.findNextBoxName = this.findNextBoxName.bind(this);
    this.findNextClueName = this.findNextClueName.bind(this);

    // methods to check for completion
    this.isBoxCompleted = this.isBoxCompleted.bind(this);
    this.isClueEntryCompleted = this.isClueEntryCompleted.bind(this);
    this.isWordcrossCompleted = this.isWordcrossCompleted.bind(this);
    this.isWordcrossSolved = this.isWordcrossSolved.bind(this);
  
    // other game logic methods
    this.disableBoxInputs = this.disableBoxInputs.bind(this);
    this.enableBoxInputs = this.enableBoxInputs.bind(this);
    this.processSolvedWordcross = this.processSolvedWordcross.bind(this);
    this.saveWordcross = this.saveWordcross.bind(this);

    // methods for handling Modals
    this.hideModal = this.hideModal.bind(this);
    this.displayPausedModal = this.displayPausedModal.bind(this);
    this.displaySolvedModal = this.displaySolvedModal.bind(this);
    this.displayKeepTryingModal = this.displayKeepTryingModal.bind(this);
    
    // methods for Timer
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this);
    this.countUp = this.countUp.bind(this);
    this.incrementSeconds = this.incrementSeconds.bind(this);
    this.incrementMinutes = this.incrementMinutes.bind(this);
    this.incrementHours = this.incrementHours.bind(this);
    this.calculateTime = this.calculateTime.bind(this);

    // methods for processing user input -- clicks
    this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
    this.handlePauseButtonClick = this.handlePauseButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleBoxClick = this.handleBoxClick.bind(this);
    this.handleClueClick = this.handleClueClick.bind(this);

    // methods for processing user input -- keys
    this.handleCharacterKey = this.handleCharacterKey.bind(this);
    this.handleTabOrEnter = this.handleTabOrEnter.bind(this);
    // this.handleShiftTab = this.handleShiftTab.bind(this);
    this.handleSpacebar = this.handleSpacebar.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleArrowKey = this.handleArrowKey.bind(this);
    
  };

  componentDidMount() {
    if (!this.props.wordcrossDataSet) {
      return this.props.fetchWordcross(
        this.props.userId,
        this.props.wordcrossDate
      );
    } else {
      return this.createBoard();
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (!this.isWordcrossLoaded && this.props.wordcrossDataSet) {
      if (!this.state.board) {
        return this.createBoard();
      } else {
        return this.initializeWordcross();
      }
    }

    if (!this.solved){
      if (this.isWordcrossSolved()){
        this.solved = true;
      } else {
        if (this.state.boxInFocus != prevState.boxInFocus ||
          this.state.solvingDirection != prevState.solvingDirection) {
            this.updateActiveAndCrossingClues(
            this.state.boxInFocus, 
            this.state.solvingDirection
          );
        }
      }
    }
  };

  componentWillUnmount() {
    clearInterval(this.countUp, 1000);
    return this.saveWordcross();
  };


  // methods for setting up the wordcross

  createBoard() {
    // creates the board in state based on solving_state
    this.solved = this.props.wordcrossDataSet.solved;
    return this.setState({
      board: Object.assign([], this.props.wordcrossDataSet.solving_state),
    });    
  };

  initializeWordcross() {
    this.setInitialTimer();
    this.calculateGridDimensions();
    this.sortClues();
    if (this.props.location.state) {
      this.referringComponent = this.props.location.state.referringComponent;
      this.wordcrossCategory = this.props.location.state.wordcrossCategory;
    } else {
      this.referringComponent = 'refresh';
    }
    this.setDisplayedDateAndCategory();

    // logic for finding the box from which to start
    let startingBox = this.acrossClues[0].boxes[0];
    if (this.solved || !this.isBoxCompleted(startingBox)) {
      // if solved, focus first box of first clue across
      this.updateBoxInFocus(startingBox);
    } else {
      // otherwise, focus first empty box
      const firstEmptyBox = this.findNextBoxName(startingBox, false, true);
      this.setState({
        boxInFocus: firstEmptyBox
      });
    }
    this.isWordcrossLoaded = true;
    return setInterval(this.countUp, 1000);
  };

  sortClues() {
    Object.keys(this.props.wordcrossDataSet.clue_set).forEach(clueName => {
      const clueProperties = this.props.wordcrossDataSet.clue_set[clueName];
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

  calculateGridDimensions() {
    this.boxesInRow = this.props.wordcrossDataSet.solution[0].length;
    this.boxesInCol = this.props.wordcrossDataSet.solution.length;
    const longerSide = this.boxesInRow >= this.boxesInCol ?
      this.boxesInRow : this.boxesInCol;
    return this.boxRatio = 49 / longerSide;
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


  //methods for executing gameplay based on user input

  updateBoard(boxName, newValue) {
    // inserts a newValue in the corresponding position in the board
    const position = this.determineBoxPosition(boxName);
    const updatedBoard = Object.assign([], this.state.board);
    const row = position[0];
    const col = position[1];
    updatedBoard[row][col] = newValue;
    return this.setState({
      board: updatedBoard
    });
  };

  changeSolvingDirection() {
    const newDirection = (this.state.solvingDirection === 'across' ? 
    'down' : 'across');
    this.setState({
      solvingDirection: newDirection
    });
    return newDirection; 
  };

  updateBoxInFocus(newBox) {
    // this.updateActiveAndCrossingClues(newBox, this.state.solvingDirection);
    return this.setState({
      boxInFocus: newBox
    });
  };

  updateActiveAndCrossingClues(box, direction) {
    let newActiveClueName, newCrossingClueName, activeArray;
    if (direction === 'across') {
      activeArray = this.acrossClues;
      newActiveClueName = this.findClueContainingBox(activeArray, box, true);
      newCrossingClueName = this.findClueContainingBox(this.downClues, box, false);
    } else {
      activeArray = this.downClues;
      newActiveClueName = this.findClueContainingBox(activeArray, box, true);
      newCrossingClueName = this.findClueContainingBox(this.acrossClues, box, false);
    }
    return this.setState({
      activeClue: newActiveClueName,
      crossingClue: newCrossingClueName
    });
  };



  // helper methods for extrapolation

  findClueContainingBox(clueArray, box, getsHighlighted) {
    let clueWithBox;
    clueArray.forEach(clue => {
      if (clue.boxes.includes(box)) {
        if (getsHighlighted) {
          this.setState({
            highlightedBoxes: clue.boxes
          });
        }
        clueWithBox = clue.name;
      }
    });
    return clueWithBox;
  };
  
  determineClueArray(direction) {
    return (direction === 'across' ? this.acrossClues : this.downClues);
  };

  determineDirectionOfClue(clueName) {
    // return (this.acrossClues.includes(clueName) ?
    //   'across' : 'down');
    return (!!this.acrossClues.find(clue => clue.name === clueName) ?
      'across' : 'down');
  };

  determineBoxPosition(box) {
    const stringArray = box.split(',');
    const position = [];
    stringArray.map(coord => {position.push(parseInt(coord))});
    return position;
  }

  
  // methods to navigate Grid & ClueList

  findNextBoxName(startingBoxName, lookInReverse, mustBeIncomplete) {
    if (this.isWordcrossCompleted()) {
      if (this.isWordcrossSolved()) {
        this.processSolvedWordcross();
      } else {
        this.displayKeepTryingModal();
      }
    } else {
      let increment = (lookInReverse ? -1 : 1);
      let nextBoxName;
      let clueArray = this.determineClueArray(this.state.solvingDirection); // problem if state doesn't update quickly enough
      let clueName = this.findClueContainingBox(
        clueArray,
        startingBoxName,
        false
      );
      // let boxArray = this.props.wordcrossDataSet.clue_set[clueName].boxes;
      let boxArray = clueArray.find(clue => clue.name === clueName).boxes;
      let startingBoxIndex = boxArray.indexOf(startingBoxName);
      if (startingBoxIndex + increment >= boxArray.length) {
        let nextClueName = this.findNextClueName(clueName, lookInReverse, false);
        // boxArray = clueArray[nextClueName].boxes; 
        boxArray = clueArray.find(clue => clue.name === nextClueName).boxes
        nextBoxName = boxArray[0];
        } else {
        nextBoxName = boxArray[startingBoxIndex + increment];
      }
      if (mustBeIncomplete && this.isBoxCompleted(nextBoxName)) {
        return this.findNextBoxName(nextBoxName, lookInReverse, true);
      } else {
        return nextBoxName;
      }      
    }
  };

  findNextClueName(startingClueName, lookInReverse, mustBeIncomplete) {
    let increment = (lookInReverse ? -1 : 1)
    let nextClueName;
    let direction = this.determineDirectionOfClue(startingClueName);
    let clueArray = this.determineClueArray(direction);
    let startingClueIndex = clueArray.indexOf(
      clueArray.find(clue => clue.name === startingClueName)
    );
    if (startingClueIndex + increment >= clueArray.length) {
      clueArray = this.determineClueArray(this.changeSolvingDirection());
      nextClueName = clueArray[0].name;
    } else {
      nextClueName = clueArray[startingClueIndex + increment].name;
    }
    if (mustBeIncomplete && this.isClueEntryCompleted(nextClueName)) {
      return this.findNextClueName(nextClueName, lookInReverse, true);
    } else {
      return nextClueName;
    }
  };



  // methods to check for completion

  isBoxCompleted(boxName) {
    const position = this.determineBoxPosition(boxName);
    const row = position[0];
    const col = position[1];
    return this.state.board[row][col] != '';
  };

  isClueEntryCompleted(clueName) {
    const direction = this.determineDirectionOfClue(clueName);
    const clueArray = this.determineClueArray(direction);
    const thisClue = clueArray.find(clue => clue.name === clueName)
    return thisClue.boxes.every(this.isBoxCompleted)
  };

  isWordcrossCompleted() {
    let flag = true;
    for (let i = 0; i < this.boxesInCol; i++) {
      if (this.state.board[i].includes("")) {   
        flag = false;
      }
    }
    return flag;
  };

  isWordcrossSolved() {
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



  // other game logic methods

  disableBoxInputs() {
    return document.getElementsByClassName("input-box").disabled = true;
  };

  enableBoxInputs() {
    return document.getElementsByClassName("input-box").disabled = false;
  };

  processSolvedWordcross() {
    // double-check that it is solved; if so, set this.solved
    this.solved = this.isWordcrossSolved();
    if (this.solved){
      this.disableBoxInputs();
      clearInterval(this.countUp, 1000);
      this.saveWordcross();
      return this.displaySolvedModal();
    }
  };

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



  // methods for handling Modals

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



// methods for Timer

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



  // methods for processing user input -- clicks

  handleModalButtonClick() {
    if (this.solved || this.state.modalType === 'solved') {
      return this.hideModal();
    } else {
      return this.resumeTimer();
    }
  };

  handlePauseButtonClick() {
    if (this.state.isTimerRunning) {
      return this.pauseTimer();
    } else {
      return this.resumeTimer();
    }    
  };

  handleResetButtonClick() {
    const newBoard = Object.assign([], this.state.board);
    newBoard.map((row, rowIdx) => {
      row.map((box, colIdx) => {
        if (box != "#") {
          newBoard[rowIdx][colIdx] = "";
        }
      });
    });
    // change to updateBoard()
    return this.setState({ board: newBoard });    
  };

  handleBoxClick(clickedBox) {
    if (clickedBox === this.state.boxInFocus) {
      return this.changeSolvingDirection();
    } else {
      // this.updateActiveAndCrossingClues(
      //   clickedBox, 
      //   this.state.solvingDirection
      //   );
        return this.updateBoxInFocus(clickedBox);
    }
  };

  handleClueClick(clueName, direction) {
    const clueArray = this.determineClueArray(direction);
    const firstBox = clueArray[clueName].boxes[0];
    let nextBox;
    if (this.isClueEntryCompleted(clueName)) {
      nextBox = firstBox;
    } else {
      nextBox = this.findNextBoxName(firstBox, false, true);
    }
    // this.updateActiveAndCrossingClues(nextBox, direction);
    return this.updateBoxInFocus(nextBox);
  };



  // methods for processing user input -- keys

  handleCharacterKey(keyName) {
    const regex = new RegExp(/[A-Za-z]{1}/);
    if (regex.test(keyName)) {
      const char = `${keyName}`.toUpperCase();
      this.updateBoard(this.state.boxInFocus, char);
      const nextBox = this.findNextBoxName(this.state.boxInFocus, false, true);
      return this.updateBoxInFocus(nextBox);
    }
  };
  
  handleTabOrEnter(isShifted) { 
    const nextClue = this.findNextClueName(this.state.activeClue, isShifted, true)
    const direction = this.determineDirectionOfClue(nextClue);
    const array = this.determineClueArray(direction);
    debugger
    const firstBox = array.find(clue => clue.name === nextClue).boxes[0];
    if (this.solved || !this.isBoxCompleted(firstBox)) {
      return this.updateBoxInFocus(firstBox)
    } else {
      const nextBox = this.findNextBoxName(firstBox, false, true);
      return this.updateBoxInFocus(nextBox);
    }
  };
  
  handleSpacebar() {
    const newDirection = this.changeSolvingDirection();
    return this.updateActiveAndCrossingClues(this.state.boxInFocus, newDirection); 
  };
  
  handleBackspace() {
    const position = this.determineBoxPosition(this.state.boxInFocus);
    const row = position[0];
    const col = position[1];
    if (this.state.board[row][col] === '') {
      const previousBoxName = this.findNextBoxName(this.state.boxInFocus, true, false);
      this.updateBoard(previousBoxName, '');
      return this.updateBoxInFocus(previousBoxName);
    } else {
      this.handleDelete();
    }
  };
  
  handleDelete() {
    return this.updateBoard(this.state.boxInFocus, '');
  };
  
  handleArrowKey(keyName) {
    let nextBox;
    if (this.state.solvingDirection === 'across') {
      switch(keyName) {
        case 'ArrowUp':
        case 'ArrowDown':
          return this.changeSolvingDirection();
        case 'ArrowLeft':
          nextBox = this.findNextBoxName(
            this.state.boxInFocus, true, false
            );
          return this.updateBoxInFocus(nextBox);
        case 'ArrowRight':
          nextBox = this.findNextBoxName(
            this.state.boxInFocus, false, false
          );
          return this.updateBoxInFocus(nextBox);
        default:
          return null;
      } 
    } else {
      switch(keyName) {
        case 'ArrowLeft':
        case 'ArrowRight':
          return this.changeSolvingDirection();
        case 'ArrowUp':
          nextBox = this.findNextBoxName(
            this.state.boxInFocus, true, false
            );
          return this.updateBoxInFocus(nextBox);
        case 'ArrowDown':
          nextBox = this.findNextBoxName(
            this.state.boxInFocus, false, false
          );
          return this.updateBoxInFocus(nextBox);
        default:
          return null;
      }
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
                  activeClue={
                    this.props.wordcrossDataSet.clue_set[
                      this.state.activeClue
                    ]
                  }
                />
                <Grid
                  board={this.state.board}
                  ratio={this.boxRatio}
                  labelSet={this.props.wordcrossDataSet.label_set}
                  highlightedBoxes={this.state.highlightedBoxes}
                  boxInFocus={this.state.boxInFocus}
                  updateBoard={this.updateBoard}
                  changeSolvingDirection={this.changeSolvingDirection}
                  updateBoxInFocus={this.updateBoxInFocus}
                  findNextBoxName={this.findNextBoxName}
                  handleBoxClick={this.handleBoxClick}
                  handleCharacterKey={this.handleCharacterKey}
                  handleTabOrEnter={this.handleTabOrEnter}
                  handleSpacebar={this.handleSpacebar}
                  handleBackspace={this.handleBackspace}
                  handleDelete={this.handleDelete}
                  handleArrowKey={this.handleArrowKey}
                />
              </div>
              <div className="wordcross-board-column clue-lists-column">
                <ClueList 
                  acrossClues={this.acrossClues}
                  downClues={this.downClues}
                  // activeBox={this.state.boxInFocus}
                  activeClue={this.state.activeClue}
                  crossingClue={this.state.crossingClue}
                  // clueSet={this.props.wordcrossDataSet.clue_set}
                  // solvingDirection={this.state.solvingDirection}
                  findNextClueName={this.findNextClueName}
                  updateActiveAndCrossingClues={this.updateActiveAndCrossingClues}
                  handleClueClick={this.handleClueClick}
              />
              </div>
            </div>
          </div>
        </div>}
      </div>
    )
  };  
};

export default withRouter(Wordcross);