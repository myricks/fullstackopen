const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/blogs', blogRouter)

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('Connected to mongoDB')
    })
    .catch(error => {
        console.log('Failed to connect mongoDB', error.message)
    })


app.get('/', (request, response) => {
    response.send('<h1>Hello world!</h1>')
})

module.exports = app