var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = 8080;

app.use(bodyParser.json());
// urlencoded?

app.use('/calc', require('./calcEndpoint'));

app.listen(port, (err) => {
  console.log('app listening on port ' + port);
});
