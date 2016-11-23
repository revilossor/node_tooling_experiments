var router = require('express').Router();
var response = require('./response');
const E_OPERATION = {
  ADD:'add',
  SUB:'sub',
  MUL:'mul',
  DIV:'div'
};
var unknownOperationError = new Error("unrecognised operation! cannot calculate!");
var calc = require('./calc.js');
/*
  does the specified operation on each member of the passed array in sequence
  ie, 'add', [1, 2, 3] will do
    ((1+2)+3)

  @param operation the operation - 'add', 'sub', 'mul' or 'div'. Use the E_OPERATION enum!
  @returns the result of the operation
*/
function calculate(operation, operands, total = 0) {
  return (operands.length === 0) ?
    total :
    calculate(operation, operands, doOperation(operation, operands.shift(), operands.shift()));
}
function doOperation(operation, op1, op2) {
  try{
    return calc[operation](op1, op2);
  } catch(e) {
    throw unknownOperationError;
  }
}

router.route('/add').get((req, res) => {
  res.json(response.get(true, calculate(E_OPERATION.ADD, req.query.data)));
});
router.route('/add').post((req, res) => {
  res.json(response.get(true, calculate(E_OPERATION.ADD, req.body.data)));
});

router.route('/sub').get((req, res) => {
  res.json(response.get(true, calculate(E_OPERATION.SUB, req.query.data)));
});
router.route('/sub').post((req, res) => {
  res.json(response.get(true, calculate(E_OPERATION.SUB, req.body.data)));
});

router.route('/mul').get((req, res) => {
  res.json(response.get(true, calculate(E_OPERATION.MUL, req.query.data)));
});
router.route('/mul').post((req, res) => {
  res.json(response.get(true, calculate(E_OPERATION.MUL, req.body.data)));
});

router.route('/div').get((req, res) => {
  res.json(response.get(true, calculate(E_OPERATION.DIV, req.query.data)));
});
router.route('/div').post((req, res) => {
  res.json(response.get(true, calculate(E_OPERATION.DIV, req.body.data)));
});

module.exports = router;
