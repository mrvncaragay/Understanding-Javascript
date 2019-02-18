const http = require('http');
const routes = require('./routes')

// req -> request, res -> response
//returns a server
const server = http.createServer(routes.handler);

//List for incoming request in port 3000
server.listen(8000);

