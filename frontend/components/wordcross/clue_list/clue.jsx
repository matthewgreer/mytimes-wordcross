import React from 'react';

// const Clue = ({
//     clueName, 
//     clue, 
//     highlight,
//     number,
//     handleClueClick
//   }) => {

//   const handleClick = (e) => {
//     handleClueClick(clueName);
//   };  

//   return (
//     <li
//       className={`clue-set-clue ${highlight}`}
//       onClick={handleClick}
//     > 
//       <span className="clue-set-clue-number">
//         {number}
//       </span>
//       <span className="clue-set-clue-text">
//         {clue}
//       </span>
//     </li>
//   );
// };

class Clue extends React.Component {
  constructor(props) {
    super(props);
    // props:
    //   clueName, 
    //   clue, 
    //   highlight,
    //   number,
    //   handleClueClick()
    
    
    this.clueRef = React.createRef();

    this.handleClick = this.handleClick.bind(this);
    this.scrollToClue = this.scrollToClue.bind(this);
  };

  componentDidUpdate() {
    if (this.props.highlight) {
      this.scrollToClue();
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
    const { highlight, number, clue } = this.props;

    return (
      <li
        ref={this.clueRef}
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

}
export default Clue;