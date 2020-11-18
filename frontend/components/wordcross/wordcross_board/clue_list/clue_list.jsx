import React from 'react';
import Clue from './clue'

class ClueList extends React.Component {
  constructor(props) {
    super(props);
    // props:
      // clueSet: {
        // "a1": {
          // boxes: eg. ['0,2','0,3','0,4']
          // clue: eg. "Clue string",
          // direction: eg. "across", (or "down")
          // number: eg. 1
        // }, ...
      // },
      // activeBox
      // solvingDirection
      // updateActiveClue()
    this.state = {
      // once this.props.clueSet contains clues:
        // acrossClues: eg. ['a1','a2','a3','a4','a6'],
        // downClues: eg. ['d1','d2','d3','d4','d5'],
        // activeClue: eg. 'a1',
        // crossingClue: eg. 'd1'
    }

    this.sortClues = this.sortClues.bind(this);
    this.highlightClues = this.highlightClues.bind(this);
    this.renderClues = this.renderClues.bind(this);
  };


  componentDidUpdate(prevProps) {
    if (Object.keys(this.props.clueSet).length != 0) {
      if (!this.state.acrossClues) { 
        return this.sortClues();
      }
      if (prevProps.activeBox != this.props.activeBox ||
        prevProps.solvingDirection != this.props.solvingDirection){
          
        return this.highlightClues(this.props.activeBox, this.props.solvingDirection);
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

  highlightClues(box, direction) {
    
    let active;
    let crossing;
    Object.keys(this.props.clueSet).forEach((clueName) => {
      const clueProperties = this.props.clueSet[clueName];
      if (clueProperties.boxes.includes(box)) {
        if (clueProperties.direction === direction) {
          active = clueName;
        } else {
          crossing = clueName;
        }
      }
      
    });
    return this.setState({
      activeClue: active,
      crossingClue: crossing
    })
  };

  renderClues(clueArray) {
    let active = this.state.activeClue;
    let crossing = this.state.crossingClue;
    
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