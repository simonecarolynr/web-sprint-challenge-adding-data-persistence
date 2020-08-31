const db = require('../dbConfig')

function add(newProject) {
    return db("project")
    .insert(newProject)
}

function addTask(newTask, projectId) {
    return db("task as t")
    .join("project as p", "p.id", "t.project_id")
    .insert(newTask)
    .into("task")
    .where("t.project_id", projectId)
}

function find() {
    return db("project")
}

function findTask(id) {
    return db("task as t")
    .select("t.id", "p.name", "p.description", "t.description", "t.notes", "t.completed")
    .where("t.project_id", id)
    .join("project as p", "p.id", "t.project_id")
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



