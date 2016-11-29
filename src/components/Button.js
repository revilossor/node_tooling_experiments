import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick(this.props.operation);
  }
  render() {
    return (
      <span className="button resetBtn" onClick={this.props.onClick} >{this.props.operation}</span>
    );
  }
}
