import ReactComponentController from './ReactComponentController'
import ButtonHelper from '../helper/ButtonHelper'
import Errors from '../helper/Errors';

export default class CalculatorController extends ReactComponentController {
  constructor(ctx) {
    super(ctx);
    this._buttonHelper = new ButtonHelper();
  }
  processKey(key) {
    if(this._buttonHelper.isEquality(key)) {
      this.processEqualityKey(key);
    } else if (this._buttonHelper.isOperator(key)) {
      this.processOperatorKey(key);
    } else if (this._buttonHelper.isOperand(key)) {
      this.processOperandKey(key);
    } else {
      throw Errors.UNRECOGNISED_BUTTON_TYPE_ERROR;
    }
  }
  processEqualityKey(key) {
    console.log('processEqualityKey : ' + key);
  }
  processOperatorKey(key) {
    console.log('processOperatorKey : ' + key);
  }
  processOperandKey(key) {
    console.log('processOperandKey : ' + key);
  }
  setDisplay(message) {
    this.setState({display:message});
  }
  appendDisplay(message) {
    this.setDisplay(this.state.display + message);
  }
}
