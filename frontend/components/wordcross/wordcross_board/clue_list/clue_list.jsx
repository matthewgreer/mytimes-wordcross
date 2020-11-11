import React from 'react';
import Clue from './clue';

class ClueList extends React.Component {
  constructor(props) {
    super(props);
    // props:
      // clueSet: {
        // "a1": {
          // boxes: []
          // clue: ""
          // direction: ""
          // number: ""
      // 
    this.state = {
      primaryHighlightedClue: 'a1',
      secondaryHighlightedClue: 'd1'
    }

    this.acrossClues = [];
    this.downClues = [];
  
    this.sortClues = this.sortClues.bind(this);
  };

  sortClues() {
    Object.entries(this.props.clueSet).forEach((clueName, clueProperties) => {
      const { direction } = clueProperties;
      if (direction === "across") {this.acrossClues.push(this.props.clueSet[clueName])}
      if (direction === "down") {this.downClues.push(this.props.clueSet[clueName])}      
    });
    
  }

  componentDidUpdate() {
    if (!this.acrossClues.length) {
      this.sortClues();
    }
  }

  render() {
    return (
      <section className="clue-list-container">
        <div className="clue-list-by-direction">
          <div className="clue-list-header">ACROSS</div>
          <div className="clue-list">

          </div>
        </div>
        <div className="clue-list-by-direction">
          <div className="clue-list-header">DOWN</div>
          <div className="clue-list">

          </div>
        </div>
      </section>
    );
  };
};

export default ClueList;