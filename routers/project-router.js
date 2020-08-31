const express = require('express')
const projectDb = require('../models/project-model')
const resourceDb = require('../models/resource-model')
const taskDb = require('../models/task-model')

const project = express.Router()

//CREATES new project /project


//RETRIEVES all projects /project


//RETRIEVES project by ID /project/:id


//RETRIEVES resources from a project /project/:id/resources


//RETRIEVES all tasks from a project /project/:id/task


//RETRIEVES a task by it's ID from a project /project/:projectId/task/:taskId


//UPDATES project by ID /project/:id


//DELETES project /project/:id



module.exports = project;