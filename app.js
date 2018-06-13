const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const knex = require('./database-connection')

const books = require('./routes/books')   
const reviews = require('./routes/reviews')   


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use('/books', books)
app.use('/reviews', reviews)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404                                                                                
    next(err)
})

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err.stack : {}
    })
})


module.exports = app
