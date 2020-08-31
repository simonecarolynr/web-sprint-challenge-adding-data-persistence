
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Album art', description: 'Album art and other digital marketing for Norris Amundsen'},
        {name: 'Tree House', description: 'Illustrations for Ginny from Point Lookout'},
        {name: 'Pet portraits', description: 'Fulfill client orders'}
      ]);
    });
};
