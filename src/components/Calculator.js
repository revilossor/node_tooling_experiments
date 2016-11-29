import React from 'react';
import Display from './Display';
import ButtonArea from './ButtonArea';
import CalculatorController from '../controller/CalculatorController';

export default class Calculator extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      display:'helloDisplay',
      isShowingResult:true,
      buttons:['7','8','9','/','4','5','6','*','1','2','3','-','0','.','+','=']
    }
    this.controller = new CalculatorController(this);
  }
  render() {
    return (
      <div className="container">
        <Display content={this.state.display}/>
        <ButtonArea buttons={this.state.buttons} buttonPressHandler={this.controller.buttonPressHandler}/>
      </div>
    );
  }
}
