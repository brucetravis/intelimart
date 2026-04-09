// import the express module
const express = require('express')

// create a minimalist Router
const router = express.Router()

// import the add to cart controller
const { addToCart, fetchCart, removeProduct } = require('../controllers/cartController')

// import the auth middleware
const authMiddleware = require('../middleware/auth')

// route to add a cart product
router.post('/addToCart', authMiddleware, addToCart)

// route to fetch all cart products
router.get('/fetchCart', authMiddleware, fetchCart)

// route to remove a product from cart
router.delete('/removeProduct/:id', authMiddleware, removeProduct)

// export the router
module.exports = router