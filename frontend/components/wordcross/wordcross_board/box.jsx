import React from 'react'

class Box extends React.Component {
  constructor(props) {
    // props: position, key, value
    super(props);
    this.state = {
      isHighlighted: true,
      isInFocus: true
    }

  }

  render() {
    return(
      <td className={this.props.value === "#" ? "wordcross-box black-box" : "wordcross-box input-box"}>
        {this.props.value}
      </td>
    )
  }


};

export default Box;