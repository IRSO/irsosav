var todo = require('./models/todo');

module.exports = {
  configure: function(app) {
/* Proveedor */
/* Metodo GET */
    app.get('/proveedores/', function(req, res) {
      todo.getprov(res);
    });
    
    app.get('/proveedor/:id/', function(req, res) {
      todo.getprovid(req.params.id, res);
    });

/* Metodo DELETE */
    app.delete('/proveedor/:id/', function(req, res) {
      todo.deleteprovid(req.params.id, res);
    });

/* Metodo POST */
    app.post('/proveedor/', function(req, res) {
      todo.createprov(req.body, res);
    });

/* Metodo PATCH */
    app.put('/proveedor/:id', function(req, res) {
      var prov= {proveedor: req.params.id};
      var body= req.body;
      console.log(prov);
      console.log(body);
      todo.upgprov(body, prov, res);
    });


/* Sesion */
/* Metodo GET */
    app.get('/sesiones/', function(req, res) {
      todo.getses(res);
    });

    app.get('/sesion/:id/', function(req, res) {
      todo.getsesid(req.params.id, res);
    });

/* Metodo POST */
    app.post('/sesion/', function(req, res) {
      todo.createses(req.body, res);
    });

/* Metodo PATCH */
    app.patch('/sesion/', function(req, res) {
      todo.upgses(req.body, res);
    });

/* Metodo DELETE */
    app.delete('/sesion/:id/', function(req, res) {
      todo.deletesesion(req.params.id, res);
    });


/* Menu */
/* Metodo GET */
    app.get('/menues/', function(req, res) {
      todo.getmenues(res);
    });

    app.get('/menu/:id/', function(req, res) {
      todo.getmenuid(req.params.id, res);
    });

/* Metodo DELETE */
    app.delete('/menu/:id/', function(req, res) {
      todo.deletemenu(req.params.id, res);
    });

/* Metodo PATCH */
    app.put('/menu/:id', function(req, res) {
      var men= {id_menu: req.params.id};
      var body= req.body;
      console.log(men);
      console.log(body);
      todo.upgmenu(body, men, res);
    });

/* Metodo POST */
    app.post('/menu/', function(req, res) {
      todo.createmenu(req.body, res);
    });
  }
};
