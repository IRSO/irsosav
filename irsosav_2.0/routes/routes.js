//var md5 = require('md5');
var express = require('express');
var index = require('../index');
var bodyParser = require('body-parser');
var dbconn = require('../conndb');
var bodyParser = require('body-parser');
var index = express();

index.get('/empleados', function(request, response) {
  pool.query('SELECT * FROM cliente', function(err, rows) {
    if(err) throw err;    
    var empleados=[]; // Se crea un array vacio.
    for (var i = 0; i < rows.length; i++) {
      var empleado={}; // Se crea un objeto vacio.
      empleado.descripcion=rows[i].descripcion;
      empleados.push(empleado);
    };
       response.jsonp(empleados);
  });
});

index.get('/empleado/:uid', function(request, response) {
  pool.query("SELECT * FROM cliente where documento=" +request.params.uid, function(err, rows) {
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
//    };
       response.jsonp(rows);
  });
});



