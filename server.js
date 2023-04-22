const express = require('express')
const app = express()

//data
const projects = require('./data/project')
const services = require('./data/service')
const technologies = require('./data/technology')

app.use(express.json())

const port = process.env.PORT || 4000

app.get('/', async (req, res) => {
    res.send('HOME')
})

app.get('/api/v1/projects', async (req, res) => {
    res.json(projects)
})

app.get('/api/v1/services', async (req, res) => {
    res.json(services)
})

app.get('/api/v1/technologies', async (req, res) => {
    res.json(technologies)
})

app.listen(port, () => {
    console.log(`app listening on port ${port}...`)
})