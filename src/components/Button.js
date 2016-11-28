import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <span className="button resetBtn">{this.props.operation}</span>
    );
  }
}
