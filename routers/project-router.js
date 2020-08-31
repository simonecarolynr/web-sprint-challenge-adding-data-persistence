const express = require('express')
const projectDb = require('../models/project-model')
const resourceDb = require('../models/resource-model')
const taskDb = require('../models/task-model')

const project = express.Router()

module.exports = project;