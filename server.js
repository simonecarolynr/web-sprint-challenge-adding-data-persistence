const express = require('express')

const projectRouter = require("./routers/project-router")
const resourceRouter = require("./routers/resources-router")

const server = express()

server.use(express.json())

server.use(projectRouter)
server.use(resourceRouter)

module.exports = server