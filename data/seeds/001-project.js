
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { name: "Save 10,000 dollars", description: "Need to save money so I can move", completed: false },
        { name: "Find a job", description: "I'll need a job once I move", completed: false },
        { name: "Move to Colorado", description: "Can't wait!", completed: false }
      ]);
    });
};
