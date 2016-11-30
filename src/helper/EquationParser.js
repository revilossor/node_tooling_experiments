export default class EquationParser {
  constructor() {
    this._opMap = [];
    this._opMap['+'] = 'add';
    this._opMap['-'] = 'sub';
    this._opMap['*'] = 'mul';
    this._opMap['/'] = 'div';
  }
  getStandardised(displayString) {
    console.log('get the display string "' + displayString + '" is a standardised form');
  // polish notation = " + 3 4 "
  // reverse polish notation = " 3 4 + "
    // normal notation = " 3 + 4 "
    var op1 = ''
    var op2 = ''
    var op;
    for(var i = 0; i< displayString.length; i++) {
      if(displayString.charAt(i).match(/(\+|\-|\*|\/)/g)) {
        op = displayString.charAt(i);
        op2 = displayString.substring(i+1);
        break;
      }
      op1 += displayString.charAt(i);
    }

    console.log('op is ' + op + ' op from opmap : ' + this._opMap[op]);

    return {
      operation:this._opMap[op],
      operands:[parseInt(op1), parseInt(op2)]
    }
  }

}
