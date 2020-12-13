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
    this.setBoard = this.setBoard.bind(this);
    this.setBoxInFocusName = this.setBoxInFocusName.bind(this);
    this.setActiveClueName = this.setActiveClueName.bind(this);
    this.setSolvingDirection = this.setSolvingDirection.bind(this);
    this.boxPosition = this.boxPosition.bind(this);
    this.draftBoard = this.draftBoard.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.updateActiveClueName = this.updateActiveClueName.bind(this);
    this.updateCrossingClueName = this.updateCrossingClueName.bind(this);
    this.updateSolvingDirection = this.updateSolvingDirection.bind(this);
    this.switchSolvingDirection = this.switchSolvingDirection.bind(this);
    this.oppositeSolvingDirection = this.oppositeSolvingDirection.bind(this);
    this.findClueForBoxByDirection = this.findClueForBoxByDirection.bind(this);
    this.directionOfClue = this.directionOfClue.bind(this);
    this.findCluesArray = this.findCluesArray.bind(this);
    this.solvingDirectionCluesArray = this.solvingDirectionCluesArray.bind(this);
    this.oppositeCluesArray = this.oppositeCluesArray.bind(this);
    this.clueBoxesArray = this.clueBoxesArray.bind(this);
    this.nextEmptyBoxInClueEntry = this.nextEmptyBoxInClueEntry.bind(this);
    this.nextIncompleteClueEntry = this.nextIncompleteClueEntry.bind(this);

    // methods to test for completion (boolean)
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
    // this.displayResetModal = this.displayResetModal.bind(this);              *** NEED TO CREATE
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
      const firstClue = this.nextIncompleteClueEntry(
        this.state.activeClueName,
        this.solvingDirectionCluesArray(),
        this.state.board,
        false
      );
      const firstBox = this.clueBoxesArray(firstClue)[0];
      const nextBoxInFocusName = this.nextEmptyBoxInClueEntry(
        firstBox,
        firstClue,
        this.state.board
      );
      return this.setBoxInFocusName(nextBoxInFocusName);
    }

		if (this.state.boxInFocusName !== prevState.boxInFocusName) {
      // if the boxInFocus has changed:
      if (this.state.solvingDirection !== prevState.solvingDirection) {
        // AND IF the solvingDirection has also changed,
        // need to find and set activeClue accordingly
        const nextActiveClueName = this.findClueForBoxByDirection(
          this.state.boxInFocusName,
          this.state.solvingDirection 
        );
        return this.setActiveClueName(nextActiveClueName);
      } else {
        // if just the boxInFocus changed, 
        // update the active & crossing clues
        this.updateActiveClueName();
        return this.updateCrossingClueName();
      }
		}

		if (this.state.activeClueName !== prevState.activeClueName) {
      // if the activeClue has changed, 
      // update the crossing clue and the solving direction
      this.updateCrossingClueName();
      return this.updateSolvingDirection();
    }
  };

  componentWillUnmount() {
    // clearInterval(this.countUp, 1000);                                       !!!!!! ISSUE: counter isn't clearing properly in this lifecycle method
    // return this.saveWordcross();
  };




  // methods for setting up the wordcross
  // ====================================

  createBoard() {
    // give a less cumbersome name to the clue set
    this.clueSet = this.props.wordcrossDataSet.clue_set;
    // create the board in state based on solving_state from db
    return this.setState({
      board: Object.assign([], this.props.wordcrossDataSet.solving_state),
    });    
  };

  initializeWordcross() {
    // set up timer, grid, clue list, clues, date, etc.
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
    setInterval(this.countUp, 1000);                                         // !!!!!! should be commented out for debugging render or componentDidUpdate
    this.isWordcrossLoaded = true;

    // find the box from which to start
    const { board, activeClueName } = this.state;
    const cluesArray = this.solvingDirectionCluesArray();
    let nextBoxInFocusName;
    let nextActiveClueName;
    // if the wordcross IS completed, 
    if ( this.isWordcrossCompleted(board) === true ) {
      // focus on the first box of the first across clue
      debugger
      nextActiveClueName = this.acrossClues[0];
      nextBoxInFocusName = this.clueBoxesArray(nextActiveClueName)[0];
      return this.setBoxInFocusName(nextBoxInFocusName);
    } else {
    // if the wordcross is NOT completed,
      // if the activeClue's entry IS completed, 
      if ( this.isClueEntryCompleted(activeClueName, board) === true ) {
        // find the first incomplete clue entry
        nextActiveClueName = this.nextIncompleteClueEntry(
          activeClueName,
          cluesArray,
          board,
          false
        );
        // and focus on the first empty box of that clue entry
        nextBoxInFocusName = this.nextEmptyBoxInClueEntry(
          this.clueBoxesArray(nextActiveClueName)[0],
          nextActiveClueName,
          board
        );
        return this.setBoxInFocusName(nextBoxInFocusName);
      } else {
        // if the activeClue's entry is NOT completed, 
        // focus will go to the first EMPTY box in that clue's entry
        nextBoxInFocusName = this.nextEmptyBoxInClueEntry(
          this.clueBoxesArray(activeClueName)[0],
          activeClueName,
          board);
        return this.setBoxInFocusName(nextBoxInFocusName);
      }
    }
  };

  sortClues() {
    // create an ordered array of clueNames for each direction
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
    //  wordcross for the current date
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
    // an attempt to keep wordcross size proportionate to the number of         *** NEEDS WORK
    //   boxes in the grid
    // it should modify not only the box size, but font-sizes as well
    this.boxesInRow = this.props.wordcrossDataSet.solution[0].length;
    this.boxesInCol = this.props.wordcrossDataSet.solution.length;
    const longerSide = this.boxesInRow >= this.boxesInCol ?
      this.boxesInRow : this.boxesInCol;
    return this.boxRatio = 50 / longerSide;
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
 
  setBoard(newBoard) {
    return this.setState({ board: newBoard });
  };

  setBoxInFocusName(boxName) { 
    return this.setState({ boxInFocusName: boxName });
  };

  setActiveClueName(clueName) {
    return this.setState({ activeClueName: clueName });
  };

  setSolvingDirection(direction) {
    return this.setState({ solvingDirection: direction });
  };

  boxPosition(boxName) {
    const coord = boxName.split(',');
    return coord.map(numString => {
      return parseInt(numString);
    });
  };

  draftBoard(boxName, newValue) {
    // creates a mock-up of the next board state, for determining subsequent
    //  behavior without having to wait for asynchronous state update
    const updatedBoard = Object.assign([], this.state.board);
    // const row = parseInt(boxName[0]);
    // const col = parseInt(boxName[2]);
    const row = this.boxPosition(boxName)[0];
    const col = this.boxPosition(boxName)[1];
    updatedBoard[row][col] = newValue;
    return updatedBoard;
  };

  updateBoard(boxName, newValue) {
    // inserts a newValue in the corresponding position in the board
    const newBoard = this.draftBoard(boxName, newValue);
    this.setBoard(newBoard);
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

  updateSolvingDirection() {
    const direction = this.clueSet[this.state.activeClueName].direction === 'across' ?
      'across' : 'down';
    return this.setSolvingDirection(direction);
  };

  switchSolvingDirection() { 
    return this.setActiveClueName(this.state.crossingClueName);
  };

  oppositeSolvingDirection() {
    return this.state.solvingDirection === 'across' ?
      'down' :
      'across';
  };

  findClueForBoxByDirection(boxName, direction) {
    const cluesArray = this.findCluesArray(direction);
    return cluesArray.find(clueName => {
      return this.clueBoxesArray(clueName).includes(boxName);
    });
  };  

  directionOfClue(clueName) {
    if (clueName[0] === 'a') {
      return 'across';
    } else {
      return 'down';
    }
  }

  findCluesArray(direction) {
    return direction === 'across' ?
    this.acrossClues :
    this.downClues;
  };

  solvingDirectionCluesArray() {
    return this.findCluesArray(this.state.solvingDirection);
  };

  oppositeCluesArray(array) {
    return this.directionOfClue(array[0]) === 'across' ? 
      this.downClues :
      this.acrossClues;
  };

  clueBoxesArray(clueName) {
    return this.clueSet[clueName].boxes;
  };

  nextEmptyBoxInClueEntry(boxName, clueName, board) {
    if (this.isBoxFilled(boxName, board) === false) { 
      return boxName 
    } else {
      const boxesArray = this.clueBoxesArray(clueName);
      const boxInFocusIndex = boxesArray.indexOf(boxName);
      const nextIndex = (boxInFocusIndex + 1) % boxesArray.length;
      return this.nextEmptyBoxInClueEntry(boxesArray[nextIndex], clueName, board) 
    }
  }

  nextIncompleteClueEntry(clueName, cluesArray, board, goBackward) {
    if (this.isWordcrossCompleted(board) === true) { 
      return this.state.activeClueName 
    }
    const currentIndex = cluesArray.indexOf(clueName);
    const oppositeArray = this.oppositeCluesArray(cluesArray);
    const firstOppositeClue = goBackward ? 
      oppositeArray[oppositeArray.length - 1] :
      oppositeArray[0];
    const splitArray = goBackward ?
      cluesArray.slice(0, currentIndex) :
      cluesArray.slice(currentIndex);
    let nextIncompleteClue;
    if (goBackward === false) {
      for ( let i = 0; i < splitArray.length; i++ ) {
        if (this.isClueEntryCompleted(splitArray[i], board) === false) {
          nextIncompleteClue = splitArray[i];
          break;
        }
      }
    } else {
      for ( let i = splitArray.length - 1; i >= 0; i-- ) {
        if (this.isClueEntryCompleted(splitArray[i], board) === false) {
          nextIncompleteClue = splitArray[i];
          break;
        }
      }
    }

    if (nextIncompleteClue) {
      return nextIncompleteClue;
    } else {
      this.setSolvingDirection(this.oppositeSolvingDirection());
      return this.nextIncompleteClueEntry(
        firstOppositeClue,
        oppositeArray,
        board,
        goBackward
      );
    }
  };




  // methods to test for completion (boolean)
  // =======================================================


  isBoxFilled(boxName, board) {
    // const row = parseInt(boxName[0]);
    // const col = parseInt(boxName[2]);
    const row = this.boxPosition(boxName)[0];
    const col = this.boxPosition(boxName)[1];    
    return board[row][col] !== '';
  };

  isClueEntryCompleted(clueName, board) {
    return this.clueBoxesArray(clueName).every(box => {
      // return board[parseInt(box[0])][parseInt(box[2])] !== '';
      const row = this.boxPosition(box)[0];
      const col = this.boxPosition(box)[1];
      return board[row][col] !== '';
    });

  };

  isWordcrossCompleted(board) {
    const cluesArray = [...this.acrossClues, ...this.downClues]
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
      ];                                                                        // *** need to add icon, streak behavior
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
      if (this.props.wordcrossType === 'Micro'){
        let newMicro = {
          id: this.props.wordcrossDataSet.id,
          micro_id: this.props.wordcrossDataSet.micro_id,
          solved: this.isWordcrossSolved(this.state.board) === true,
          user_id: this.props.wordcrossDataSet.user_id,
          wordcross_date: this.props.wordcrossDate,
          timer: newTime,
          solving_state: this.state.board,
          // icon: newIcon
        }
        return this.props.updateWordcross(newMicro);
      } else {
        let newDaily = {
          id: this.props.wordcrossDataSet.id,
          daily_id: this.props.wordcrossDataSet.daily_id,
          solved: this.isWordcrossSolved(this.state.board) === true,
          user_id: this.props.wordcrossDataSet.user_id,
          wordcross_date: this.props.wordcrossDate,
          timer: newTime,
          solving_state: this.state.board,
          // icon: newIcon
        }
        return this.props.updateWordcross(newDaily);
      }
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

  /*
    displayResetModal() {
      this.setState({ modalType: 'reset' })
      return this.disableBoxInputs();
    }
  */


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

      /* 
        else if (this.state.modalType === 'reset') {
          return this.resetTimer();                                               ??? reset timer? cheating. continue timer from where it was, more likely
        }

        OR

        else if (this.state.modalType === 'reset') {
          return this.resetPuzzle();                                              ??? abstract the handleResetButtonClick method into 
                                                                                        1. handleResetButtonClick, which displays the "Are you sure?" modal
        }                                                                               2. resetPuzzle, which replaces all non-# boxes with "", as in the current
                                                                                          version of handleResetButtonClick
      */
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
    return this.setBoard(newBoard);
  };
  
  handleBoxClick(boxName) {
    return (
      (boxName === this.state.boxInFocusName) ?
       this.switchSolvingDirection()  : 
       this.setBoxInFocusName(boxName)
      );
	};
  
	handleClueClick(clueName) {
    const { activeClueName, board } = this.state;
    const nextDirection = this.directionOfClue(clueName);
    let nextBoxInFocusName;
    const firstBoxOfClue = this.clueBoxesArray(clueName)[0]
    if ( this.isClueEntryCompleted(clueName, board) === true || 
      clueName === activeClueName ) {
    // if the clue clicked is already the activeClue, OR if its entry is
    //   completed, focus on the first box of that clue
      nextBoxInFocusName = firstBoxOfClue;
    } else {
      nextBoxInFocusName = this.nextEmptyBoxInClueEntry(
        firstBoxOfClue,
        clueName,
        board
      );
    }
    this.setSolvingDirection(nextDirection);
    return this.setBoxInFocusName(nextBoxInFocusName);
  };
  


    
  // methods for processing user input -- keys
  // =========================================
  
  handleTabOrEnter(shifted) {
    // shifted goes backwards
    const { activeClueName, board, solvingDirection } = this.state;
    let cluesArray = this.solvingDirectionCluesArray();
    const extremeIndex = shifted ? 0 : (cluesArray.length - 1);
    let newIndex;
    let newClue;
    let nextDirection;
    let nextBoxInFocusName;
    
    // check if the activeClueName is the last (or first, if shifted) clue
    //   in that direction
    if ( cluesArray.indexOf(activeClueName) === extremeIndex ) {
      // if activeClue IS at the extremity, switch directions
      cluesArray = this.oppositeCluesArray(cluesArray);
       // get the index for the first (or last, if shifted) clue in the
      //   opposite direction
      newIndex = shifted ? cluesArray.length - 1 : 0;
      // set the newClue
      newClue = cluesArray[newIndex]
      nextDirection = this.oppositeSolvingDirection();
    } else {
      // if activeClueName is NOT at the extremity,
      const currentIndex = cluesArray.indexOf(activeClueName);
      newIndex = shifted ? currentIndex - 1 : currentIndex + 1;
      newClue = cluesArray[newIndex];
      nextDirection = solvingDirection;
    }

    // next, check if the next activeClue is completed or not
    if ( this.isClueEntryCompleted(newClue, board) === true ) {
      // if this clue is completed, focus on the first box of the clue
      nextBoxInFocusName = this.clueBoxesArray(newClue)[0];
    } else {
      // if this clue is NOT completed, focus on the first empty box in 
      //   the clue entry
      nextBoxInFocusName = this.nextEmptyBoxInClueEntry(
        this.clueBoxesArray(newClue)[0],
        newClue,
        board
      );
    }
    this.setSolvingDirection(nextDirection);
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
    let priorClueName;
    let previousBox;
    let nextDirection;
    const { board, boxInFocusName, activeClueName } = this.state;
    const oppositeClues = this.oppositeCluesArray(this.state.solvingDirection);
    const activeClueIndex = this.solvingDirectionCluesArray()
      .indexOf(activeClueName);
    if ( activeClueIndex > 0 ) {
      // if activeClue is not the first clue in its direction, assign the clue
      //   at the previous index
      priorClueName = this.solvingDirectionCluesArray()[activeClueIndex - 1];
    } else {
      // if activeClue IS the first clue in its direction, assign the clue
      //   at the final index of the opposite direction
      priorClueName = oppositeClues[oppositeClues.length - 1];
    }
    const activeClueBoxesArray = this.clueBoxesArray(activeClueName);
    const priorClueBoxesArray = this.clueBoxesArray(priorClueName);
    const boxInFocusIndex = activeClueBoxesArray.indexOf(boxInFocusName);
    if ( boxInFocusIndex > 0 ) {
      // if boxInFocus is not the first box in the clue entry, assign the box
      //   at the previous index
      previousBox = activeClueBoxesArray[boxInFocusIndex - 1];
      nextDirection = this.state.solvingDirection;
    } else {
      // if boxInFocus IS the first box in the clue entry, assign the last box
      //   of the prior clue entry
      previousBox = priorClueBoxesArray[priorClueBoxesArray.length - 1];
      nextDirection = this.directionOfClue(priorClueName);
    }
    // Do nothing if the puzzle is solved.
    if ( this.isWordcrossSolved(board) === true ) {
      return null 
    } else {
      // if boxInFocus is filled
      if ( this.isBoxFilled(boxInFocusName, board) === true ) {
        // clear the current box and keep focus where it is
        return this.updateBoard(boxInFocusName, '');
      } else {
      // if boxInFocus is empty
        // shift focus to the previous box and clear it
        this.updateBoard(previousBox, '');
        this.setSolvingDirection(nextDirection);
        return this.setBoxInFocusName(previousBox);
      }
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
    // const startingRow = parseInt(this.state.boxInFocusName[0]);
    // const startingCol = parseInt(this.state.boxInFocusName[2]);
    const startingRow = this.boxPosition(this.state.boxInFocusName)[0];
    const startingCol = this.boxPosition(this.state.boxInFocusName)[1];    
    let nextRow = startingRow + vector[0];
    let nextCol = startingCol + vector[1];
    let nextBoxName;

    const  isBoxWithinGrid = (row, col) => {
      return (
        row >= 0 && 
        col >= 0 && 
        row < this.boxesInCol &&
        col < this.boxesInRow
      )
    };

    const isCoordValid = (row, col, vector) => {
      if ( isBoxWithinGrid(row, col) === false ) {
        // coordinates outside the grid are invalid
        return false;
      } else if ( this.state.board[row][col] !== '#' ) {
        // if the coordinates are not those of a black box, 
        return true;
      } else {
        // if it IS a black box, continue looking along the same vector
        //   until a valid box is reached, or the coordinates exceed the 
        //   grid bounderies, in which case the starting point will 
        //   retain focus
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
    const { activeClueName, boxInFocusName } = this.state;
    let nextActiveClueName;
    let nextBoxInFocusName;
    const char = `${keyName}`.toUpperCase();
    
    const regex = new RegExp(/[A-Za-z]{1}/);
    // accept letter input only, and only one character.
    //  future updates may include a rebus feature, which allows for more than
    //  one letter to occupy a box. Rebuses are often a component of Thursday
    //  daily puzzles in the NYT Crossword.
    if ( regex.test(keyName) === false ) { 
      return null 
    } else {
      // mock up the next board state so as not to depend on setState updating
      //  the board asynchronously; it won't update in time for these calculations
      const nextBoard = this.draftBoard(boxInFocusName, char);
      debugger
      // is this clue entry completed?
      if ( this.isClueEntryCompleted(activeClueName, nextBoard) === false ) {
        // if not 
        // find next empty box in this clue entry
        nextBoxInFocusName = this.nextEmptyBoxInClueEntry(
          boxInFocusName,
          activeClueName,
          nextBoard
        );
        this.setBoard(nextBoard);
        return this.setBoxInFocusName(nextBoxInFocusName);        
        
      } else {
        debugger
        // if so, 
        // search forward for the next clue entry with an empty box
        nextActiveClueName = this.nextIncompleteClueEntry(
          activeClueName,
          this.solvingDirectionCluesArray(),
          nextBoard,
          false
        );

        if (nextActiveClueName === activeClueName) {
          // wordcross is complete, the async board update can be called, 
            // the boxInFocusName, activeClueName, etc. all stay the same.
            this.setBoard(nextBoard);
            // then check if completed Wordcross is solved correctly
            if ( this.isWordcrossSolved(nextBoard) === false ) {
              // if complete but not solved
              return this.displayKeepTryingModal();
            } else {
              // if Wordcross IS solved, YAY!
              return this.processSolvedWordcross();
            }

        } else {
          // if wordcross is NOT complete, find next empty box in this new clue
          debugger
          const nextClueBoxesArray = this.clueBoxesArray(nextActiveClueName);
          const nextClueFirstBox = nextClueBoxesArray[0];
          nextBoxInFocusName = this.nextEmptyBoxInClueEntry(
            nextClueFirstBox, 
            nextActiveClueName, 
            nextBoard
          );
          this.setBoard(nextBoard);
          return this.setBoxInFocusName(nextBoxInFocusName);
        }
      }
    };
};



  // and, at long last, the render method
  // ====================================
   
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
                    this.clueBoxesArray(this.state.activeClueName)
                  }
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