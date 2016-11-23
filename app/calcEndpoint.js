var router = require('express').Router();

router.route('/add').get((req, res) => {
  res.json({success:true});
});
router.route('/add').post((req, res) => {
  res.json({success:true});
});

router.route('/sub').get((req, res) => {
  res.json({success:true});
});
router.route('/sub').post((req, res) => {
  res.json({success:true});
});

router.route('/mul').get((req, res) => {
  res.json({success:true});
});
router.route('/mul').post((req, res) => {
  res.json({success:true});
});

router.route('/div').get((req, res) => {
  res.json({success:true});
});
router.route('/div').post((req, res) => {
  res.json({success:true});
});

module.exports = router;
