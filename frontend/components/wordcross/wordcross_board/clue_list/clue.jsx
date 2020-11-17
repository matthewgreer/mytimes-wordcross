import React from 'react';

class Clue extends React.Component {
  constructor(props) {
    super(props);

      // props:
        // clueName
        // boxes, 
        // clue, 
        // direction, 
        // highlight,
        // number
        // updateActiveClue()

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    return this.props.updateActiveClue(this.props.clueName, this.props.direction);
  };  

  
  render() {
    const { highlight, number, clue} = this.props;
    return (
      <li
        className={`clue-set-clue ${highlight}`}
        onClick={this.handleClick}
      > 
        <span className="clue-set-clue-number">
          {number}
        </span>
        <span className="clue-set-clue-text">
          {clue}
        </span>
      </li>
    );
  };
};

export default Clue;