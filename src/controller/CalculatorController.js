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
    if(this.state.isShowingResult) {
      this.setState({isShowingResult:false});
      this.setDisplay(0);
    } else {
      this.setState({isShowingResult:true});
      // TODO send equation
      this.setDisplay('result go here');
    }
  }
  processOperatorKey(key) {
    if(this.state.isShowingResult) {
      this.setState({isShowingResult:false});
      this.setDisplay(0); // TODO parse normal, PN and RPN calc??
    } else {
      this.appendDisplay(key);
      // TODO append to equation
    }
  }
  processOperandKey(key) {
    if(this.state.isShowingResult) {
      this.setState({isShowingResult:false});
      this.setDisplay(key);
      // TODO start new equation
    } else {
      this.appendDisplay(key);
      // TODO append to equation
    }
  }
  setDisplay(message) {
    this.setState({display:message});
  }
  appendDisplay(message) {
    this.setDisplay(this.state.display + message);
  }
}
