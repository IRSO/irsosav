var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Content-Type: application/json");
  next();
});

var dbconn = mysql.createConnection({
  host: '127.0.0.1',
  database: 'IRSOSAV',
  user: 'irsosav',
  password: 'motor970',
  port: '3306',
  //debug: true
});

dbconn.connect(function(err){
  if(err){
    console.log('Error conectando con la DB');
    return;
  }
  console.log('Conexion establecida');
});

dbconn.end(function(err) {

});

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

app.get('/login', function(request, response) {
  dbconn.query('SELECT * from cliente', function(err, documento) {
    //if(err) throw err;    
    console.log(documento);
    response.jsonp(documento);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


