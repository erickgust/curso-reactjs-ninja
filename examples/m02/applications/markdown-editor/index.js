'use strict'

const { join } = require('path')
const express = require('express')
const compression = require('compression')
const app = express()

app.use(compression())
app.use(express.static(join(__dirname, 'build')))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'build', 'index.html'))
})

app.listen(3333, () => console.log('Listening on localhost:3333'))
