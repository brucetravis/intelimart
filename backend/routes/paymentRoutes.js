// import the express module
const express = require('express')

// create a minimalistic router
const router = express.Router()

// Authentication Middleware
const authMiddleware = require('../middleware/auth')

// payment controller
const initPayment = require('../controllers/paymentController')


// router to create a transaction with paystack
router.post('/create-payment', authMiddleware, initPayment)

// export the router
module.exports = router