const express = require('express')
const reviewsRouter = express.Router()

const reviewsQueries = require('../reviewsQueries')

reviewsRouter.get('/', (request, response, next) => {
    reviewsQueries.list().then(reviews => {
        response.json({reviews})
    }).catch(next)
})

reviewsRouter.get('/:id', (request, response, next) => {
    reviewsQueries.read(request.params.id).then(review => {
        review 
            ? response.json({review})
            : response.status(404).json({message: 'Not found'})
    }).catch(next)
})

reviewsRouter.post('/', (request, response, next) => {
    reviewsQueries.create(request.body).then(review => {
        response.status(201).json({review})
    }).catch(next)
})

reviewsRouter.delete('/:id', (request, response, next) => {
    reviewsQueries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true})
    }).catch(next)
})

reviewsRouter.put('/:id', (request, response, next) => {
    reviewsQueries.update(request.params.id, request.body).then(review => {
        response.json({review})
    }).catch(next)
})

module.exports = reviewsRouter