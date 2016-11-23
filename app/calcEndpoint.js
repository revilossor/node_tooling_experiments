var router = require('express').Router();
var response = require('./response');

router.route('/add').get((req, res) => {
  res.json(response.get(true, 1));
});
router.route('/add').post((req, res) => {
  res.json(response.get(true, 1));
});

router.route('/sub').get((req, res) => {
  res.json(response.get(true, 1));
});
router.route('/sub').post((req, res) => {
  res.json(response.get(true, 1));
});

router.route('/mul').get((req, res) => {
  res.json(response.get(true, 1));
});
router.route('/mul').post((req, res) => {
  res.json(response.get(true, 1));
});

router.route('/div').get((req, res) => {
  res.json(response.get(true, 1));
});
router.route('/div').post((req, res) => {
  res.json(response.get(true, 1));
});

module.exports = router;
