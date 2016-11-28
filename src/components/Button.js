import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('clicky ' + this.props.operation);
  }
  render() {
    return (
      <span className="button resetBtn" onClick={this.handleClick} >{this.props.operation}</span>
    );
  }
}
