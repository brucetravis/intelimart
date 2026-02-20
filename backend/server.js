require('dotenv').config()

// import the express module using common js
const express = require('express')

// create an express server instance (the actual server/object)
const app = express()

// The port we will be using to listen for incoming requests
const PORT = 5000

// create a simple root route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// listen for any incoming requests in the specified port
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

