import React from 'react';
import { withRouter } from 'react-router-dom'
import Advert from '../body/advert';
import Modal from './modal/modal';
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
      referringComponent: "", // buggy and doesn't work upon user reload
      displayedDate: "",
      time: '0:00'  // TODO !!! I still have to figure out how to do the timer. !!!
    }


    // need current date, for determining whether the user completed the
      // puzzle on the day of (gold star) or afterwards (blue star)
    this.today = new Date();

    // Display the ACTUAL DATE of the wordcross in the db if the user
      // navigates here from the archive page. Display the current date if 
      // the user navigates here from the dashboard.
      // This will be set by the calculateDisplayedState method
    // this.displayedDate = "";
    this.calculateDisplayedDate = this.calculateDisplayedDate.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.displaySolvedModal = this.displaySolvedModal.bind(this);
    this.displayKeepTryingModal = this.displayKeepTryingModal.bind(this);
  };

  componentDidMount() {
    this.props.fetchWordcross(
      this.props.userId,
      this.props.wordcrossDate
    );
  };

  componentDidUpdate() {
        if (!this.state.referringComponent ) {
      if (this.props.location.state && 
        this.state.referringComponent != 
        this.props.location.state.referringComponent) {
                this.setState({ 
          referringComponent: this.props.location.state.referringComponent 
        });
      } else {
                this.setState({
          referringComponent: "refresh"
        });
      }
    } 
        if (
      this.state.referringComponent && 
      this.props.wordcrossDate && 
      !this.state.displayedDate
      ) {
              this.calculateDisplayedDate();
    }
  };

  calculateDisplayedDate() {
    let date;
    if (this.state.referringComponent != 'archive') {
            date = this.today;
    } else {
            date = new Date(
        Date.parse(this.props.wordcrossDate)
      );
    }
    const dateToDisplay = date.toLocaleDateString(
      undefined, {
        weekday: 'long', 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    );
        return this.setState({
      displayedDate: dateToDisplay
    })
  };

  hideModal() {
    this.setState({ modalType: 'none' });
    // callback? to start timer, etc.?
  };

  displaySolvedModal() {
    this.setState({ modalType: 'solved'})
  };

  displayKeepTryingModal() {
    this.setState({ modalType: 'keepTrying'})
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
          // <div className="wordcross-header-board-and-clues">
          //   <WordcrossHeader 
          //     displayedDate={this.state.displayedDate}
          //     author={this.props.wordcrossDataSet.author}
          //   />
            <WordcrossBoard 
              author={this.props.wordcrossDataSet.author}
              clueSet={this.props.wordcrossDataSet.clue_set}
              displayedDate={this.state.displayedDate}
              labelSet={this.props.wordcrossDataSet.label_set}
              solution={this.props.wordcrossDataSet.solution}
              solved={this.props.wordcrossDataSet.solved}
              solvingState={this.props.wordcrossDataSet.solving_state}
              timer={this.props.wordcrossDataSet.timer}
              displaySolvedModal={this.displaySolvedModal}
              displayKeepTryingModal={this.displayKeepTryingModal}
            />
          // </div>
        }
      </section>
    );
  };
;}


export default withRouter(Wordcross);
