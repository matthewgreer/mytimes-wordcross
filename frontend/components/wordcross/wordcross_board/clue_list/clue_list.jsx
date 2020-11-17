import React from 'react';
import Clue from './clue'

// NOTE!!! should I change acrossClues & downClues to instance variables,
  // rather than state, since they won't change...?

// NOTE!!! do I need to lift the highlightedClue states to WordcrossBoard?


class ClueList extends React.Component {
  constructor(props) {
    super(props);
    // props:
      // activeClue
      // activeBox
      // clueSet: {
        // "a1": {
          // boxes: eg. ['0,2','0,3','0,4']
          // clue: eg. "Clue string",
          // direction: eg. "across", (or "down")
          // number: eg. 1
        // }, ...
      // },
      // updateActiveClue()
    this.state = {
      activeHighlightedClue: 'a1',
      crossingHighlightedClue: 'd1',
      // once this.props.clueSet contains clues:
        // acrossClues: eg. ['a1','a2','a3','a4','a6']
        // downClues: eg. ['d1','d2','d3','d4','d5']
    }

    this.sortClues = this.sortClues.bind(this);
    this.determineHighlightedClues = this.determineHighlightedClues.bind(this);
    this.renderClues = this.renderClues.bind(this);
  };


  componentDidUpdate() {
    if (Object.keys(this.props.clueSet).length != 0) {
      if (!this.state.acrossClues) { 
        return this.sortClues();
      }
      if (this.props.activeClue != this.state.activeHighlightedClue){
        return this.determineHighlightedClues(this.props.activeClue);
      }
    }
  };

  sortClues() {
    let tempAcrossArray = [];
    let tempDownArray = [];
    Object.keys(this.props.clueSet).forEach((clueName) => {
      const clueProperties = this.props.clueSet[clueName];
      clueProperties.name = clueName;
      if (clueProperties.direction === "across") {
        tempAcrossArray.push(this.props.clueSet[clueName])
      }
      if (clueProperties.direction === "down") {
        tempDownArray.push(this.props.clueSet[clueName])
      }      
    });
    tempAcrossArray.sort(function (a, b) {
      return a.number - b.number;
    });
    tempDownArray.sort(function (a, b) {
      return a.number - b.number;
    });
    return this.setState({
      acrossClues: tempAcrossArray,
      downClues: tempDownArray
    });
  };

  determineHighlightedClues(activeClue) {
    const activeBox = this.props.activeBox;
    debugger
    let oppositeDirection;
    if (this.props.clueSet[activeClue].direction === "across") {
      oppositeDirection = "down";
    } else {
      oppositeDirection = "across"
    }
    let newCrossingClue;
    Object.keys(this.props.clueSet).forEach((clueName) => {
      const clueProperties = this.props.clueSet[clueName];
      debugger
      if (clueProperties.direction === oppositeDirection &&
        clueProperties.boxes.includes(activeBox)) {
        newCrossingClue = clueName;
      }
    });
    debugger
    return this.setState({
      activeHighlightedClue: activeClue,
      crossingHighlightedClue: newCrossingClue
    });
  };

  renderClues(clueArray) {
    const active = this.state.activeHighlightedClue;
    const crossing = this.state.crossingHighlightedClue;
    debugger
    return (
      <ul>
        {clueArray.map((clueElement) => {
          const clueName = clueElement.name;
          let clueHighlight = "";
          if (clueName === active) {
            clueHighlight = "active-clue-highlight";
          } 
          if (clueName === crossing) {
            clueHighlight = "crossing-clue-highlight";
          }
          return (
              <Clue
                key={clueName}
                clueName={clueName}
                // boxes={clueElement.boxes}
                clue={clueElement.clue}
                direction={clueElement.direction}
                highlight={clueHighlight}
                number={clueElement.number}
                updateActiveClue={this.props.updateActiveClue}
              />
          );
        })}
      </ul>
    );
  };

  render() {
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