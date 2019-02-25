const express = require('express');
const path = requrie('path');
const error404Page = express.Router();

const rootDir = require('../helpers/path');

//explicitly write '/' or not still the same output
app.use('/', (req, res, next) => {
    //res.status(404).send('<h2>Page not found!</h2>')
    res.status(404).sendFile(path.join(rootDir, 'views', '404page.html'));

    //passing data to the view
    res.status(404).render('404', { pageTitle: 'Page Not Found!' });
});


modules.exports = error404Page;