import ReactComponentController from './ReactComponentController'

export default class CalculatorController extends ReactComponentController {
  constructor(ctx) {
    super(ctx);
  }
  updateDisplay(message) {
    this.setState({display:message});
  }
}
