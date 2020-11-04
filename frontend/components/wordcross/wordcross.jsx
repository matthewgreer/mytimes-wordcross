// This component should render the following child components with
  // their necessary props:
    // Modal
    // PuzzleHeader
      // TitleDate
      // Byline
      // Toolbar
        // Timer
        // ResetButton
    // PuzzleBoard - UserMicro or UserDaily
      // CurrentClue
      // PuzzleGrid
      // ClueList

import React from 'react';
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
    this.state = {
      modalType: 'ready',
      puzzleType: ''

    };

    this.hideModal = this.hideModal.bind(this)

  };

  // componentDidMount() {
  //   switch (this.props.puzzleType) {
  //     case 'micro':
  //       fetchUserMicro()
  //       this.setState(state =>({puzzleType: "Micro"}))
  //       break;
  //     case 'daily':
  //       if
  // }

  hideModal() {
    this.setState(state => ({ modalType: "none" }));
    // callback? to start timer, redirect, etc.?
  };

  render(){
    return (
      <section className="wordcross-container">
        <Modal modalType={this.state.modalType} onClick={this.hideModal}/>
        <PuzzleHeader />
        <PuzzleBoard />
      </section>
    );
  };
;}


export default Wordcross;
