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
    // WordcrossBoard - (should function for UserMicro or UserDaily)
      // CurrentClue
      // WordcrossGrid
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
      // wordcrossDataSet: {},
    // once I understand how to determine if a user is coming from the dashboard
      // or the archive, I'll need to write logic to determine wordcrossCategory,
      // probably in componentDidMount.
      // this.props.wordcrossType === "micro" || "daily", but "micro" needs to be
      // capitalized and "daily" wordcrosses need to have wordcrossCategory = day of 
      // the week. This would vary depending on the prior url, because if a
      // user navigates here from the dashboard, the date is spoofed to be the
      // current day, but if from the archive, it is the wordcrossDate as usual.
      time: '0:00'
    // I still have to figure out how to do the timer.
    }

    // Display the ACTUAL DATE of the wordcross in the db if the user
      // navigates here from the archive page (don't know how to tell yet).
      // Display the current date if the user navigates here from the 
      // dashboard.
    this.today = new Date();
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
    this.setState(state => ({ modalType: 'none' }));
    // callback? to start timer, etc.?
  };

  render(){
    debugger
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
          <div className="wordcross-header-and-board-container">
            <WordcrossHeader 
              displayedDate={this.displayedDate}
              author={this.props.wordcrossDataSet.author}
            />
            <WordcrossBoard 
              data={this.state.wordcrossDataSet}
            />  
          </div>
        }
      </section>
    );
  };
;}


export default withRouter(Wordcross);
