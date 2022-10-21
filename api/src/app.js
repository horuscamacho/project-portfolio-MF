const express = require('express') 
const server = express()
const cors = require("cors")

server.use(cors())
server.use(express.json())
server.use("/", require('./router/routers'));

module.exports = server;

