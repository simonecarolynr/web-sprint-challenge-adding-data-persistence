const express = require('express')
const projectDb = require('../models/project-model')
const resourceDb = require('../models/resource-model')
const taskDb = require('../models/task-model')

const project = express.Router()

//CREATES new project /project
project.post('/project', async (req, res, next) => {

})

//CREATES new task /project/:id/task
project.post('/project/:id/task', async (req, res, next) => {

})

//RETRIEVES all projects /project
project.get('/project', async (req, res, next) => {
    
})

// *** STRETCH: RETRIEVES project by ID /project/:id ***


// *** STRETCH: RETRIEVES resources from a project /project/:id/resources ***


// *** STRETCH???: RETRIEVES all tasks from a project /project/:id/task ***


//*** STRETCH: RETRIEVES a task by it's ID from a project /project/:projectId/task/:taskId ***


//*** STRETCH: UPDATES project by ID /project/:id ***


//*** STRETCH: DELETES project /project/:id ***



module.exports = project;