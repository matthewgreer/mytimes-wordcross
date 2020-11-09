import React from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom';
import Box from './box';

class WordcrossBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      solvingDirection: "across",
      boxInFocus: "0,0",
    };
  
  };

  componentDidUpdate() {
    if (this.props.data.solving_state && this.state.board != this.props.data.solving_state){
      this.setState({
        board: this.props.data.solving_state
      })

    }
  };

  render() {
    return (
      <section>
        {this.state.board && <table>
          {
            this.state.board.map((row, rowIdx) => {
              return <tr key={"row" + rowIdx.toString()}>
                {row.map((boxValue, boxIdx) => {
                  let position = [rowIdx, boxIdx];
                  return <Box
                    position={position}
                    key={position.toString()}
                    value={boxValue}
                  />
                })}
              </tr>
            })
          }
        </table>}
      </section>
    )
  }
    
}

export default WordcrossBoard;