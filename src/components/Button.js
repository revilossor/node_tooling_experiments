import React from 'react'

export default class Button extends React.Component {
  render() {
    return (
      <span className="button resetBtn" onClick={this.props.onClick} >{this.props.operation}</span>
    );
  }
}
