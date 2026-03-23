// import the express module
const express = require('express')

// create a minimalistic express router
const router = express.Router()

// import the upload middleware
const upload = require('../middleware/upload')

// import the controller to add the product
const { addProduct, fetchProducts, deleteProduct, updateProduct } = require('../controllers/productController')

// POST HTTP method to add a product
router.post('/', upload.single('image'), addProduct)

// GET HTTP method to fetch/read products
router.get('/', fetchProducts)

// DELETE HTTP method to delete products
router.delete('/:id', deleteProduct)

// UPDATE HTTP method to update the products details
router.put('/:id', upload.single('image'), updateProduct)

// export the router
module.exports = router