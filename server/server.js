const express = require('express')
const bodyParser = require('body-parser')
const { resolve } = require('path')

const server = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000

server.use(express.static(resolve(__dirname, '../dist')))

server.use(bodyParser.json({ limit: '50mb', extended: true }))
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

server.use('/api/notes/v1', require('./routes/api-v1-notes.js'))

server.use('*', (req, res) => res.send('Request not found...'))

server.listen(PORT, () => {
  console.log(`Server has been started at http://localhost:${PORT}...`)
})