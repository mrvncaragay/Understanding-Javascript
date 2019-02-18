const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Registration</title></head>');
        res.write('<body><H1>Hello from Node Registration</H1>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        //Get the submitted response data
        const body = []; //read the request body

        req.on('data', (dataChunk) => {
            //console.log(dataChunk);
            body.push(dataChunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.text', message, err => {
                res.statusCode = 302;
                res.setHeader('Location',  '/');
                return res.end();
            });
        });

    }

//Response
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node Server</h1></body>');
    res.write('</html>');
    res.end();
};

//module.exports = requestHandler;

//Or

//Global Object
module.exports = {
    //exporting multiple
    handler: requestHandler,
    someText: 'Some coded Text'
};

//or

// exports.handler = requestHandler;
// exports.hardCodedText = "Hard Coded Text";

// const fs = require('fs');
//
// const requestHandler = (req, res) => {
//
//     const url = req.url;
//     const method = req.method;
//
//     if (url === '/') {
//         res.write('<html>');
//         res.write('<head><title>Registration</title></head>');
//         res.write('<body><H1>Hello from Index Pagen</H1>');
//         res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"></form></body>');
//         res.write('</html>');
//         return res.end();
//     }
//
//     if (url === '/users' && method === 'GET') {
//
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>');
//         res.write('<head><title>Users Page</title></head>');
//
//
//         res.write('<body><ul><li>user1</li><li>user2</li></ul></body>');
//
//
//         res.write('</html>');
//         return res.end();
//
//     }
//
//     if (url === '/create-user' && method === 'POST') {
//         //Get the submitted response data
//         const body = []; //read the request body
//
//         req.on('data', (dataChunk) => {
//             //console.log(dataChunk);
//             body.push(dataChunk);
//         });
//
//         return req.on('end', () => {
//             const parseBody = Buffer.concat(body).toString();
//             const message = parseBody.split('=')[1];
//            res.statusCode = 302;
//            res.setHeader('Location',  '/');
//            console.log(message);
//            return res.end();
//
//         });
//
//     }
//
//
//
//
// //Response
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello from Node Server</h1></body>');
//     res.write('</html>');
//     res.end();
// };

