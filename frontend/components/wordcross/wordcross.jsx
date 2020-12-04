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
      activeClueName: 'a1',
      crossingClueName: null, 
      board: null, 
      boxInFocusName: '0,0', 
      solvingDirection: 'across', 
      // solvingDirectionClueNamesArray: (
      //   this.state.solvingDirection === 'across' ?
      //   this.acrossClues :
      //   this.downClues
      // ),

      // timer state properties
      elapsedHours: 0,
      elapsedMinutes: 0,
      elapsedSeconds: 0,
      // highlightedBoxes: [],
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
    this.clueSet;
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
    this.setBoxInFocusName = this.setBoxInFocusName.bind(this);
    this.setActiveClueName = this.setActiveClueName.bind(this);
    this.updateActiveClueName = this.updateActiveClueName.bind(this);
    this.updateCrossingClueName = this.updateCrossingClueName.bind(this);
    this.setSolvingDirection = this.setSolvingDirection.bind(this);
    this.updateSolvingDirection = this.updateSolvingDirection.bind(this);
    this.switchSolvingDirection = this.switchSolvingDirection.bind(this);
    // this.setSolvingDirectionClueNamesArray = this.setSolvingDirectionClueNamesArray.bind(this);
    this.findClueForBoxByDirection = this.findClueForBoxByDirection.bind(this);
    this.findNextClueName = this.findNextClueName.bind(this);
    this.findNextBoxName = this.findNextBoxName.bind(this);
    this.shiftBoxInFocusAlongGrid = this.shiftBoxInFocusAlongGrid.bind(this);

    // methods to check for completion
    this.isBoxFilled = this.isBoxFilled.bind(this);
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

    // new stuff =================

		if (this.state.boxInFocusName != prevState.boxInFocusName) {
      if (this.state.solvingDirection != prevState.solvingDirection) {
        const nextActiveClueName = this.findClueForBoxByDirection(
          this.state.boxInFocusName,
          this.state.solvingDirection 
        );
        return this.setActiveClueName(nextActiveClueName);
      } else {
        this.updateActiveClueName();
        return this.updateCrossingClueName();
      }
		}

		if (this.state.activeClueName != prevState.activeClueName) {
      this.updateCrossingClueName();
      return this.updateSolvingDirection();
    }
    
    // if (this.state.solvingDirection != prevState.solvingDirection) {
		// 	this.setSolvingDirectionClueNamesArray(this.state.solvingDirection);
		// }

  };

  componentWillUnmount() {
    // clearInterval(this.countUp, 1000);                                   !!!!!! ISSUE: counter isn't clearing properly in this lifecycle method
    // return this.saveWordcross();
  };


  // methods for setting up the wordcross

  createBoard() {
    // creates the board in state based on solving_state
    this.clueSet = this.props.wordcrossDataSet.clue_set;
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
    // setInterval(this.countUp, 1000);                                       !!!!!! commented for debugging
    this.isWordcrossLoaded = true;

    // logic for finding the box from which to start
    let startingBox = this.clueSet[this.state.activeClueName].boxes[0];
    if (this.isWordcrossSolved() || !this.isBoxFilled(startingBox)) {
      // if solved, focus first box of first clue across
      return this.setBoxInFocusName(startingBox);
    } else {
      // otherwise, focus first empty box
      const firstEmptyBox = this.findNextBoxName(
        startingBox, 
        {
          searchBackward: false,
          mustBeEmpty: true,
          followSolvingDirection: true
        }
      );
      return this.setBoxInFocusName(firstEmptyBox);
    }
  };

  sortClues() {
    Object.keys(this.clueSet).forEach(clueName => {
      this.clueSet[clueName].direction === 'across' ?
        this.acrossClues.push(clueName) :
        this.downClues.push(clueName);
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









  // methods for executing gameplay based on user input ALL NEW

  updateBoard(boxName, newValue) {
    // inserts a newValue in the corresponding position in the board
    const updatedBoard = Object.assign([], this.state.board);
    const row = parseInt(boxName[0]);
    const col = parseInt(boxName[2]);
    updatedBoard[row][col] = newValue;
    return this.setState({
      board: updatedBoard
    });
  };

  setBoxInFocusName(boxName) { 
    return this.setState({ boxInFocusName: boxName });
  };

  setActiveClueName(clueName) {
    return this.setState({ activeClueName: clueName });
  };

  updateActiveClueName() {
    const nextActiveClueName = this.findClueForBoxByDirection(
      this.state.boxInFocusName,
      this.state.solvingDirection
    );
    return this.setActiveClueName(nextActiveClueName);
  }; 

  updateCrossingClueName() {
    const crossingDirection = (
      this.clueSet[this.state.activeClueName].direction === 'across' ?
      'down' : 
      'across'
    );
    const nextCrossingClueName = this.findClueForBoxByDirection(
      this.state.boxInFocusName,
      crossingDirection
    );
    return this.setState({ crossingClueName: nextCrossingClueName });
  };

  setSolvingDirection(direction) {
    return this.setState({ solvingDirection: direction });
  };

  updateSolvingDirection() {
    const direction = this.clueSet[this.state.activeClueName].direction === 'across' ?
      'across' : 'down';
    return this.setSolvingDirection(direction);
  };

  switchSolvingDirection() { 
    return this.setActiveClueName(this.state.crossingClueName);
  };

  findClueForBoxByDirection(boxName, direction) {
    let foundClueName;
    const clueSetArray = Object.entries(this.clueSet);
    for (let i = 0; i < clueSetArray.length; i++) {
      if( clueSetArray[i][1].boxes.includes(boxName) &&
        clueSetArray[i][1].direction === direction
      ) {
        foundClueName = clueSetArray[i][0]; 
        break; 
      }
    }
    return foundClueName;
  };
  
	findNextClueName(startingClueName, options){
    /*
    options = {
      searchBackward: boolean,
      mustBeIncomplete: boolean,
      followSolvingDirection: boolean
    }
    */
   
    const increment = (options.searchBackward ? -1 : 1);
    // set the increment to match searching forward or backward
    const searchDirection = (
        options.followSolvingDirection ? 
        this.state.solvingDirection : 
        (
          this.state.solvingDirection === 'across' ? 
          'down' : 
          'across'
        )
    );
    let searchArray;
    let crossingArray;
    if (searchDirection === 'across') {
      //set up which is the search array and which the crossing array
      searchArray = this.acrossClues;
      crossingArray = this.downClues;
    } else {
      searchArray = this.downClues;
      crossingArray = this.acrossClues;
    }

    const startingIndex = searchArray.indexOf(startingClueName);
    // find the position of the starting clue in this direction's clues array
    let nextIndex = startingIndex + increment;
    // look for a clue in the appointed direction
    let nextClueName;
    if (this.isWordcrossCompleted()) {options.mustBeIncomplete = false};
    // if the wordcross is complete, there cannot be incomplete clue entries

    if ((options.searchBackward && nextIndex >= 0) || 
    // check if there is another clue after this one in this direction
      // increment the current clue's index in the clue array, depending
      //   on the searchBackward option
      (!options.searchBackward && nextIndex < searchArray.length)) {
      // if there IS a clue in this direction past this one
      nextClueName = searchArray[nextIndex];
        // before we decide if this is the next clue name, we must check
        //   whether that clue's entry must have an empty box and this
        //   clue's has none
      if (
        options.mustBeIncomplete &&
          this.isClueEntryCompleted(nextClueName)
      ) {
          // if so, another clue will need to be found, so continue the 
          //   search in this direction from this next clue name
          this.findNextClueName(
              nextClueName,
              {
                searchBackward: options.searchBackward, // stays the same
                mustBeIncomplete: true, // the whole reason we have to keep searching
                followSolvingDirection: options.followSolvingDirection // stays the same
              }
            );
      } else {
        // otherwise, the next clue is good, so return its name
        return nextClueName;
      }
    } else {
      // there is NO clue in this direction past this one
      nextIndex === options.searchBackward ? crossingArray.length - 1 : 0;
        // if searching backward, return the clue name at the end of the
        //   crossing direction's clues array, otherwise return the clue
        //   name at the beginning of it
      const newSolvingDirection = (
        options.followSolvingDirection ?
        (this.state.solvingDirection === 'across' ?
          'down' :
          'across'
        ) :
        this.state.solvingDirection
      );
      this.setSolvingDirection(newSolvingDirection);
      return crossingArray[nextIndex];
    }
	};
  
	findNextBoxName(startingBoxName, options){
    /* 
      options = {
        searchBackward: boolean,
        mustBeEmpty: boolean,
        followSolvingDirection: boolean
      }
    */

    const increment = (options.searchBackward ? -1 : 1);
    // set the increment to match searching 'backward' (up/left) or 
    //    'forward' (down/right)
    let searchArray = this.clueSet[this.state.activeClueName].boxes;
    const startingIndex = searchArray.indexOf(startingBoxName);
    let nextBoxIndex = startingIndex + increment;
    let nextBoxName;

    if (this.isWordcrossCompleted()) {options.mustBeEmpty = false}
    // if the wordcross is complete, there cannot be empty boxes

    if ((options.searchBackward && nextBoxIndex >= 0) || 
      // check if there is another box after this one in this clue
        // increment the current box's index in the clue's boxes array,
        //   depending on the searchBackward option
      (!options.searchBackward && nextBoxIndex < searchArray.length)) {
      // if there IS a box in this clue entry past this one,
      nextBoxName = searchArray[nextBoxIndex];
        // before deciding that this is the next box name, check whether
        //   the box must be empty, and whether this box is empty
      if (options.mustBeEmpty && this.isBoxFilled(nextBoxName)) {
        // if so, another box will need to be found, so continue the 
        //   search in this direction from this next box name
        this.findNextBoxName(
          nextBoxName,
          {
            searchBackward: options.searchBackward, // stays the same
            mustBeEmpty: true, // the whole reason we have to keep searching
            followSolvingDirection: options.followSolvingDirection // stays the same
          }
        );
      } else {
        // if not, this box will do, so return the box name
        return nextBoxName;
      }
    } else {
      // there is NO box in this direction within this clue beyond this one
      //   so the next clue in this direction must be found, 
      const nextClueName = this.findNextClueName(
        this.state.activeClueName,
        {
          searchBackward: options.searchBackward,
          mustBeEmpty: false,
          followSolvingDirection: options.followSolvingDirection
        }
      );
      const nextIndex = options.searchBackward ? 
        this.clueSet[nextClueName].boxes.length -1 :
        0;
      // and return the box name of either the first (searching forward) or 
      //   final (searching backward) box of that clue
      return this.clueSet[nextClueName].boxes[nextIndex];
    }
  };
  
  shiftBoxInFocusAlongGrid(direction) {
    /*
        This additional method may be necessary, one dependent on the grid 
        moreso than on the clues, since, in Daily wordcrosses, arrow keys 
        can jump over black boxes into clue entries unrelated to the prior
        clue entry. Doh.
    */
   let vector;
   switch (direction) {
    case 'up': 
      vector = [-1, 0];
      break;
    case 'left': 
      vector = [0, -1];
      break;
    case 'down': 
      vector = [1, 0];
      break;
    case 'right': 
      vector = [0, 1];
      break;
    default:
      vector = [0, 0];
   }
    const startingRow = parseInt(this.state.boxInFocusName[0]);
    const startingCol = parseInt(this.state.boxInFocusName[2]);
    // const startingCoord = startingBoxName.split(',').map(n => parseInt(n));
    // determine the starting box's coordinates on the grid    !!!!!! not sure which method best yet: row & col or [coord, inates]
    const newRow = startingRow + vector[0];
    const newCol = startingCol + vector[1];
    if (newRow > this.boxesInCol - 1) { newRow = this.boxesInCol - 1}
    if (newCol > this.boxesInRow - 1) { newCol = this.boxesInRow - 1}
    const newBoxName = newRow.toString() + ',' + newCol.toString();
    return this.setBoxInFocusName(newBoxName);
  };



  // methods to check for completion

  isBoxFilled(boxName) {
    const row = parseInt(boxName[0]);
    const col = parseInt(boxName[2]);
    return this.state.board[row][col] != '';
  };

  isClueEntryCompleted(clueName) {
    return this.clueSet[clueName].boxes.every(this.isBoxFilled);
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
    if (this.isWordcrossSolved()){
      this.disableBoxInputs();
      // clearInterval(this.countUp, 1000);
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
          solved: this.isWordcrossSolved(),
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
    if (!this.isWordcrossSolved()) {
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
    return this.disableBoxInputs();
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
    if (this.isWordcrossSolved() || this.state.modalType === 'solved') {
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
  
  handleBoxClick(boxName) {
    return (
      (boxName === this.state.boxInFocusName) ?
       this.switchSolvingDirection()  : 
       this.setBoxInFocusName(boxName)
      );
	};
  
	handleClueClick(clueName) {
    const firstBoxName = this.clueSet[clueName].boxes[0];
		let nextBoxName;
    if (
      (this.state.activeClueName === clueName) ||
      this.isClueEntryCompleted(clueName) || 
      !this.isBoxFilled(firstBoxName)
    ) {
      nextBoxName = firstBoxName;
		} else {
      nextBoxName = this.findNextBoxName(
        firstBoxName,
				{
          searchBackward: false,
					mustBeEmpty: true,
					followSolvingDirection: true
				}
      );
    }
    return this.setState({
      boxInFocusName: nextBoxName,
      solvingDirection: this.clueSet[clueName].direction
    });
  };
  
    
  // methods for processing user input -- keys
  
  handleTabOrEnter(shifted) {
    let options;
    if (this.isWordcrossCompleted()) {
			options = {
				searchBackward: shifted,
        mustBeIncomplete: false,
        followSolvingDirection: true
			}
		} else {
			options = {
				searchBackward: shifted,
        mustBeIncomplete: true,
        followSolvingDirection: true
			}	
		}
		const nextClueName = this.findNextClueName(this.state.activeClueName, options);
		const firstBoxName = this.clueSet[nextClueName].boxes[0];
    let nextBoxName;
    if (this.isClueEntryCompleted(nextClueName) || !this.isBoxFilled(firstBoxName)) {
			nextBoxName = firstBoxName;
		} else {
      nextBoxName = this.findNextBoxName(
				firstBoxName,
				{
					searchBackward: false,
					mustBeEmpty: true,
					followSolvingDirection: true
				}
			);
    }
    return this.setState({
      boxInFocusName: nextBoxName,
      solvingDirection: this.clueSet[nextClueName].direction
    });
	};

	handleSpacebar(){
		return this.switchSolvingDirection();
	};

	handleDelete(){
    if (
      !this.isWordcrossSolved() || 
      this.isBoxFilled(this.state.boxInFocusName)
    ) {
			return this.updateBoard(this.state.boxInFocusName, '');
		}
	};
	
	handleBackspace(){
		if (!this.isWordcrossSolved()) {
			let checkingBoxName = this.state.boxInFocusName;
			if (!this.isBoxFilled(checkingBoxName)) {
				checkingBoxName = this.findNextBoxName(
					this.state.boxInFocusName,
					{
						searchBackward: true,
						mustBeEmpty: false,
						followSolvingDirection: true
					}
				);
      }
      this.updateBoard(checkingBoxName, '');
      return this.setBoxInFocusName(checkingBoxName);
		}
	};

	handleArrowKey(direction) {
    switch(direction) {
      case 'ArrowUp':
        if (this.state.solvingDirection === 'across') {
          this.switchSolvingDirection();
        }
        return this.shiftBoxInFocusAlongGrid('up');
      case 'ArrowDown':
        if (this.state.solvingDirection === 'across') {
          this.switchSolvingDirection();
        }
        return this.shiftBoxInFocusAlongGrid('down');
      case 'ArrowRight':
        if (this.state.solvingDirection === 'down') {
          this.switchSolvingDirection();
        }
        return this.shiftBoxInFocusAlongGrid('right');
      case 'ArrowLeft':
        if (this.state.solvingDirection === 'down') {
          this.switchSolvingDirection();
        }        
        return this.shiftBoxInFocusAlongGrid('left');
      default:
        return null;
    }
	};
  
  handleCharacterKey(keyName) {
    const regex = new RegExp(/[A-Za-z]{1}/);
    if (regex.test(keyName)) {
      const char = `${keyName}`.toUpperCase();
      this.updateBoard(this.state.boxInFocusName, char);
      const nextBox = this.findNextBoxName(
        this.state.boxInFocusName, 
        {
          searchBackward: false,
          mustBeEmpty: false,
          followSolvingDirection: true
        }
      );
      return this.setBoxInFocusName(nextBox);
    }
  }



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
                    this.clueSet[
                      this.state.activeClueName
                    ]
                  }
                />
                <Grid
                  board={this.state.board}
                  ratio={this.boxRatio}
                  labelSet={this.props.wordcrossDataSet.label_set}
                  boxInFocusName={this.state.boxInFocusName}
                  activeClueBoxArray={
                    this.clueSet[this.state.activeClueName].boxes
                  // this throws an error, but not a particularly helpful one

                  switchSolvingDirection={this.switchSolvingDirection}
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
                  activeClueName={this.state.activeClueName}
                  crossingClueName={this.state.crossingClueName}
                  clueSet={this.clueSet}
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