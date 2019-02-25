//Path
const path = require('path');

//Routes for admin
const express = require('express');

const router = express.Router();

const rootDir = require('../helpers/path');

// -> /admin/add-user -> GET
router.use('/add-user',(req, res, next) => {
    console.log('Im inside adding user middleware');

    /*
        /user -> the path where the request should be send
                 will require a middleware /user
                 the position of this middleware could be before or after this middleware
        Use sendFile

          res.send('<form action="/admin/add-user" method="post"><input type="text" name="user"><button>submit</button></form>');
    */
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));


    next();
});

// -> /admin/add-user -> POST
router.post('/user', (req, res, next) => {
    console.log(res.body); //-> undefined request does not try to parse the body
    //after parser is installed -> {user: Marv }
    res.redirect('/'); //redirect to '/' path
});

module.exports = router;