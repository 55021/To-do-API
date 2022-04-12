const express = require('express');
const app = express();
const usuarioController = require('./controllers/usuario-controller');
const tarefaController = require('./controllers/tarefa-controller');

usuarioController(app);
tarefaController(app);

app.listen(8000);