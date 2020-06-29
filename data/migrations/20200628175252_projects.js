
exports.up = function(knex) {
    return knex.schema

    .createTable('projects', tbl =>{
        tbl.increments('id')
        tbl.string('name', 255).notNullable()
        tbl.string('discription', 255)
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
    
    .createTable("project", tbl => {
        tbl.increments("id")
        tbl
            .integer("project_id")
            .references("id")
            .inTable("project")
            .notNull()
        tbl.text("name").notNull()
        tbl.text("description")
        tbl.bool("completed").defaultTo(false)
    })

    .createTable("resources", tbl => {
        tbl.increments("id")
        tbl
            .integer("project_id")
            .references("id")
            .inTable("project")
            .notNull()
        tbl.text("name").notNull()
        tbl.text("description")
    })

    .createTable("task", tbl => {
        tbl.increments("id")
        tbl
            .integer("project_id")
            .references("id")
            .inTable("project")
            .notNull()
        tbl.text("description").notNull()
        tbl.text("notes")
        tbl.bool("completed").defaultTo(false)
    })    
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("resources")    
    .dropTableIfExists("project")
    .dropTableIfExists("projects")
};
