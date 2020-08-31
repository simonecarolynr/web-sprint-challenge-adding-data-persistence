const express = require('express')
const db = require('../models/resource-model')

const resource = express.Router()

//CREATES a resource /resource
resource.post('/resource', async (req, res, next) => {
    try {
        const newResource = await db.add(req.body)

        res.status(201).json(newResource)
    } catch(err) {
        next(err)
    }
})

//RETRIEVES all resources /resource
resource.get('/resource', async (req, res, next) => {
    try {
        const resources = await db.find()

        res.status(200).json(resources)

    } catch(err) {
        next(err)
    }
})

// *** STRETCH: RETRIEVES resource by ID /resource/:id ***


// *** STRETCH: UPDATES resource by ID /resource/:id ***


// *** STRETCH: DELETES resource by ID /resource/:id ***



module.exports = resource