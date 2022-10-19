const express = require('express') 
const server = express()

server.use("/", require('./router/routers'));

module.exports = server;

