var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = 8080;

app.use(bodyParser.json());
// urlencoded?


router.route('/test').get((req, res) => {
  console.log('GET /test');
  res.json({success:true});
});

router.route('/test').post((req, res) => {
  console.log('POST /test');
  res.json({success:true});
});

app.use('/api', router);
app.use('/calc', require('./calcEndpoint'));

app.listen(port, (err) => {
  console.log('app listening on port ' + port);
});
