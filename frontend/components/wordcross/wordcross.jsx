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
      boxInFocusName: null, 
      solvingDirection: 'across', 

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
    
    // methods for executing gameplay based on user input
    this.draftBoard = this.draftBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.setBoxInFocusName = this.setBoxInFocusName.bind(this);
    this.setActiveClueName = this.setActiveClueName.bind(this);
    this.updateActiveClueName = this.updateActiveClueName.bind(this);
    this.updateCrossingClueName = this.updateCrossingClueName.bind(this);
    this.setSolvingDirection = this.setSolvingDirection.bind(this);
    this.updateSolvingDirection = this.updateSolvingDirection.bind(this);
    this.switchSolvingDirection = this.switchSolvingDirection.bind(this);
    this.oppositeSolvingDirection = this.oppositeSolvingDirection.bind(this);
    this.findCluesArray = this.findCluesArray.bind(this);
    this.solvingDirectionCluesArray = this.solvingDirectionCluesArray.bind(this);
    this.oppositeCluesArray = this.oppositeSolvingDirection.bind(this);
    this.clueBoxesArray = this.clueBoxesArray.bind(this);
    this.firstEmptyBoxInClue = this.firstEmptyBoxInClue.bind(this);
    this.firstIncompleteClueEntryInDirection = this.firstIncompleteClueEntryInDirection.bind(this);
    this.findClueForBoxByDirection = this.findClueForBoxByDirection.bind(this);

    // methods to test for validity and completion (boolean)
    this.isBoxWithinGrid = this.isBoxWithinGrid.bind(this);
    this.isBlackBox = this.isBlackBox.bind(this);
    this.isBoxFilled = this.isBoxFilled.bind(this);
    this.isLastBoxInClueEntry = this.isLastBoxInClueEntry.bind(this);
    this.isClueEntryCompleted = this.isClueEntryCompleted.bind(this);
    this.isLastClueInDirection = this.isLastClueInDirection.bind(this);
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
    // this.displayResetModal = this.displayResetModal.bind(this);    *** NEED TO CREATE
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
    this.handleTabOrEnter = this.handleTabOrEnter.bind(this);
    this.handleSpacebar = this.handleSpacebar.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleArrowKey = this.handleArrowKey.bind(this);
    this.shiftBoxInFocusAlongGrid = this.shiftBoxInFocusAlongGrid.bind(this);
    this.handleCharacterKey = this.handleCharacterKey.bind(this);
    
  };



  // React lifecycle methods
  // =======================

  componentDidMount() {
    // query for User's last Daily/Micro Completed Date & streak now or on
    //  dashboard load?
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

    if (!this.state.boxInFocusName) {
      // if there's no boxInFocus:
      //   (This should only occur before wordcross initialization)
      debugger // WHY IS THERE NO BOX IN FOCUS !?!?!?
      const firstClue = this.firstIncompleteClueEntryInDirection(
        this.solvingDirectionCluesArray(),
        this.state.board
      );
      debugger
      const firstBox = this.firstEmptyBoxInClue(firstClue, this.state.board);
      debugger
      return this.setBoxInFocusName(firstBox);
    }

		if (this.state.boxInFocusName !== prevState.boxInFocusName) {
      // if the boxInFocus has changed:
      debugger
      if (this.state.solvingDirection !== prevState.solvingDirection) {
        // AND IF the solvingDirection has also changed,
        debugger
        // need to find and set activeClue accordingly
        const nextActiveClueName = this.findClueForBoxByDirection(
          this.state.boxInFocusName,
          this.state.solvingDirection 
        );
        debugger
        return this.setActiveClueName(nextActiveClueName);
      } else {
        // if just the boxInFocus changed, 
        debugger
        // update the active & crossing clues
        this.updateActiveClueName();
        debugger
        return this.updateCrossingClueName();
      }
		}

		if (this.state.activeClueName !== prevState.activeClueName) {
      // if the activeClue has changed, 
      debugger
      // update the crossing clue and the solving direction
      this.updateCrossingClueName();
      return this.updateSolvingDirection();
    }

  };

  componentWillUnmount() {
    // clearInterval(this.countUp, 1000);                                   !!!!!! ISSUE: counter isn't clearing properly in this lifecycle method
    // return this.saveWordcross();
  };




  // methods for setting up the wordcross
  // ====================================

  createBoard() {
    // give a less cumbersome name to the clue set
    this.clueSet = this.props.wordcrossDataSet.clue_set;
    // create the board in state based on solving_state
    return this.setState({
      board: Object.assign([], this.props.wordcrossDataSet.solving_state),
    });    
  };

  initializeWordcross() {
    // set up timer, grid, clue list, clues, date, etc., which WORKS.
    debugger
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
    // setInterval(this.countUp, 1000);                   !!!!!! commented out for debugging render or componentDidUpdate
    this.isWordcrossLoaded = true;

    // find the box from which to start
    //   which is a disaster.
    const { board, activeClueName } = this.state;
    const cluesArray = this.solvingDirectionCluesArray();
    let nextBoxInFocusName;
    let nextActiveClueName;
    if ( this.isWordcrossCompleted(board) === true ) {
      // if the wordcross IS completed, 
      debugger
      // focus on the first box of the first across clue
      nextActiveClueName = this.acrossClues[0];
      nextBoxInFocusName = nextActiveClueName.boxes[0];
      debugger
      return this.setBoxInFocusName(nextBoxInFocusName);
    } else {
      if ( this.isClueEntryCompleted(activeClueName, board) === true ) {
        // if the activeClue's entry IS completed, 
        debugger
        // find the first incomplete clue entry
        nextActiveClueName = this.firstIncompleteClueEntryInDirection(
          cluesArray,
          board
        );
        // and focus on the first empty box of that clue entry
        nextBoxInFocusName = this.firstEmptyBoxInClue(nextActiveClueName, board);
        debugger
        return this.setBoxInFocusName(nextBoxInFocusName);
      } else {
        // if the activeClue's entry is NOT completed, 
        debugger
        // focus will go to the first EMPTY box in that clue's entry
        nextBoxInFocusName = this.firstEmptyBoxInClue(activeClueName, board);
        debugger
        return this.setBoxInFocusName(nextBoxInFocusName);
      }
    }
  };

  sortClues() {
    // create an ordered array of clueNames for each direction, which WORKS
    Object.keys(this.clueSet).forEach(clueName => {
      this.clueSet[clueName].direction === 'across' ?
        this.acrossClues.push(clueName) :
        this.downClues.push(clueName);
    });
    this.acrossClues.sort((a, b) => { a.number - b.number });
    this.downClues.sort((a, b) => { a.number - b.number });
  };

  setDisplayedDateAndCategory() {
    // due to seeding limitations and absent my adding new wordcrosses daily,
    //  a wordcross accessed from the Archive will represent itself as a 
    //  wordcross from the wordcross's actual publishing date; if accessed from
    //  the Dashboard, the wordcross will represent itself as a new
    //  wordcross of the current date
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
    // set the category for reference in the solved modal 
    //   eg. "You solved a Saturday Wordcross in 08:21" or
    //   eg. "You solved a Micro Wordcross in 00:04"
    if (!this.wordcrossCategory) {
      this.wordcrossCategory = this.props.wordcrossType === 'Daily' ?
        date.toLocaleDateString(undefined, {weekday: 'long'}) : 'Micro'
    }
    return this.displayedDate = dateToDisplay;
  };

  calculateGridDimensions() {
    // an attempt to keep wordcross size proportionate to the number of 
    //   boxes in the grid
    // if it works, it should modify not only the box size, but font-size
    //   as well
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




  // methods for executing gameplay based on user input 
  // ==================================================
 
  draftBoard(boxName, newValue) {
    const updatedBoard = Object.assign([], this.state.board);
    const row = parseInt(boxName[0]);
    const col = parseInt(boxName[2]);
    updatedBoard[row][col] = newValue;
    debugger
    return updatedBoard;
  };

  updateBoard(boxName, newValue) {
    // inserts a newValue in the corresponding position in the board
    const newBoard = this.draftBoard(boxName, newValue);
    debugger
    return this.setState({
      board: newBoard
    });
  };

  setBoxInFocusName(boxName) { 
    debugger
    return this.setState({ boxInFocusName: boxName });
  };

  setActiveClueName(clueName) {
    debugger
    return this.setState({ activeClueName: clueName });
  };

  updateActiveClueName() {
    debugger
    const nextActiveClueName = this.findClueForBoxByDirection(
      this.state.boxInFocusName,
      this.state.solvingDirection
    );
    return this.setActiveClueName(nextActiveClueName);
  }; 

  updateCrossingClueName() {
    debugger
    const crossingDirection = (
      this.clueSet[this.state.activeClueName].direction === 'across' ?
      'down' : 
      'across'
    );
    const nextCrossingClueName = this.findClueForBoxByDirection(
      this.state.boxInFocusName,
      crossingDirection
    );
    debugger
    return this.setState({ crossingClueName: nextCrossingClueName });
  };

  setSolvingDirection(direction) {
    debugger
    return this.setState({ solvingDirection: direction });
  };

  updateSolvingDirection() {
    debugger
    const direction = this.clueSet[this.state.activeClueName].direction === 'across' ?
      'across' : 'down';
    return this.setSolvingDirection(direction);
  };

  switchSolvingDirection() { 
    debugger
    return this.setActiveClueName(this.state.crossingClueName);
  };

  oppositeSolvingDirection() {
    debugger
    return this.state.solvingDirection === 'across' ?
    'down' :
    'across';
  };

  findCluesArray(direction) {
    debugger
    return direction === 'across' ?
    this.acrossClues :
    this.downClues;
  }
  
  solvingDirectionCluesArray() {
    debugger
    return this.findCluesArray(this.state.solvingDirection);
  };

  oppositeCluesArray() {
    debugger
    return this.state.solvingDirection === 'across' ? 
    this.downClues :
    this.acrossClues; 
  };

  clueBoxesArray(clueName) {
    debugger
    return this.clueSet[clueName].boxes;
  };

  firstEmptyBoxInClue(clueName, board) {
    // WHY DOESN'T THIS WORK???
    // return this.clueBoxesArray(clueName).find(box => {
    //   return this.isBoxFilled(box,board) === false;
    // });

    // THIS WORKS:
    let firstBox;
    let flag = false;
    this.clueBoxesArray(clueName).forEach(box => {
      if (!this.isBoxFilled(box,board) && flag === false) {
        firstBox = box;
        flag = true;
      };
    });
    debugger
    return firstBox;
  };

  firstIncompleteClueEntryInDirection(cluesArray, board) {
    // WHY DOES THIS USE OF .FIND WORK WHEN THE OTHERS DON'T??? OR DOES IT EVEN...?
    // return cluesArray.find(clueName => {
    //   return this.isClueEntryCompleted(clueName, board) === false;
    // });

    // THIS ALSO WORKS, AND IS GOOD FOR DEBUGGING:
    let firstClue;
    let flag = false;
    cluesArray.forEach(clueName => {
      if (this.isClueEntryCompleted(clueName, board) === false && flag === false) {
        firstClue = clueName;
        flag = true;
      };
    });
    debugger
    return firstClue;
  };

  findClueForBoxByDirection(boxName, direction) {

    // WHY DOESN'T THIS WORK???
    // const cluesArray = this.findCluesArray(direction);
    // return cluesArray.find(clueName => {
    //   return this.clueBoxesArray(clueName).includes(boxName);
    // });

    // THIS WORKS, OR AT LEAST DOESN'T THROW AN ERROR
    const cluesArray = this.findCluesArray(direction);
    let foundClueName;
    let flag = false;
    cluesArray.forEach(clueName => {
      if (this.clueBoxesArray(clueName).includes(boxName) && flag === false) {
        foundClueName = clueName;
        flag = true;
      }
    });
    debugger
    return foundClueName;
  };




  // methods to test for box validity & completion (boolean)
  // =======================================================

  isBoxWithinGrid(row, col) {
    // REFACTORING FOR DEBUGGING:
   let result;
    if (
      row >= 0 && 
      col >= 0 && 
      row < this.boxesInCol &&
      col < this.boxesInRow
    ) {
      result = true;
    } else {
      result = false;
    }
    debugger
    return result;

    // return (
    //   row >= 0 && 
    //   col >= 0 && 
    //   row < this.boxesInCol &&
    //   col < this.boxesInRow
    // )
  };

  isBlackBox(row, col){  
    return this.state.board[row][col] === '#';
  }; 

  isBoxFilled(boxName, board) {
    // REFACTORING FOR DEBUGGING:
    const row = parseInt(boxName[0]);
    const col = parseInt(boxName[2]);
    const result = board[row][col] !== '';
    debugger
    return result;

    // const row = parseInt(boxName[0]);
    // const col = parseInt(boxName[2]);
    // return board[row][col] !== '';
  };

  isLastBoxInClueEntry(boxName, goBackward) {
    // REFACTORING FOR DEBUGGING:
    const extremeIndex = goBackward ? 0 : (boxesArray.length - 1);
    const array = this.clueBoxesArray(this.state.activeClueName);
    debugger
    const result = array.indexOf(boxName) === extremeIndex;
    debugger
    return result;
    // const extremeIndex = goBackward ? 0 : (boxesArray.length - 1);
    // return this.clueBoxesArray(this.state.activeClueName)
    //   .indexOf(boxName) === extremeIndex;
  }

  isClueEntryCompleted(clueName, board) {
    // REFACTORING FOR DEBUGGING:
    const result = this.clueBoxesArray(clueName).every(box => {
      return board[parseInt(box[0])][parseInt(box[2])] !== '';
    });
    debugger
    return result;

    // return this.clueBoxesArray(clueName).every(box => {
    //   return board[parseInt(box[0])][parseInt(box[2])] !== '';
    // });

  };

  isLastClueInDirection(clueName, goBackward) {
    // REFACTORING FOR DEBUGGING:
    const cluesArray = this.acrossClues.includes(clueName) ?
      this.acrossClues : this.downClues;
    debugger
    const extremeIndex = goBackward ? 0 : (cluesArray.length - 1);
    debugger
    const result = cluesArray.indexOf(clueName) === extremeIndex;
    debugger
    return result;
    
    // const cluesArray = this.acrossClues.includes(clueName) ?
    //   this.acrossClues : this.downClues;
    // const extremeIndex = goBackward ? 0 : (cluesArray.length - 1);
    // return cluesArray.indexOf(clueName) === extremeIndex;
  };

  isWordcrossCompleted(board) {
    // let flag = true;
    // for (let i = 0; i < this.boxesInCol; i++) {
    //   if (board[i].includes('')) {   
    //     flag = false;
    //   }
    // }
    // return flag;
    const cluesArray = [...this.acrossClues, ...this.downClues]
    debugger
    return cluesArray.every(clue => {
      return this.isClueEntryCompleted(clue, board) === true ;
    })
  };

  isWordcrossSolved(board) {
    let flag = true;
    for (let r = 0; r < this.boxesInCol; r++) {
      for (let c = 0; c < this.boxesInRow; c++) {
        if (
          board[r][c] !== 
          this.props.wordcrossDataSet.solution[r][c]
          ) {
          flag = false;
        }
      }
    }
    debugger
    return flag;
  };




  // other game logic methods
  // ========================

  disableBoxInputs() {
    return document.getElementsByClassName("input-box").disabled = true;
  };

  enableBoxInputs() {
    return document.getElementsByClassName("input-box").disabled = false;
  };

  processSolvedWordcross() {
    if ( this.isWordcrossSolved(this.state.board) === true ){
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
      /* 
        let newIcon;
        check this.displayedDate vs. a new today instance (check the date at
          the moment of solving)
          if (they're ===) {
            check displayedDate vs. User.lastCompletedDate
            if (lastCompletedDate is 1 day prior to displayedDate) {
              prepare object to update User in database
              newUser = {
                ...
                lastCompletedDate: today,
                streak: props.streak ++
              }
            } else {
              lastCompletedDate is null or > 1 day prior to displayedDate
               prepare object to update User in database
              newUser = {
                ...
                lastCompletedDate: today,
                streak: 1
              }             
            }
            newIcon = 18;
            this.props.updateUserStats(newUser);
          } else {
            if puzzle not solved on the displayedDate
            newIcon = 17;
          }
      */
      let newMicro = {
          id: this.props.wordcrossDataSet.id,
          micro_id: this.props.wordcrossDataSet.micro_id,
          solved: this.isWordcrossSolved(this.state.board), // true?
          user_id: this.props.wordcrossDataSet.user_id,
          wordcross_date: this.props.wordcrossDate,
          timer: newTime,
          solving_state: this.state.board,
          // icon: newIcon
      };
      return this.props.updateWordcross(newMicro);
    }
  };



  // methods for handling Modals
  // ===========================

  hideModal() {
    this.setState({ modalType: 'none' });
    if (this.isWordcrossSolved(this.state.board) === false) {
      return this.enableBoxInputs();
    }
  };

  displayPausedModal() {
    this.setState({ modalType: 'paused'})
    return this.disableBoxInputs();
  };

  // *** NEED TO CREATE displayResetModal()

  displaySolvedModal() {
    // *** NEED TO ADD Play Sound !!!
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
// =================

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
    if ( this.state.isTimerRunning === true ) {
      this.incrementSeconds();
      if ( this.state.elapsedSeconds > 59 ) {
        this.setState({ elapsedSeconds: 0 });
        this.incrementMinutes();
        if ( this.state.elapsedMinutes > 59 ) {
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
  // ===========================================

 handleModalButtonClick() {
    if ( 
      this.isWordcrossSolved(this.state.board) === true || 
      this.state.modalType === 'solved'
    ) {
      return this.hideModal();
    } else {
      return this.resumeTimer();
    }
  };

  handlePauseButtonClick() {
    if ( this.state.isTimerRunning === true ) {
      return this.pauseTimer();
    } else {
      return this.resumeTimer();
    }    
  };

  handleResetButtonClick() {
    const newBoard = Object.assign([], this.state.board);
    newBoard.map((row, rowIdx) => {
      row.map((box, colIdx) => {
        if (box !== "#") {
          newBoard[rowIdx][colIdx] = "";
        }
      });
    });
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
    let nextBoxInFocusName;
    
    if ( this.isClueEntryCompleted(clueName, this.state.board) === true || 
      clueName === this.state.activeClueName ) {
    // if the clue clicked is already the activeClue, OR if its entry is
    //   completed, focus on the first box of that clue
      nextBoxInFocusName = this.clueBoxesArray(clueName)[0];
    } else {
      nextBoxInFocusName = this.firstEmptyBoxInClue(clueName, this.state.board);
    }
    return this.setBoxInFocusName(nextBoxInFocusName);
  };
  


    
  // methods for processing user input -- keys
  // =========================================
  
  handleTabOrEnter(shifted) {
    // shifted goes backwards
    let clueArray = this.solvingDirectionCluesArray();
    let nextBoxInFocusName;
    // check if the activeClueName is the last (or first, if shifted) clue
    //   in that direction
    if ( this.isLastClueInDirection(this.state.activeClueName, shifted) === true) {
      // if activeClue is at the extremity, switch directions
      clueArray = this.oppositeCluesArray();
    }
    // get the index for the first (or last, if shifted) clue in the
    //   opposite direction
    const newIndex = shifted ? clueArray.length - 1 : 0;
    // set the newClue
    const newClue = clueArray[newIndex]
    if ( this.isClueEntryCompleted(newClue, this.state.board) === true ) {
      // if this clue is completed, focus on the first box of the clue
      nextBoxInFocusName = this.clueBoxesArray(newClue)[0];
    } else {
      // if this clue is NOT completed, focus on the first empty box in 
      //   the clue entry
      nextBoxInFocusName = this.firstEmptyBoxInClue(newClue, this.state.board);
    }
    return this.setBoxInFocusName(nextBoxInFocusName);
	};

	handleSpacebar(){
		return this.switchSolvingDirection();
	};

	handleDelete(){
    const { board, boxInFocusName } = this.state;
    // Do nothing if the puzzle is solved.
    if ( this.isWordcrossSolved(board) === true ) { return null };    
    return this.updateBoard(boxInFocusName, '');
	};
	
	handleBackspace(){
	
    // Do nothing if the puzzle is solved.
    if ( this.isWordcrossSolved(this.state.board) === true ) { return null }

    const { board, boxInFocusName, activeClueName } = this.state;
    let activeClueBoxesArray = this.clueBoxesArray(activeClueName);
    let nextBoxInFocusName;
    let nextActiveClueName;
    let indexOfLastBoxInClue;
    if ( this.isBoxFilled(boxInFocusName, board) === false ) {
      // if this box is empty
      if ( this.isLastBoxInClueEntry(boxInFocusName, true) === false ) {
        // if the boxInFocus is NOT the FIRST box (since goBackward ==> true)
        //   of the clue's entry
        const currentBoxIndex = activeClueBoxesArray.indexOf(boxInFocusName);
        nextBoxInFocusName = activeClueBoxesArray[currentBoxIndex - 1];
      } else {
        // if the boxInFocus IS the FIRST box of the clue's entry
        if ( this.isLastClueInDirection(activeClueName, true) === false ){
          // if the activeClue is NOT the FIRST (since goBackward === true)
          //   clue of the solvingDirection
          const currentClueIndex = this.solvingDirectionCluesArray().indexOf(activeClueName);
          nextActiveClueName = this.solvingDirectionCluesArray[currentClueIndex - 1];
          activeClueBoxesArray = this.clueBoxesArray(nextActiveClueName);
          indexOfLastBoxInClue = activeClueBoxesArray.length - 1;
          nextBoxInFocusName = nextActiveClueName[indexOfLastBoxInClue];      
        } else {
          // if the activeClue IS the FIRST clue of the solvingDirection
          indexOfLastClueInOppositeDirection = this.oppositeCluesArray().length - 1;
          nextActiveClueName = this.oppositeCluesArray()[indexOfLastClueInOppositeDirection];
          activeClueBoxesArray = this.clueBoxesArray(nextActiveClueName);
          indexOfLastBoxInClue = activeClueBoxesArray.length - 1;
          nextBoxInFocusName = activeClueBoxesArray[indexOfLastBoxInClue];
          this.switchSolvingDirection();
        }
      }
      this.updateBoard(nextBoxInFocusName, '');
      return this.setBoxInFocusName(nextBoxInFocusName);
    } else {
      return this.updateBoard(boxInFocusName, '');
    }
	};

	handleArrowKey(direction) {
    switch(direction) {
      case 'ArrowUp':
        if (this.state.solvingDirection === 'across') {
          this.switchSolvingDirection();
          this.setSolvingDirection('down');
        }
        return this.shiftBoxInFocusAlongGrid( [-1, 0] );
      case 'ArrowDown':
        if (this.state.solvingDirection === 'across') {
          this.switchSolvingDirection();
          this.setSolvingDirection('down');
        }
        return this.shiftBoxInFocusAlongGrid( [1, 0] );
      case 'ArrowRight':
        if (this.state.solvingDirection === 'down') {
          this.switchSolvingDirection();
          this.setSolvingDirection('across');
        }
        return this.shiftBoxInFocusAlongGrid( [0, 1] );
      case 'ArrowLeft':
        if (this.state.solvingDirection === 'down') {
          this.switchSolvingDirection();
          this.setSolvingDirection('across');
        }        
        return this.shiftBoxInFocusAlongGrid( [0, -1] );
      default:
        return null;
    }
  };
    
  shiftBoxInFocusAlongGrid(vector) {
    const startingRow = parseInt(this.state.boxInFocusName[0]);
    const startingCol = parseInt(this.state.boxInFocusName[2]);
    let nextRow = startingRow + vector[0];
    let nextCol = startingCol + vector[1];
    let nextBoxName;
    
    const isCoordValid = (row, col, vector) => {
      if ( this.isBoxWithinGrid(row, col) === false ) {
        return false;
      } else if ( this.isBlackBox(row, col) === false ) {
        return true;
      } else {
        nextRow = row + vector[0];
        nextCol = col + vector[1];
        isCoordValid(nextRow, nextCol, vector);
      }
    };

    if (isCoordValid(nextRow, nextCol, vector) === true ) {
      nextBoxName = nextRow.toString() + ',' + nextCol.toString();
    } else { 
      nextBoxName = startingRow.toString() + ',' + startingCol.toString();
    }
    return this.setBoxInFocusName(nextBoxName);
  };
  
  handleCharacterKey(keyName) {
    let nextBoxInFocusName;
    let nextActiveClueName;
    const char = `${keyName}`.toUpperCase();
    
    const regex = new RegExp(/[A-Za-z]{1}/);
    if ( regex.test(keyName) === false ) { return null };


    // mock up the next board state so as not to depend on setState updating
    //  the board asynchronously, which won't update in time for these
    //  calculations
    const nextBoard = this.draftBoard(this.state.boxInFocusName, char);
    // check mock up for completion
    if ( this.isWordcrossCompleted(nextBoard ) === false ){
      // if board is incomplete, 
      debugger
      // check activeClue's entry for completion
      if ( this.isClueEntryCompleted(
          this.state.activeClueName, 
          nextBoard 
        ) === true ) {
          // if entry IS complete, 
          debugger
          // check if that clue is last in its direction
        if ( this.isLastClueInDirection(
            this.state.activeClueName,
            false 
          ) === true ) {
          // if it was the last clue in this direction, 
          debugger
          // switch to the opposite direction and find the first 
          //   incomplete clue entry
          nextActiveClueName = this.firstIncompleteClueEntryInDirection(
            this.oppositeClueNamesArray()
          );
          nextBoxInFocusName = this.firstEmptyBoxInClue(
            nextActiveClueName,
            nextBoard
          );
          return setState({ 
            board: nextBoard,
            boxInFocusName: nextBoxInFocusName,
            solvingDirection: this.oppositeSolvingDirection()
          });
        } else {
          // if not last, find the next incomplete clue entry in the solving
          //   direction
          nextActiveClueName = this.firstIncompleteClueEntryInDirection(
            this.solvingDirectionCluesArray(),
            nextBoard
          );
          nextBoxInFocusName = this.firstEmptyBoxInClue(
            nextActiveClueName,
            nextBoard
          );
          return this.setState({ 
            board: nextBoard,
            boxInFocusName: nextBoxInFocusName
          });
        }
      } else {
        // if activeClue's entry is NOT complete, find first empty box in 
        //   this clue entry 
        nextBoxInFocusName = this.firstEmptyBoxInClue(
          this.state.activeClueName,
          nextBoard
        );
        return this.setState({ 
          board: nextBoard,
          boxInFocusName: nextBoxInFocusName
        });
      } 
    } else {
    // if board IS completed, the async board update can be called, and
    //   the boxInFocusName, activeClueName, etc. all stay the same.

    this.setState({ board: nextBoard });
      // then check if completed Wordcross is solved correctly
      if ( this.isWordcrossSolved(nextBoard) === false ) {
        // if complete but not solved
        return this.displayKeepTryingModal();
      } else {
        // if Wordcross IS solved, YAY!
        return this.processSolvedWordcross();
      }
    }
  };




  // and, at long last, the render method
  // ====================================
   
  render(){
    debugger
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
                    this.clueBoxesArray(this.state.activeClueName)
                  } // if boxInFocus or activeClueName in state is corrupted, 
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