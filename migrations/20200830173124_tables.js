
exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments("id")
      tbl.text("name").notNull()
      tbl.text("description")
      tbl.boolean("completed").defaultTo(0).notNull()
    })

    .createTable("resource", tbl => {
        tbl.increments("id")
        tbl.text("name").notNull().unique()
        tbl.text("description")
    })

    .createTable("tasK", tbl => {
        tbl.increments("id")
        tbl.text("description").notNull()
        tbl.text("notes")
        tbl.integer("project_id").notNull().references("id").inTable("projects")
        tbl.boolean("completed").defaultTo(0).notNull()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("projects")
};

