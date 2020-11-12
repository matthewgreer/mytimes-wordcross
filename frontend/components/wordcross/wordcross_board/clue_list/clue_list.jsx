import React from 'react';
import Clue from './clue'

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

    this.sortClues = this.sortClues.bind(this);
    this.renderClues = this.renderClues.bind(this);
  };


  componentDidUpdate() {
    if (!this.state.acrossClues && 
      Object.keys(this.props.clueSet).length != 0) { 
      return this.sortClues();
    }
  };

  sortClues() {
    debugger
    let tempAcrossArray = [];
    let tempDownArray = []
    Object.keys(this.props.clueSet).forEach((clueName) => {
      const clueProperties = this.props.clueSet[clueName];
      if (clueProperties.direction === "across") {
        tempAcrossArray.push(this.props.clueSet[clueName])
      }
      if (clueProperties.direction === "down") {
        tempDownArray.push(this.props.clueSet[clueName])
      }      
    });
    debugger
    tempAcrossArray.sort(function (a, b) {
      debugger
      return a.number - b.number;
    });
    debugger
    tempDownArray.sort(function (a, b) {
      return a.number - b.number;
    });
    debugger
    return this.setState({
      acrossClues: tempAcrossArray,
      downClues: tempDownArray
    });
  };

  renderClues(clueArray) {
    debugger
    return (
      <ul>
        {clueArray.map((clueElement) => {
          return (
              <Clue 
                boxes={clueElement.boxes}
                clue={clueElement.clue}
                direction={clueElement.direction}
                isHighlighted={clueElement.isHighlighted}
                number={clueElement.number}
              />
          );
        })}
      </ul>
    );
  };

  render() {
    debugger
    if (this.state.acrossClues) {
      return (
        <section className="clue-list-container">
          <div className="clue-list-by-direction">
            <div className="clue-list-header">ACROSS</div>
            <div className="clue-list">
              {this.renderClues(this.state.acrossClues)}
            </div>
          </div>
          <div className="clue-list-by-direction">
            <div className="clue-list-header">DOWN</div>
            <div className="clue-list">
              {this.renderClues(this.state.downClues)}
            </div>
          </div>
        </section>
      );
    }else {
      return null;
    }
  };
};

export default ClueList;