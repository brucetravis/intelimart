require('dotenv').config()
require('./configs/connect') // load the mongo configs file

console.log(process.env.MONGO_URI ? "URI exists": "URI missing")

// import the express module using common js
const express = require('express')
// create an express server instance (the actual server/object)
const app = express()
// import the cors module
const cors = require('cors')

// import the product routes
const productRoutes = require('./routes/productRoutes')
// import the auth routes
const authRoutes = require('./routes/authRoutes')
// import the cart routes
const cartRoutes = require('./routes/cartRoutes')
// import the users routes
const usersRoutes = require('./routes/usersRoutes')
// import the orders routes
const ordersRoutes = require('./routes/ordersRoutes')

// import the payment routes
const paymentRoutes = require('./routes/paymentRoutes')

app.use(express.json()) // without this line, express will not be able to read the request body for the relevant HTTP methods
app.use(cors({
    origin: [
        'http://localhost:3000', // restrict cors to a specific origin
        'https://intelimart.neurorainnovations.com'
    ]
}))

// Register the product routes
app.use('/products', productRoutes) // take every route in productRoutes.js and prefix it with /products
app.use('/auth', authRoutes) // prefix every user route with 'users'
app.use('/cart', cartRoutes) // prefix every route with 'cart'
app.use('/payments', paymentRoutes)
app.use('/users', usersRoutes)
app.use('/orders', ordersRoutes)
app.use('/orders', ordersRoutes)

// create a simple root route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// The port we will be using to listen for incoming requests
const PORT = process.env.PORT || 5000 // get the default PORT set in the environment variables, otherwise set the PORT to 5000

// listen for any incoming requests in the specified port
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})

