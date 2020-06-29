
exports.seed = function(knex) {
  return knex("resource").insert([   
    { project_id: 1, name: "side gigs", description: "graphic design, web design, consulting" },
    { project_id: 1, name: "budget", description: "" },
    { project_id: 2, name: "applications", description: "from jobs I want" },
    { project_id: 2, name: "Lambda", description: "Study to get that high-paying job!" },
    { project_id: 3, name: "car", description: "" },
    { project_id: 3, name: "craigslist", description: "always great for finding cheap furniture for the new house" },
  ])
};
