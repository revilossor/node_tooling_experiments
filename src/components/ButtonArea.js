import React from 'react';
import Button from './Button';

export default class ButtonArea extends React.Component {
  render() {
    return (
      <div className="buttons">{
        this.props.buttons.map((button) => <Button operation={button} onClick={this.props.buttonPressHandler}/>)
      }</div>
    );
  }
}
