const database = require('./database-connection')

module.exports = {
    list() {
        return database('books').select()
    },
    read(id) {
        return database('books')
            .where("id", id)
            .first()
    },
    create(book) {
        return database('books')
            .insert(book)
            .returning('*')
            .then(record => record[0])
    },
    update(id, book) {
        return database('books')
            .where('id', id)
            .update(book)
            .returning('*')
            .then(record => record[0])
    },
    delete(id) {
        return database('books')
            .where('id', id)
            .delete()
    }
}