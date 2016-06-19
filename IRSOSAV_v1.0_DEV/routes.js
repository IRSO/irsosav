var todo = require('./models/todo');

module.exports = {
  configure: function(app) {
    app.get('/proveedores/', function(req, res) {
      todo.getprov(res);
    });
    
    app.get('/proveedor/:id/', function(req, res) {
      todo.getprovid(req.params.id, res);
    });

    app.get('/sesiones/', function(req, res) {
      todo.getses(res);
    });

    app.get('/sesion/:id/', function(req, res) {
      todo.getsesid(req.params.id, res);
    });

    app.get('/menues/', function(req, res) {
      todo.getmenues(res);
    });

    app.get('/menu/:id/', function(req, res) {
      todo.getmenuid(req.params.id, res);
    });

    app.post('/todo/', function(req, res) {
      todo.create(req.body, res);
    });

    app.post('/sesion/', function(req, res) {
      todo.createses(req.body, res);
    });

    app.put('/todo/', function(req, res) {
      todo.update(req.body, res);
    });

    app.put('/sesion/:id', function(req, res) {
      todo.updses(req.body, req.params.id, res);
    });

    app.patch('/sesion/', function(req, res) {
      todo.upgses(req.body, res);
    });

    app.delete('/sesion/:id/', function(req, res) {
      todo.deletesesion(req.params.id, res);
    });

    app.delete('/proveedor/:id/', function(req, res) {
      todo.deleteprovid(req.params.id, res);
    });

    app.delete('/menu/:id/', function(req, res) {
      todo.deletemenu(req.params.id, res);
    });
  }
};
