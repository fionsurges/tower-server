const express = require('express')
const booksRouter = express.Router()

const booksQueries = require('../bookQueries')

booksRouter.get('/books', (request, response, next) => {
    booksQueries.list().then(books => {
        response.json({books})
    }).catch(next)
})

booksRouter.get('books/:id', (request, response, next) => {
    booksQueries.read(request.params.id).then(book => {
        book 
            ? response.json({book})
            : response.status(404).json({message: 'Not found'})
    }).catch(next)
})

booksRouter.post('/books', (request, response, next) => {
    booksQueries.create(request.body).then(book => {
        response.status(201).json({book})
    }).catch(next)
})

booksRouter.delete('/:id', (request, response, next) => {
    booksQueries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true})
    }).catch(next)
})

booksRouter.put('/:id', (request, response, next) => {
    booksQueries.update(request.params.id, request.body).then(book => {
        response.json({book})
    }).catch(next)  
})

module.exports = booksRouter