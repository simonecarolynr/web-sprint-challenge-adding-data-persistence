
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'iPad', description: 'my tablet for creating digital renderings'},
        {name: 'Laptop', description: 'my computer for corresponding, research, and finalizing digital renderings'},
        {name: 'Sketchbook', description: 'Paper and pen for drafting ideas'}
      ]);
    });
};
