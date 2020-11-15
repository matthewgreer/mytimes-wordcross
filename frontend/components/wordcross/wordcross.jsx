// This component should render the following child components with
  // their necessary props:
    // Modal? (see below)
    // WordcrossHeader
      // Modal? (might be good to have it be a child of WordcrossHeader, since it
        // will need props from the Timer)
      // Prob don't need these to be separate components:
        // TitleDate
        // Byline
        // Toolbar
          // Timer
          // ResetButton
    // CurrentClue
    // WordcrossBoard - (should function for UserMicro or UserDaily)
    // ClueList

import React from 'react';
import { withRouter } from 'react-router-dom'
import Advert from '../body/advert';
import Modal from './modal/modal';
import WordcrossHeader from './wordcross_header/wordcross_header';
import WordcrossBoard from './wordcross_board/wordcross_board';

class Wordcross extends React.Component {
  constructor(props){
    super(props);
    // receives as props: 
      // userId, 
      // wordcrossDate, 
      // wordcrossType,
      // fetchWordcross, 
      // updateWordcross,
      // location.state.referringComponent
    this.state = {
      modalType: 'ready',
      wordcrossCategory: 'Micro',
      time: '0:00'  // TODO !!! I still have to figure out how to do the timer. !!!
    }


    // need current date, for determining whether the user completed the
      // puzzle on the day of (gold star) or afterwards (blue star)
    this.today = new Date();

    // Display the ACTUAL DATE of the wordcross in the db if the user
      // navigates here from the archive page. Display the current date if 
      // the user navigates here from the dashboard.
      // This will be set by the calculateDisplayedState method
    this.displayedDate = "";

    this.wordcrossDataToState = this.wordcrossDataToState.bind(this);
    this.calculateDisplayedDate = this.calculateDisplayedDate.bind(this);
    this.hideModal = this.hideModal.bind(this);

  };

  componentDidMount() {
    this.props.fetchWordcross(
      this.props.userId,
      this.props.wordcrossDate
    );
  };

  componentDidUpdate() {
    if (!this.state.wordcrossDataSet) {this.wordcrossDataToState();}
    if (!this.displayedDate) {this.calculateDisplayedDate();}
  };

  wordcrossDataToState() {
    this.setState({
      wordcrossDataSet: this.props.wordcrossDataSet
    });
  };

  calculateDisplayedDate() {
    let date;
    if (this.props.location.state.referringComponent && 
      this.props.location.state.referringComponent === 'dashboard') {
      date = this.today
    } else {
      date = new Date(
        Date.parse(this.props.wordcrossDate)
      ) 
    }
    return (
      this.displayedDate = date.toLocaleDateString(
        undefined, {
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric'
        }
      )
    );
  };

  hideModal() {
    this.setState(({ modalType: 'none' }));
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
          wordcrossCategory={this.state.wordcrossCategory}
          time={this.state.time}
        />
        {this.props.wordcrossDataSet && 
          <div className="wordcross-header-board-and-clues">
            <WordcrossHeader 
              displayedDate={this.displayedDate}
              author={this.props.wordcrossDataSet.author}
            />
            <WordcrossBoard 
              data={this.state.wordcrossDataSet}
              // ALERT !!! Why do I need to copy props to state? Not good practice.
                // Can't I just pass this.props.wordcrossDataSet?
            />
          </div>
        }
      </section>
    );
  };
;}


export default withRouter(Wordcross);
