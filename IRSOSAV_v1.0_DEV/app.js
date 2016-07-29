var express = require('express');
var bodyparser  = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');
//var md5 = require('MD5');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

connection.init();
routes.configure(app);

var server = app.listen(3000, function() {
  console.log('Todo joya!!! Estoy escuchando en el puerto ' + server.address().port);
});
