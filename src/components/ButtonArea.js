import React from 'react';
import Button from './Button';

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '+', '='
];

export default class ButtonArea extends React.Component {
  render() {
    return (
      <div className="buttons">{
        buttons.map((button) => <Button operation={button} onClick={this.props.buttonPressHandler}/>)
      }</div>
    );
  }
}
