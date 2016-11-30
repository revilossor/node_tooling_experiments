import ReactComponentController from './ReactComponentController'
import ButtonHelper from '../helper/ButtonHelper'

export default class CalculatorController extends ReactComponentController {
  constructor(ctx) {
    super(ctx);
    this._buttonHelper = new ButtonHelper();
  }
  processKey(key) {
    if(this._buttonHelper.isEquality(key)) {
      console.log('pressed button is an equals');
    } else if (this._buttonHelper.isOperator(key)) {
      console.log('pressed button is an operator');
    } else if (this._buttonHelper.isOperand(key)) {
      console.log('pressed button is an operand');
    } else {
      console.log('pressed an unrecognised button!');
    }
  }
  updateDisplay(message) {
    this.setState({display:message});
  }


}
