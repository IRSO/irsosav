var connection = require('../connection');

function Todo() {
  this.get = function(id, res) {
    if (uid = null) {
      connection.acquire(function(err, con) {
        con.query('select * from cliente', function(err, result) {
          con.release();
          res.send(result);
        });
      });
    } else {
      connection.acquire(function(err, con) {
        con.query('select * from cliente where documento = ?', [id] function(err, result) {
          con.release();
          if (err) {
            res.send('Seleccion fallida.')
            } else {
            res.send(result);
          });
        });
      };
    }
  };

  this.create = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('insert into cliente set ?', todo, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'IRSOSAV creacion fallida'});
        } else {
          res.send({status: 0, message: 'IRSOSAV creacion exitosa'});
        }
      });
    });
  };

  this.update = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('update cliente set ? where id = ?', [todo, todo.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'IRSOSAV creacion fallida'});
        } else {
          res.send({status: 0, message: 'IRSOSAV creacion exitosa'});
        }
      });
    });
  };

  this.delete = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from cliente where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'IRSOSAV creacion fallida'});
        } else {
          res.send({status: 0, message: 'IRSOSAV creacion exitosa'});
        }
      });
    });
   };
}

module.exports = new Todo();
