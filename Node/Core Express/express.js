//Initiating an express App

//Install express
    //npm install express --save

//Importing express
const express = require('express');
const app = express();

//using PUG
app.set('view engine', 'pug');

//setting different path template
app.use('views', 'views');

//importing routes
const adminRoutes = require('./routes/admin');
const indexRoutes = require('./routes/index');
const error404Page = require('./routes/404error');

//body parser
const bodyParser = require('body-parser');

//Middleware function are functions that have access to response (res), request(req), and next middleware
app.use((req, res, next) => {
    console.log('Im inside middleware');
    //invoking next will move to the next middleware
    next();
});

//using imported admin routes and filtering routes
// -> /admin/add-user
app.use('/admin', adminRoutes);


//using imported index route
app.use(indexRoutes); //will get an error if the path is not index since GET is used not use that handle random path


//creating a 404 page
app.use(error404Page);

/*
    //creating server in Code node
    //const server = http.createServer(routes.handler);

    //List for incoming request in port 3000
    //server.listen(8000);
*/

// or in express
app.listen(3000); // 3000 port number