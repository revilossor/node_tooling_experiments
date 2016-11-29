import ReactComponentController from './ReactComponentController'

export default class CalculatorController extends ReactComponentController {
  constructor(ctx) {
    super(ctx);
  }
  buttonPressHandler(event) {
    console.log('press button ' + event.target.innerHTML);
    const pressedButton = event.target.innerHTML;

  }
  updateDisplay(message) {
    this.setState({display:message});
  }


}
