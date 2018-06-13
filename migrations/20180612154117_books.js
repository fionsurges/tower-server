exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (table) => {
        table.increments()
        table.text('title')
        table.text('imageUrl')
        table.text('author')
        table.text('genre')
        table.integer('year')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books')
  };
  