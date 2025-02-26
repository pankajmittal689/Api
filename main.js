const express = require('express')
const indexRoute = require('./Route/route1')
const app = express()
app.use(express.json())
app.use('/api', indexRoute)

app.listen(3000, () => {
    console.log("Post started at 3000")
})