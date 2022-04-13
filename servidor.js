const express = require('express');
const app = express();
const usuarioController = require('./src/controllers/usuario-controller');
const tarefaController = require('./src/controllers/tarefa-controller');

usuarioController(app);
tarefaController(app);

app.listen(8000);