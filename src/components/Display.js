import React from 'react';

export default class Display extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      content:this.props.content
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.content !== this.props.content) {
      this.setState({
        content:nextProps.content
      });
    }
  }
  render() {
    return (
      <div className="result">{this.state.content}</div>
    );
  }
}
