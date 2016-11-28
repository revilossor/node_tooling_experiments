var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var port = 8080;
var path = require('path');

app.use(express.static(path.join(__dirname, '../src/static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('./getDataParser'));
app.use('/calc', require('./calcEndpoint'));

app.listen(port, (err) => {
  console.log('app listening on port ' + port);
});
