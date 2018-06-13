exports.up = function(knex, Promise) {
    return knex.schema.createTable('recommendations', (table) => {
        table.increments()
        table.text('bookTitle')
        table.text('recommendedBy')
        table.integer('rating')
        table.text('comments')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recommendations')
};
