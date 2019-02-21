const express = require('express');
const error404Page = express.Router();

//explicitly write '/' or not still the same output
app.use('/', (req, res, next) => {
    res.status(404).send('<h2>Page not found!</h2>')
});


modules.exports = error404Page;