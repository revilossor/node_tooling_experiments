import React from 'react';
import Display from './Display';
import ButtonArea from './ButtonArea';
import CalculatorController from '../controller/CalculatorController';
import ButtonTypes from '../helper/ButtonTypes';

export default class Calculator extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      display:'helloDisplay',
      isShowingResult:true,
      buttons:ButtonTypes.all
    }
    this.controller = new CalculatorController(this);
    this.buttonPressHandler = this.buttonPressHandler.bind(this);
  }
  buttonPressHandler(event) {
    this.controller.processKey(event.target.innerHTML);
  }

  render() {
    return (
      <div className="container">
        <Display content={this.state.display}/>
        <ButtonArea buttons={this.state.buttons} buttonPressHandler={this.buttonPressHandler}/>
      </div>
    );
  }
}
