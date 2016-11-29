import React from 'react';
import Display from './Display';
import ButtonArea from './ButtonArea';

export default class Calculator extends React.Component {
  buttonPressHandler(event) {
    console.log('[Calculator] pressed button! ' + event.target.innerHTML);
  }
  render() {
    return (
      <div className="container">
        <Display/>
        <ButtonArea buttonPressHandler={this.buttonPressHandler}/>
      </div>
    );
  }
}
