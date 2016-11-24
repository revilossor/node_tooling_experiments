function areAllArgsNumbers(args) {
  for(i = 0; i < args.length; i++) {
    if(typeof args[i] !== 'number') { return false; }
  }
  return true;
}

var onlyNumberArgumentsError = new Error("only accepts number arguments!");
var unknownOperationError = new Error("unrecognised operation! cannot calculate!");

module.exports = {
  add:function(op1, op2) {  // arrow functions DONT bind an arguments object!
    if(!areAllArgsNumbers(arguments)) { throw onlyNumberArgumentsError; }
    return op1 + op2;
  },
  sub:function(op1, op2) {
    if(!areAllArgsNumbers(arguments)) { throw onlyNumberArgumentsError; }
    return op1 - op2;
  },
  mul:function(op1, op2) {
    if(!areAllArgsNumbers(arguments)) { throw onlyNumberArgumentsError; }
    return op1 * op2;
  },
  div:function(op1, op2) {
    if(!areAllArgsNumbers(arguments)) { throw onlyNumberArgumentsError; }
    return op1 / op2;
  },
  E_OPERATION:{
    ADD:'add',
    SUB:'sub',
    MUL:'mul',
    DIV:'div'
  },
  errors:{
    onlyNumberArgumentsError:onlyNumberArgumentsError,
    unknownOperationError:unknownOperationError
  }
}
