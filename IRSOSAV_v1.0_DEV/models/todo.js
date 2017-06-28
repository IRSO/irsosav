var connection = require('../connection');

function Todo() {
/* Proveedor */
/* Metodo GET */
  this.getprov = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from proveedor', function(err, rows) {
        if (err) {
	  res.json(error);
        } else {
            var proveedores=[]; // Se crea un array vacio.
            var i;
            for (i = 0; i < rows.length; i++) {
              var proveedor={}; // Se crea un objeto vacio.
              proveedor.cuit=rows[i].cuit;
              proveedor.proveedor=rows[i].proveedor;
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
            res.json({'data': proveedores});
        }
      });
	//res.json(err);
    });
  };

  this.getprovid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query('select * from proveedor where proveedor = ?', [id], function(err, rows) {
        if (err) {
	  res.json(error);
        } else {
            var proveedores=[]; // Se crea un array vacio.
            var i;
            for (i = 0; i < rows.length; i++) {
              var proveedor={}; // Se crea un objeto vacio.
              proveedor.cuit=rows[i].cuit;
              proveedor.proveedor=rows[i].proveedor;
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
            res.json({'data': proveedores});
        }
      });
    });
  };

/* Metodo POST */
  this.createprov = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('insert into proveedor set ?', todo, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Creacion de proveedor fallida'});
        } else {
            res.send({status: 0, message: 'Creacion de proveedor exitosa'});
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
        }
      });
    });
  };

  this.createlogin = function(todo, todo, res) {
    //connection.acquire(function(err, con) {
      //con.query('insert into proveedor set ?', todo, function(err, result) {
        //con.release();
        //if (err) {
          //res.send({status: 1, message: 'Creacion de proveedor fallida'});
        //} else {
            res.setHeader('session', '0000001');
	    res.setHeader('profile', 'admin');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
            res.send({status: 200, message: 'Autenticacion exitosa'});
        //}
      //});
    //});
  };

/* Metodo PATCH */
  this.upgprov = function(todo, id, res) {
    connection.acquire(function(err, con) {
      con.query("set foreign_key_checks = 0", function(err, result) {
  //      if (err) {
  //        res.send({status: 1, message: 'Actualizacion de proveedor fallida'});
  //      } else {
            console.log(todo);
            console.log(id);
            con.query("update proveedor set ? where ?", [todo, id], function(err, result) {
  //            if (err) {
  //              res.send({status: 1, message: 'Actualizacion de proveedor fallida'});
  //            } else {
                  con.query("update menu set proveedor = ? where ?", [todo.proveedor, id], function(err, result) {
  //                  if (err) {
  //                    res.send({status: 1, message: 'Actualizacion de proveedor fallida'});
  //                  } else {
                        con.query("set foreign_key_checks = 1", function(err, result) {
                          con.release();
                          res.setHeader('Access-Control-Allow-Origin', '*');
                          res.setHeader('Access-Control-Allow-Credentials', true);
                          res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
                          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
                          res.status(200);
                          res.send({status: 0, message: 'Actualizacion de proveedor exitosa'});
  //                        if (err) {
  //                          res.send({status: 1, message: 'Actualizacion de proveedor fallida'});
  //                        } else {
  //                            res.send({status: 0, message: 'Actualizacion de proveedor exitosa'});
  //                        }
                        });
  //                  };
                  });
 //		};
	    });
 //       };
      });
    });
  };

/* Metodo DELETE */
  this.deleteprovid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query("delete menu from menu where proveedor = ?", [id], function(err, result) {
        if (err) {
          res.send({status: 1, message: 'Eliminacion de menu fallida'});
        } else {
            con.query("delete from proveedor where proveedor = ?", [id], function(err, result) {
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


/* Sesion */
/* Metodo GET */
  this.getsesid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query("select usuario,token,DATE_FORMAT(fecha,'%Y-%m-%d') as fecha,hora from sesion where usuario = ?", [id], function(err, rows) {
        if (err) {
	  res.json(error);
        } else {
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
            res.json({'data': sesiones});
        }
      });
    });
  };

/* Metodo POST */
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

/* Metodo PATCH */
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

/* Metodo DELETE */
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


/* Menu */
/* Metodo GET */
  this.getmenues = function(res) {
    connection.acquire(function(err, con) {
      con.query("select id_menu,DATE_FORMAT(fecha,'%Y-%m-%d') as fecha,proveedor,comida,postre,precio from menu", function(err, rows) {
        if (err) {
	  res.json(error);
        } else {
            var menues=[]; // Se crea un array vacio.
            var i;
            for (i = 0; i < rows.length; i++) {
              var menu={}; // Se crea un objeto vacio.
              menu.id_menu=rows[i].id_menu;
              menu.fecha=rows[i].fecha;
              menu.proveedor=rows[i].proveedor;
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
            res.json({'data': menues});
        }
      });
    });
  };

  this.getmenuid = function(id, res) {
    connection.acquire(function(err, con) {
      con.query("select id_menu,DATE_FORMAT(fecha,'%Y-%m-%d') as fecha,proveedor,comida,postre,precio from menu where id_menu = ?", [id], function(err, rows) {
        if (err) {
	  res.json(error);
        } else {
            var menues=[]; // Se crea un array vacio.
            var i;
            for (i = 0; i < rows.length; i++) {
              var menu={}; // Se crea un objeto vacio.
              menu.id_menu=rows[i].id_menu;
              menu.fecha=rows[i].fecha;
              menu.proveedor=rows[i].proveedor;
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
            res.json({'data': menues});
        }
      });
    });
  };

  /* Metodo DELETE */
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

/* Metodo PATCH */
  this.upgmenu = function(todo, id, res) {
    connection.acquire(function(err, con) {
      con.query('update menu set ? where ?', [todo, id], function(err, result) {
        con.release();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
        res.status(200);
        if (err) {
          res.json({status: 1, message: 'Actualizacion de menu fallida'});
        } else {
            res.json({status: 0, message: 'Actualizacion de menu exitosa'});
        }
      });
    });
  };

/* Metodo POST */
  this.createmenu = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query("insert into menu set ?", [todo], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Creacion en menu fallida'});
        } else {
            res.send({status: 0, message: 'Creacion en menu exitosa'});
        }
      });
    });
  };
};

module.exports = new Todo();

