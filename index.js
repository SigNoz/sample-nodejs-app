const { init } = require('./tracing')
const api = require('@opentelemetry/api')
init('demo-node-service', 'development')

const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/hello', async (req, res) => {
    const apiResponse = await axios.get('https://randomuser.me/api/')
    // const activeSpan = api.trace.getSpan(api.context.active())
    // activeSpan.addEvent('Hello API Called', { randomIndex: 1 })
    res.status(200).send({
        success: true,
        result: apiResponse.data,
    })
})

app.listen(3000, (req, res) => {
    console.log('server started')
})