import React from 'react';
import Button from './Button';

export default class ButtonArea extends React.Component {
  render() {
    return (
      <div className="buttons">{
        Object.keys(this.props.buttons).map((key) => <Button operation={key} onClick={this.props.buttons[key]}/>)
      }</div>
    );
  }
}
