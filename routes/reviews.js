const express = require('express')
const reviewsRouter = express.Router()

const reviewsQueries = require('../reviewsQueries')

reviewsRouter.get('/reviews', (request, response, next) => {
    reviewsQueries.list().then(reviews => {
        response.json({reviews})
    }).catch(next)
})

reviewsRouter.get('/review/:id', (request, response, next) => {
    reviewsQueries.read(request.params.id).then(review => {
        review 
            ? response.json({review})
            : response.status(404).json({message: 'Not found'})
    }).catch(next)
})

reviewsRouter.post('/reviews', (request, response, next) => {
    reviewsQueries.create(request.body).then(review => {
        response.status(201).json({review})
    }).catch(next)
})

reviewsRouter.delete('/reviews/:id', (request, response, next) => {
    reviewsQueries.delete(request.params.id).then(() => {
        respnose.status(204).json({deleted: true})
    }).catch(next)
})

reviewsRouter.put('/reviews/:id', (request, response, next) => {
    reviewsQueries.update(request.params.id, request.body).then(review => {
        response.json({review})
    }).catch(next)
})

module.exports = reviewsRouter