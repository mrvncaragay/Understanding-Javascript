/*
    HANDLING ROUTES

    remember: execution is from top to bottom
              therefor order of middleware is very important.

              If the path is executed it will not run the rest of the middleware
              unless you call next()

 */

app.use('/add-product',(req, res, next) => {
    console.log('Im inside add-product page');
    //invoking next will move to the next middleware
    next();
});


/*
     LIMITING middleware execution to specific request
     app.use
     app.get
     app.post
     app.patch
     app.delete
     app.put
*/

//Middleware function are functions that have access to response (res), request(req), and next middleware
//default routes '/'
app.use('/',(req, res, next) => {
    console.log('Im inside middleware');
    //invoking next will move to the next middleware
    next();
});

/*
    PARSING DATA WITHIN ROUTES

    note: install body parser: npm install body-parser
          to parse the incoming request

          need this to go first in the order

*/

//body parser
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false})); //Only parse text


