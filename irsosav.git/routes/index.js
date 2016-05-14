var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var md5 = require('md5');

var app = express();

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

app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

app.get('/login', function(request, response) {
  dbconn.query('SELECT * FROM cliente', function(err, rows) {
    if(err) throw err;    
    //for (var i = 0; i < rows.length; i++) {
    //  console.log(rows[i].name);
    //  response.jsonp(rows[i].id_ciudad); //Envia solo el campo documento
    //  response.jsonp(rows);
    var empleados=[];
    for (var i = 0; i < rows.length; i++) {
      var empleado={};
      empleado.descripcion=rows[i].descripcion;
      empleados.push(empleado);
    };
       response.jsonp(empleados);
  });
});

app.get('/login/:uid', function(request, response) {
  dbconn.query("SELECT * FROM cliente where documento=" +request.params.uid, function(err, rows) {
    if(err) throw err;    
//    for (var i = 0; i < rows.length; i++) {
    //console.log(rows);
//      response.jsonp(rows[i]);
//     };
//  });
//    var empleados=[];
//    for (var i = 0; i < rows.length; i++) {
//      var empleado={};
//      empleado.descripcion=rows[i].descripcion;
//      empleados.push(empledo);
//    }
       response.jsonp(rows);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


