// import the express module
const express = require('express')

// create a minimalistic express router
const router = express.Router()

// import the upload middleware
const upload = require('../middleware/upload')

// import the product controllers
const { addProduct, fetchProducts, deleteProduct, updateProduct } = require('../controllers/productController')

// import the auth Middleware
const authMiddleware = require('../middleware/auth')

// POST HTTP method to add a product
router.post('/', upload.single('image'), addProduct)

// GET HTTP method to fetch/read products
router.get('/', fetchProducts)

// DELETE HTTP method to delete products
router.delete('/:id', authMiddleware, deleteProduct)

// UPDATE HTTP method to update the products details
router.put('/:id', authMiddleware, upload.single('image'), updateProduct)

// export the router
module.exports = router