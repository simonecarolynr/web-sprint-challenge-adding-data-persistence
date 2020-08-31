const express = require('express')
const db = require('../models/resource-model')

const resource = express.Router()

//CREATES a resource /resource
resource.post('/resource', async (req, res, next) => {
    db.add()
})

//RETRIEVES all resources /resource
resource.get('resource', async (req, res, next) => {
    db.find()
})

// *** STRETCH: RETRIEVES resource by ID /resource/:id ***


// *** STRETCH: UPDATES resource by ID /resource/:id ***


// *** STRETCH: DELETES resource by ID /resource/:id ***



module.exports = resource