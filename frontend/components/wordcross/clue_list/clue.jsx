import React from 'react';

class Clue extends React.Component {
  constructor(props) {
    super(props);
    // props:
    //   clueName, 
    //   clue, 
    //   highlight,
    //   number,
    //   isBoardBlurred,
    //   handleClueClick()
    
    
    this.clueRef = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.scrollToClue = this.scrollToClue.bind(this);
  };

  componentDidUpdate(prevProps) {
    if(prevProps.highlight !== this.props.highlight){
      if (this.props.highlight) {
        this.scrollToClue();
      }
    }
  };

  handleClick(e) {
    const { handleClueClick, clueName } = this.props;
    return handleClueClick(clueName);
  };

  scrollToClue() {
    return this.clueRef.current.scrollIntoView();
  };

  render() {
    const { highlight, number, clue, isBoardBlurred } = this.props;
    const blurText = isBoardBlurred ? "blur-clue-text" : "";

    return (
      <li
        ref={this.clueRef}
        className={`clue-set-clue ${highlight}`}
        onClick={this.handleClick}
      > 
        <span className="clue-set-clue-number">
          {number}
        </span>
        <span className={`clue-set-clue-text ${blurText}`}>
          {clue}
        </span>
      </li>
    );
  };

}
export default Clue;