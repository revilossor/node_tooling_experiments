var router = require('express').Router();
var response = require('./response');
var calc = require('./calc');
var error = require('./error');
/*
  does the specified operation on each member of the passed array in sequence
  ie, 'add', [1, 2, 3, 4] will do (((1+2)+3) + 4)
*/
function calculate(operation, operands, result) {
  return (operands.length === 0 || result instanceof Error) ?
    result :
    calculate(operation, operands, calc.doOperation(operation, (!result) ? operands.shift() : result, operands.shift()));
}

function handleRequest(req, res, data) {
  var returnObject = response.get(calculate(req.params.operation, data));
  if(returnObject.success === true) {
    res.status(200).json(returnObject);
  } else {
    var status;
    switch (returnObject.error){
      case error.invalidArgumentError : status = 400; break;
      case error.unknownOperationError : status = 404; break;
      default: status = 500;
    }
    res.status(status).json(returnObject);
  }
}

router.route('/:operation').get((req, res) => {
  handleRequest(req, res, req.query.data);
}).post((req, res) => {
  handleRequest(req, res, req.body.data);
});

module.exports = router;
