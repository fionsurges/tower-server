const database = require('./database-connection')

module.exports = {
    list() {
        return database('recommendations').select()
    },
    read(id) {
        return database('recommendations')
            .where("id", id)
            .first()
    },
    create(review) {
        return database('recommendations')
            .insert(review)
            .returning('*')
            .then(record => record[0])
    },
    update(id, review) {
        return database('recommendations')
            .where('id', id)
            .update(review)
            .returning('*')
            .then(record => record[0])
    },
    delete(id) {
        return database('recommendations')
            .where('id', id)
            .delete()
    }
}