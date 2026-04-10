// import the express module
const express = require('express')

// create a minimalistic router
const router = express.Router()

// Authentication Middleware
const authMiddleware = require('../middleware/auth')

// payment controller
const { initPayment, verifyPayment } = require('../controllers/paymentController')


// router to create a transaction with paystack
router.post('/create-payment', authMiddleware, initPayment)

// router to verify a payment
router.get('/verify-payment/:reference', authMiddleware, verifyPayment)

// export the router
module.exports = router