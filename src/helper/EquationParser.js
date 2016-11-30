export default class EquationParser {
  getStandardised(displayString) {
    console.log('get the display string "' + displayString + '" is a standardised form');
    return {
      operation:'add',
      operands:[1, 2, 3]
    }
  }

}
