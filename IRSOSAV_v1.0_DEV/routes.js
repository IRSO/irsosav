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

/* Metodo PUT */
    app.put('/proveedor/:id', function(req, res) {
      todo.updprov(req.body, req.params.id, res);
    });

/* Metodo PATCH */
    app.patch('/proveedor/:id', function(req, res) {
      todo.upgprov(req.body, req.params.id, res);
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

/* Metodo PUT */
    app.put('/sesion/', function(req, res) {
      todo.updses(req.body, req.body.id_sesion, res);
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

/* Metodo PUT */
    app.put('/menu/', function(req, res) {
      todo.updmenu(req.body, req.body.id_menu, res);
    });

/* Metodo PATCH */
    app.patch('/menu/', function(req, res) {
      todo.upgmenu(req.body, req.body.id_menu, res);
    });

/* Metodo POST */
    app.post('/menu/', function(req, res) {
      todo.createmenu(req.body, res);
    });


    app.post('/todo/', function(req, res) {
      todo.create(req.body, res);
    });

    app.put('/todo/', function(req, res) {
      todo.update(req.body, res);
    });
  }
};
