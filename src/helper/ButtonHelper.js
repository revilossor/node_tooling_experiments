import BaseHelper from './BaseHelper'
import ButtonTypes from './ButtonTypes'

export default class ButtonHelper extends BaseHelper {
  constructor() {
    super();
    this.log('construct');
  }
  isOperand(key) {
    return (ButtonTypes.operands.indexOf(key) >= 0);
  }
  isOperator(key) {
    return (ButtonTypes.operators.indexOf(key) >= 0);
  }
  isEquality(key) {
    return (ButtonTypes.equality.indexOf(key) >= 0);
  }
}
