const path = require('path');

const express = require('express');

const indexRoutes = express.Router();

const rootDir = require('../helpers/path');

//default routes '/'
app.get('/',(req, res, next) => {
    console.log('Im inside middleware');

    //Direct to an HTML page instead of using .send with .sendFile
    res.sendFile(path.join(rootDir, 'views', 'index.html'));

    //invoking next will move to the next middleware
    next();
});

modules.exports = indexRoutes;