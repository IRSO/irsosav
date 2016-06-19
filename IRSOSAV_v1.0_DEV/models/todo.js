var connection = require('../connection');

function Todo() {
  this.getprov = function(res) {
      connection.acquire(function(err, con) {
        con.query('select * from proveedor', function(err, rows) {
          if (err) throw err;
          var proveedores=[]; // Se crea un array vacio.
          var i;
          for (i = 0; i < rows.length; i++) {
           var proveedor={}; // Se crea un objeto vacio.
           proveedor.cuit=rows[i].cuit;
           proveedor.descripcion=rows[i].descripcion;
           proveedor.domicilio=rows[i].domicilio;
           proveedor.ciudad=rows[i].ciudad;
           proveedor.provincia=rows[i].provincia;
           proveedor.telefono=rows[i].telefono;
           proveedor.email=rows[i].email;
           proveedores.push(proveedor);
          }
          con.release();
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
          res.jsonp(proveedores);
          console.log('Esta vacio');
        });
      });
    };

this.getprovid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from proveedor where cuit = ?', [id], function(err, rows) {
	  if (err) throw err;
          var proveedores=[]; // Se crea un array vacio.
          var i;
          for (i = 0; i < rows.length; i++) {
           var proveedor={}; // Se crea un objeto vacio.
           proveedor.cuit=rows[i].cuit;
           proveedor.id_ciudad=rows[i].id_ciudad;
           proveedor.domicilio=rows[i].domicilio;
           proveedor.ciudad=rows[i].ciudad;
           proveedor.provincia=rows[i].provincia;
           proveedor.telefono=rows[i].telefono;
           proveedor.email=rows[i].email;
           proveedores.push(proveedor);
          }
          con.release();
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
          res.jsonp(proveedores);
          console.log('Esta vacio');
      });
    });
  };

this.getses = function(res) {
    connection.acquire(function(err, con) {
      con.query("select usuario,token,DATE_FORMAT(fecha,'%Y-%m-%d') as fecha,hora from sesion", function(err, rows) {
	  if (err) throw err;
          con.release();
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
          res.jsonp(rows);
        console.log('Especificaron DNI');
      });
    });
  };

this.getsesid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query("select usuario,token,DATE_FORMAT(fecha,'%Y-%m-%d') as fecha,hora from sesion where usuario = ?", [id], function(err, rows) {
	  if (err) throw err;
          var sesiones=[]; // Se crea un array vacio.
          var i;
          for (i = 0; i < rows.length; i++) {
           var sesion={}; // Se crea un objeto vacio.
           sesion.usuario=rows[i].usuario;
           sesion.token=rows[i].token;
           sesion.fecha=rows[i].fecha;
           sesion.hora=rows[i].hora;
           sesiones.push(sesion);
          }
          con.release();
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
          res.jsonp(sesiones);
        console.log('Especificaron DNI');
      });
    });
  };

this.getmenues = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from menu', function(err, rows) {
	  if (err) throw err;
          var menues=[]; // Se crea un array vacio.
          var i;
          for (i = 0; i < rows.length; i++) {
           var menu={}; // Se crea un objeto vacio.
           menu.id_menu=rows[i].id_menu;
           menu.fecha=rows[i].fecha;
           menu.id_proveedor=rows[i].id_proveedor;
           menu.comida=rows[i].comida;
           menu.postre=rows[i].postre;
           menu.precio=rows[i].precio;
           menues.push(menu);
          }
          con.release();
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
          res.jsonp(menues);
        console.log('Especificaron DNI');
      });
    });
  };

this.getmenuid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from menu inner join proveedor where proveedor.id_proveedor=menu.id_proveedor and proveedor.descripcion = ?', [id], function(err, rows) {
	  if (err) throw err;
          var menues=[]; // Se crea un array vacio.
          var i;
          for (i = 0; i < rows.length; i++) {
           var menu={}; // Se crea un objeto vacio.
           menu.id_menu=rows[i].id_menu;
           menu.fecha=rows[i].fecha;
           menu.id_proveedor=rows[i].id_proveedor;
           menu.comida=rows[i].comida;
           menu.postre=rows[i].postre;
           menu.precio=rows[i].precio;
           menues.push(menu);
          }
          con.release();
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
          res.jsonp(menues);
        console.log('Especificaron DNI');
      });
    });
  };

  this.create = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('insert into empleado set ?', todo, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'IRSOSAV creacion fallida'});
        } else {
          res.send({status: 0, message: 'IRSOSAV creacion exitosa'});
        }
      });
    });
  };

  this.createses = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('insert into sesion set ?', todo, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Creacion en sesion fallida'});
        } else {
          res.send({status: 0, message: 'Creacion en sesion exitosa'});
        }
      });
    });
  };

  this.update = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('update empleado set ? where id = ?', [todo, todo.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'IRSOSAV creacion fallida'});
        } else {
          res.send({status: 0, message: 'IRSOSAV creacion exitosa'});
         }
      });
    });
  };

  this.updses = function(todo, id, res) {
    connection.acquire(function(err, con) {
      con.query('update sesion set ? where usuario = ?', [todo, id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Actualizacion de sesion fallida'});
        } else {
          res.send({status: 0, message: 'Actualizacion de sesion exitosa'});
         }
      });
    });
  };

  this.upgses = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('update sesion set ? where usuario = ?', [todo, todo.usuario], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Actualizacion de sesion fallida'});
        } else {
          res.send({status: 0, message: 'Actualizacion de sesion exitosa'});
         }
      });
    });
  };

  this.deletesesion= function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from sesion where usuario = ?', [id], function(err, result) {
      con.release();
      if (err) {
        res.send({status: 1, message: 'Eliminacion de sesion fallida'});
      } else {
        res.send({status: 0, message: 'Eliminacion exitosa'});
        }
    });
  });
 };

  this.deletemenu= function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from menu where id_menu = ?', [id], function(err, result) {
      con.release();
      if (err) {
        res.send({status: 1, message: 'Eliminacion de menu fallida'});
      } else {
        res.send({status: 0, message: 'Eliminacion exitosa'});
        }
    });
  });
 };

  this.deleteprovid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('delete from menu using proveedor inner join menu where proveedor.id_proveedor=menu.id_proveedor and cuit = ?', [id], function(err, result) {
        if (err) {
          res.send({status: 1, message: 'Eliminacion de menu fallida'});
        } else {
          con.query('delete proveedor from proveedor where cuit = ?', [id], function(err, result) {
          con.release();
	    if (err) {
              res.send({status: 1, message: 'Eliminacion de proveedor fallida'});
            } else {
              res.send({status: 0, message: 'Eliminacion exitosa'});
             }
          });
         };
      });
    });
  };
};

module.exports = new Todo();
