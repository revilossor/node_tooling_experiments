var error = require('./error');

function areAllArgsNumbers(args) {
  for(i = 0; i < args.length; i++) {
    if(typeof args[i] !== 'number') { return false; }
  }
  return true;
}

module.exports = {
  doOperation:function(operation, op1, op2) {
    var result;
    if(!areAllArgsNumbers([op1, op2])) {
      result = error.invalidArgumentError;
    } else {
      switch(operation) {
        case 'add': result = op1 + op2; break;
        case 'sub': result = op1 - op2; break;
        case 'mul': result = op1 * op2; break;
        case 'div': result = op1 / op2; break;
        default:    result = "unknown"; break;
      }
      if (result === "unknown") { result = error.unknownOperationError; }
    }
    return result;
  }
}
