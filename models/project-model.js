const db = require('../migrations/dbConfig')
const project = require('../routers/project-router')


function add(newProject) {
    return db("projects")
    .insert(newProject)
}

function addTask(newTask, projectId) {
    return db("task as t")
    .join("projects as p", "p.id", "t.project_id")
    .insert(newTask)
    .into("task")
    .where("t.project_id", projectId)
}

function find() {
    return db("projects")
}

function findTask(id) {
    return db("task as t")
    .join("project as p", "p.id", "t.project_id")
    .select("t.id", "p.name", "p.description", "t.name", "t.description", "t.notes", "t.completed")
    .where("p.id", id)
}


//STRETCH:

function findById() {

}

function update() {

}

function remove() {

}




module.exports = {
    add,
    addTask,
    find,
    findTask,
    findById,
    update,
    remove
}



