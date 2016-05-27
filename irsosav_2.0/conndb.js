var express = require("express");
var mysql = require("mysql");

//var dbconn = mysql.createConnection({
var pool = mysql.createPool({
  connectionLimit : 10,
  host: '127.0.0.1',
  database: 'IRSOSAV',
  user: 'root',
  password: 'fravecheck',
  port: '3306',
  //debug: true
});

function handle_database(req,res) {   
  pool.getConnection(function(err,connection){
    if (err) {
      connection.release();
      res.json({"codigo" : 100, "status" : "Error al conectar con la base de datos"});
      console.log('conectado como id ' + connection.threadId);     
    return;
    }   
  });
}

module.exports = pool;
