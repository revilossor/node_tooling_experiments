var router = require('express').Router();
var response = require('./response');
var calc = require('./calc.js');
/*
  does the specified operation on each member of the passed array in sequence
  ie, 'add', [1, 2, 3, 4] will do ((1+2)+3) + 4
*/
function calculate(operation, operands, total) {
  return (operands.length === 0) ?
    total :
    calculate(operation, operands, calc[operation]((!total) ? operands.shift() : total, operands.shift()));
}

router.route('/add').get((req, res) => {
  res.json(response.get(true, calculate('add', req.query.data)));
});
router.route('/add').post((req, res) => {
  res.json(response.get(true, calculate('add', req.body.data)));
});

router.route('/sub').get((req, res) => {
  res.json(response.get(true, calculate('sub', req.query.data)));
});
router.route('/sub').post((req, res) => {
  res.json(response.get(true, calculate('sub', req.body.data)));
});

router.route('/mul').get((req, res) => {
  res.json(response.get(true, calculate('mul', req.query.data)));
});
router.route('/mul').post((req, res) => {
  res.json(response.get(true, calculate('mul', req.body.data)));
});

router.route('/div').get((req, res) => {
  res.json(response.get(true, calculate('div', req.query.data)));
});
router.route('/div').post((req, res) => {
  res.json(response.get(true, calculate('div', req.body.data)));
});

module.exports = router;
