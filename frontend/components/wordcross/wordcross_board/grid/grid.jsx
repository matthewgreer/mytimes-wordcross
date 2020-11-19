import React from 'react';
import Box from './box';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    // should get as props:
      // board
      // labelSet
      // hightlightedBoxes
      // boxInFocus
      // updateBoard()

      // as props, or move function to this component
      // updateBoxInFocus()
      // changeSolvingDirection()
      // findNextEmptyInput()


  }

  render() {
    return (
      <section className="wordcross-grid">
            {this.state.board && this.state.board.map((row, rowIdx) => {
              return (
                <div 
                  key={"row" + rowIdx.toString()}
                  className="wordcross-row"
                >
                  {row.map((boxValue, boxIdx) => {
                    const position = [rowIdx, boxIdx];
                    const label = this.props.labelSet[rowIdx][boxIdx];
                    const boxName = position.toString();
                    return (
                      <Box
                        key={boxName}
                        boxName={boxName}
                        isBlackBox={boxValue === "#"}
                        position={position}
                        isHighlighted={this.state.highlightedBoxes.includes(boxName)}
                        isInFocus={boxName === this.state.boxInFocus}
                        updateBoard={this.updateBoard}
                        updateBoxInFocus={this.updateBoxInFocus}
                        changeSolvingDirection={this.changeSolvingDirection}
                        findNextEmptyInput={this.findNextEmptyInput}
                        label={label}
                        value={boxValue}
                      />  
                    )
                  })}
                </div>
              )
            })}
          </section>
    )
  }

}