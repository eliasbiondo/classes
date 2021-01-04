const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Hello World!')
})

routes.get('/helloworld', (req, res) => {
    res.send('Nossas rotas estão funcionando!')
})

module.exports = routes;