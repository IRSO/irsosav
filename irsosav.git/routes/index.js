var express = require('express');
var session = require('express-session');
var redis = require("redis");
//var client = redis.createClient();
var RedisStore = require('connect-redis')(session);
var bodyParser = require('body-parser');
var mysql = require('mysql');
var md5 = require('md5');
var app = express();

app.use(session({
//  app.use(express.cookieParser());
//  app.use(express.session({
    host: '127.0.0.1',
    port: '6379',
    db: '2',
    pass: 'IRSOSAV',
    secret: 'q0w1e9r2t8y3',
    store: new RedisStore(),
    saveUninitialized: false,
    resave: false
//  }));
}));


var dbconn = mysql.createConnection({
  host: '127.0.0.1',
  database: 'IRSOSAV',
  user: 'irsosav',
  password: 'motor970',
  port: '3306',
  //debug: true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/empleados', function(req, res) {
  dbconn.query('SELECT * FROM cliente', function(err, rows) {
    if(err) throw err;    
    var empleados=[]; // Se crea un array vacio.
    for (var i = 0; i < rows.length; i++) {
      var empleado={}; // Se crea un objeto vacio.
      empleado.documento=rows[i].documento;
      empleado.id_tipo_doc=rows[i].id_tipo_doc;
      empleado.id_empresa=rows[i].id_empresa;
      empleado.id_ciudad=rows[i].id_ciudad;
      empleado.id_provincia=rows[i].id_provincia;
      empleado.id_pais=rows[i].id_pais;
      empleado.id_perfil=rows[i].id_perfil;
      empleado.descripcion=rows[i].descripcion;
      empleado.domicilio=rows[i].domicilio;
      empleado.telefono=rows[i].telefono;
      empleado.celular=rows[i].celular;
      empleado.mail=rows[i].mail;
      empleado.genero=rows[i].genero;
      empleado.clave=rows[i].clave;
      empleados.push(empleado);
    };
       res.jsonp(empleados);
  });
});

app.get('/empleado/:uid', function(req, res) {
  dbconn.query("SELECT * FROM cliente where documento=" +req.params.uid, function(err, rows) {
    if(err) throw err;    
    res.jsonp(rows);
  });
});
                 
app.get('/test/:uid', function(req, res) {
    var test=[];
    var texto={};
    texto = "Hola mundo "+req.params.uid;
    test.push(texto);
    res.jsonp(test);
  });

//app.set('port', (process.env.PORT || 3000));
//app.listen(app.get('port'), function() {
app.listen('3000'), function() {
  console.log('Node app is running on port', app.get('port'));
};

dbconn.connect(function(err){
  if(err){
    console.log('Error conectando con la DB');
    return;
  }
  console.log('Conexion establecida');
});


