const express = require('express');
const app = express();

app.get('/entidade', (req, res) => {
    res.send('Rota ativada com GET e recurso entidade: valores de entidade devem ser retornados')
})

app.listen(8000);