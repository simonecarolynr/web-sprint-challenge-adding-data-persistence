
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'Do research for childrens book', notes: 'Ask Ellie to take photos', project_id: 2},
        {description: 'Go to the printer', notes: 'Dog portraits need printed', project_id: 3},
        {description: 'Send invoices', notes: 'needa get paid', project_id: 1 }
      ]);
    });
};
