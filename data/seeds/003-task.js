
exports.seed = function(knex) {
  return knex("task").insert([   
    { project_id: 1, description: "Pick up lots of extra side gigs", notes: "", completed: true },
    { project_id: 1, description: "Create a budget to help save money", notes: "", completed: false },
    { project_id: 2, description: "Study up", notes: "", completed: true },
	])
};
