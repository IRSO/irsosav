var express = require('express');
//var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');

var index = express();
index.set('view engine', 'ebj');

index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));
index.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Content-Type: application/json");
  next();
});


// catch 404 and forward to error handler
index.use(function(req, res, next) {
  var err = new Error('No se encuentra el recurso');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
index.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

server = index.listen(3000, function() {
  console.log('Todo joya!!! Estoy escuchando en el puerto ' + server.address().port);
});

module.exports = index;
