const db = require('../dbConfig')
const resource = require('../routers/resources-router')

function add(newResource) {
    return db("resource")
    .insert(newResource)
}

function find() {
    return db("resource")
}

module.exports = {
    add,
    find
}