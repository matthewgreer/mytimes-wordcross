// This component should render the following child components with
  // their necessary props:
    // Modal? (see below)
    // PuzzleHeader
      // Modal? (might be good to have it be a child of PuzzleHeader, since it
        // will need props from the Timer)
      // Prob don't need these to be separate components:
        // TitleDate
        // Byline
        // Toolbar
          // Timer
          // ResetButton
    // PuzzleBoard - (should function for UserMicro or UserDaily)
      // CurrentClue
      // PuzzleGrid
      // ClueList

import React from 'react';
import Advert from '../body/advert';
import Modal from './modal/modal';
import PuzzleHeader from './puzzle_header/puzzle_header';
import PuzzleBoard from './puzzle_board/puzzle_board';

class Wordcross extends React.Component {
  constructor(props){
    super(props);
    // receives as props: 
      // userId, 
      // puzzleDate, 
      // puzzleType,
      // fetchUserMicro(), updateUserMicro()
      // fetchUserDaily(), updateUserDaily()
    // receives as state:
      // referringComponent
    this.state = {
      modalType: 'ready',
      puzzleCategory: 'Micro',
      puzzleData: {},
    // once I understand how to determine if a user is coming from the dashboard
      // or the archive, I'll need to write logic to determine puzzleCategory,
      // probably in componentDidMount.
      // this.props.puzzleType === "micro" || "daily", but "micro" needs to be
      // capitalized and "daily" puzzles need to have puzzleCategory = day of 
      // the week. This would vary depending on the prior url, because if a
      // user navigates here from the dashboard, the date is spoofed to be the
      // current day, but if from the archive, it is the puzzleDate as usual.
      time: '0:00'
    // I still have to figure out how to do the timer.
    }

    // Display the ACTUAL DATE of the puzzle in the db if the user
      // navigates here from the archive page (don't know how to tell yet).
      // Display the current date if the user navigates here from the 
      // dashboard.
    this.today = new Date();
    this.date = (this.state.referringComponent === 'dashboard' ?
      this.today :
      new Date(
        Date.parse(this.props.puzzleDate)
      ) 
    );
        
    this.displayedDate = this.date.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
      }
    );

    this.hideModal = this.hideModal.bind(this)

  };

  componentDidMount() {
    debugger
    switch (this.props.puzzleType) {
      case 'micro':
        this.setState(state =>({ puzzleCategory: 'Micro' }));
        this.props.fetchUserMicro(
          this.props.userId,
          this.props.puzzleDate
        );
        break;
      case 'daily':

        this.setState(state =>({ puzzleCategory: 'Daily'}));


        break;
    }
  };

  componentDidUpdate() {
    if (this.props.puzzleType === 'micro' && 
    this.state.puzzleData != this.props.userMicro) {
      this.setState(state => ({
        puzzleData: this.props.userMicro
      }));
    }
    if (this.props.puzzleType === 'daily' && 
    this.state.puzzleData != this.props.userDaily) {
      this.setState(state => ({
        puzzleData: this.props.userDaily
      }));
    }
  }

  hideModal() {
    this.setState(state => ({ modalType: 'none' }));
    // callback? to start timer, etc.?
  };

  render(){
    return (
      <section className='wordcross-container'>
        <div className='banner-buffer'></div>
        <Advert isSubscriber='subscriber' />
        <Modal 
          modalType={this.state.modalType} 
          onClick={this.hideModal}
          puzzleCategory={this.state.puzzleCategory}
          time={this.state.time}
        />
        {this.props.userMicro || this.props.userDaily && 
          <div>
            <PuzzleHeader 
              displayedDate={this.displayedDate}
              author={this.props.userMicro.author}
            />
            <PuzzleBoard 
              clues={this.state.puzzleData.clueSet}
            />  
          </div>
        }
      </section>
    );
  };
;}


export default Wordcross;
