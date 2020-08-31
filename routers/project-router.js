const express = require('express')
const projectDb = require('../models/project-model')
const resourceDb = require('../models/resource-model')
const taskDb = require('../models/task-model')

const project = express.Router()

//CREATES new project /project
project.post('/project', async (req, res, next) => {
    try {
        const newProject = await projectDb.add(req.body)
        res.json(newProject)
    } catch(err) {
        next(err)
    }

})

//CREATES new task /project/:id/task
project.post('/project/:id/task', async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
    projectDb.addTask()
})

//RETRIEVES all projects /project
project.get('/project', async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
    projectDb.find()
})

// *** STRETCH: RETRIEVES project by ID /project/:id ***


// *** STRETCH: RETRIEVES resources from a project /project/:id/resources ***


//RETRIEVES all tasks from a project /project/:id/task

project.get('/project/:id/task', async (req, res, next) => {
    try {

    } catch(err) {
        next(err)
    }
})


//*** STRETCH: RETRIEVES a task by it's ID from a project /project/:projectId/task/:taskId ***


//*** STRETCH: UPDATES project by ID /project/:id ***


//*** STRETCH: DELETES project /project/:id ***



module.exports = project;