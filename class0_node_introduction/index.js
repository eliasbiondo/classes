const express = require('express');
const env = require('dotenv');
const routes = require('./routes');

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);

env.config();

const port = process.env.PORT || 4000;

app.listen(port, error => {
    console.log(`${error ? 'There was an error' : 'Server started sucessfully'}`);
})