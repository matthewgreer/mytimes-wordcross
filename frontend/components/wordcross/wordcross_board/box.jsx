import React from 'react'

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighlighted: true,
      isInFocus: true
    }

  }

  render() {
    return(
  <p>{this.props.value}</p>
  )}


};

export default Box;