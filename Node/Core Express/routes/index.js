import module from "../../../Vanila JS/ES6/module";

const express = require('express');

const indexRoutes = express.Router();

//default routes '/'
app.get('/',(req, res, next) => {
    console.log('Im inside middleware');
    //invoking next will move to the next middleware
    next();
});

modules.exports = indexRoutes;