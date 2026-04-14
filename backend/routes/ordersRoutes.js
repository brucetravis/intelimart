// import the express module
const express = require('express')

// create a minimalistic Router
const router = express.Router()

// import the auth Middleware
const authMiddleware = require('../middleware/auth')


// import the controller logic for making an order
const { addOrder, fetchOrders } = require('../controllers/ordersController')

// router to make an order
router.post('/makeOrder', authMiddleware, addOrder)

// router to fetch all orders
router.get('/', authMiddleware, fetchOrders)


module.exports = router