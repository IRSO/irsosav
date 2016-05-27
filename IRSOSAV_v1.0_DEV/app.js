var express = require('express');
var bodyparser  = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');
//var md5 = require('MD5');

var app = express();

app.use(function(err,req,res,next) {
  if(err){
    res.jsonp(err);
  } 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  next();
});
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

var server = app.listen(3000, function() {
  console.log('Todo joya!!! Estoy escuchando en el puerto ' + server.address().port);
});
