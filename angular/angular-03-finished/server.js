
const app = require('./backend/app');
const debug = require("debug")("node-angular")
const http = require('http');

let a = 1

const port = process.env.PORT || 3000

app.set('port', port);
const server = http.createServer(app);

server.listen( 3000);

