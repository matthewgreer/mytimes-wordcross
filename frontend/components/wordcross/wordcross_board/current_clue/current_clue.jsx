import React from 'react';

class CurrentClue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clue: "",
      direction: "across",
      number: 1
    };
  };

  componentDidUpdate() {
    if (this.props.activeClue && !this.state.clue) {
      this.setState({
        clue: this.props.activeClue.clue,
        direction: this.props.activeClue.direction,
        number: this.props.activeClue.number,
        activeClueLabel: this.props.activeClue.direction === 'across' ? 
          `${this.props.activeClue.number.toString()}A` : 
          `${this.props.activeClue.number.toString()}D`
      });
    }
  };
  
  render() {
    if (this.state.clue) {
      return (
        <div>
          <div className="current-active-clue-label">
            {this.state.activeClueLabel}
          </div>
          <div className="current-active-clue-text">
              {this.state.clue}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
};

export default CurrentClue;