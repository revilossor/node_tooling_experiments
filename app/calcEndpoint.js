var router = require('express').Router();
var response = require('./response');
var calc = require('./calc.js');
/*
  does the specified operation on each member of the passed array in sequence
  ie, 'add', [1, 2, 3, 4] will do (((1+2)+3) + 4)
*/
function calculate(operation, operands, total) {
  return (operands.length === 0) ?
    total :
    calculate(operation, operands, calc[operation]((!total) ? operands.shift() : total, operands.shift()));
}

router.route('/:operation').get((req, res) => {
  res.json(response.get(true, calculate(req.params.operation, req.query.data)));
}).post((req, res) => {
  res.json(response.get(true, calculate(req.params.operation, req.body.data)));
});

module.exports = router;
