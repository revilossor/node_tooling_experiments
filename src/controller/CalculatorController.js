import ReactComponentController from './ReactComponentController'
import ButtonHelper from '../helper/ButtonHelper'
import Errors from '../helper/Errors';
import CalculatorService from '../helper/CalculatorService';
import EquationParser from '../helper/EquationParser';

export default class CalculatorController extends ReactComponentController {
  constructor(ctx) {
    super(ctx);
    this._buttonHelper = new ButtonHelper();
    this._calculatorService = new CalculatorService();
    this._equationParser = new EquationParser();
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
      this.setState({isShowingResult:true, hasOperator:false});
      this._calculatorService.send(this._equationParser.getStandardised(this.state.display)).then((result)=> {
        this.setDisplay(result);
      }).catch((result)=> {
        console.log('error result is > ' + result);
      });
    }
  }
  processOperatorKey(key) {
    if(this.state.isShowingResult) {
      this.setState({isShowingResult:false});
      this.setDisplay(0); // TODO parse normal, PN and RPN calc??
    } else if (this.state.hasOperator) {
      this.setState({hasOperator:false});
      this.setDisplay(0);
    } else {
      this.setState({hasOperator:true});
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
    this.setDisplay(this.getCurrentDisplay() + message);
  }
  getCurrentDisplay() {
    return (this.state.display == '0') ? '' : this.state.display;
  }
}
