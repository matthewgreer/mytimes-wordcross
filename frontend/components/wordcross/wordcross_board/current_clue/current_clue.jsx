import React from 'react';

class CurrentClue extends React.Component {
  constructor(props) {
    super(props);
    // props:
      // activeClue

    this.state = {
      // clue: "",
      // direction: "across",
      // number: 1,
      activeClueLabel: ""
    };
  };

  componentDidUpdate() {
    if (this.props.activeClue && !this.state.activeClueLabel) {
      this.setState({
        // clue: this.props.activeClue.clue,
        // direction: this.props.activeClue.direction,
        // number: this.props.activeClue.number,
        activeClueLabel: this.props.activeClue.direction === 'across' ? 
          `${this.props.activeClue.number.toString()}A` : 
          `${this.props.activeClue.number.toString()}D`
      });
    }
  };
  
  render() {
    if (this.state.activeClueLabel) {
      return (
        <div className="current-active-clue-container">
          <div className="current-active-clue-label">
            {this.state.activeClueLabel}
          </div>
          <div className="current-active-clue-text">
              {this.props.activeClue.clue}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
};

export default CurrentClue;