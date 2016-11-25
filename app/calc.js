var onlyNumberArgumentsError = new Error("only accepts number arguments!");
var unknownOperationError = new Error("unrecognised operation! cannot calculate!");

function areAllArgsNumbers(args) {
  for(i = 0; i < args.length; i++) {
    if(typeof args[i] !== 'number') { return false; }
  }
  return true;
}

module.exports = {
  doOperation:function(operation, op1, op2) {
    if(!areAllArgsNumbers([op1, op2])) { throw onlyNumberArgumentsError; }
    var result;
    switch(operation) {
      case 'add': result = op1 + op2; break;
      case 'sub': result = op1 - op2; break;
      case 'mul': result = op1 * op2; break;
      case 'div': result = op1 / op2; break;
      default:    result = "unknown"; break;
    }
    if (result === "unknown") { throw unknownOperationError }
    return result;
  }
}
