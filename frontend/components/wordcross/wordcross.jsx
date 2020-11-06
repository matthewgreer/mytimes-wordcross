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
      // fetchWordcross, updateWordcross
    // receives as state:
      // referringComponent
    this.state = {
      modalType: 'ready',
      wordcrossCategory: 'Micro',
      wordcrossDataSet: {},
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
    this.date = (this.state.referringComponent === 'dashboard' ?
      this.today :
      new Date(
        Date.parse(this.props.wordcrossDate)
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
    // switch (this.props.wordcrossType) {
    //   case 'Micro':
    //     this.setState(state =>({ wordcrossCategory: 'Micro' }));
    //     this.props.fetchUserMicro(
    //       this.props.userId,
    //       this.props.wordcrossDate
    //     );
    //     break;
    //   case 'Daily':
    //     this.setState(state =>({ wordcrossCategory: 'Daily'}));
    //     // this.props.fetchUserDaily(
    //     //   this.props.userId,
    //     //   this.props.wordcrossDate
    //     // );
    //     break;
    // }
    this.props.fetchWordcross(
      this.props.userId,
      this.props.wordcrossDate
    );
  };

  componentDidUpdate() {
    if (this.props.wordcrossType === 'Micro' && 
    this.state.wordcrossData != this.props.userMicro) {
      this.setState(state => ({
        wordcrossData: this.props.userMicro
      }));
    }
    if (this.props.wordcrossType === 'Daily' && 
    this.state.wordcrossData != this.props.userDaily) {
      this.setState(state => ({
        wordcrossData: this.props.userDaily
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
          wordcrossCategory={this.state.wordcrossCategory}
          time={this.state.time}
        />
        {this.props.wordcrossDataSet && 
          <div>
            <WordcrossHeader 
              displayedDate={this.displayedDate}
              author={this.props.wordcrossDataSet.author}
            />
            <WordcrossBoard 
              clues={this.state.wordcrossDataSet.clueSet}
            />  
          </div>
        }
      </section>
    );
  };
;}


export default Wordcross;
