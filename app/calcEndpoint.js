var router = require('express').Router();
var response = require('./response');
var calc = require('./calc.js');
/*
  does the specified operation on each member of the passed array in sequence
  ie, 'add', [1, 2, 3, 4] will do (((1+2)+3) + 4)
*/
function calculate(operation, operands, result) {
  return (operands.length === 0 || result instanceof Error) ?
    result :
    calculate(operation, operands, calc.doOperation(operation, (!result) ? operands.shift() : result, operands.shift()));
}

router.route('/:operation').get((req, res) => {
  console.log('result is : ' + response.get(calculate(req.params.operation, req.query.data)));
  res.json(response.get(calculate(req.params.operation, req.query.data)));
}).post((req, res) => {
    console.log('result is : ' + response.get(calculate(req.params.operation, req.body.data)));
  res.json(response.get(calculate(req.params.operation, req.body.data)));
});

module.exports = router;
