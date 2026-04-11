// import the express module
const express = require('express')

// create a minimalistic router
const router = express.Router()

// import the auth middleware
const authMiddleware = require('../middleware/auth')

// get all the controller to fetch all users
const getAllUsers = require('../controllers/usersController')

// route to get all users
router.get('/', authMiddleware, getAllUsers)


// export the router
module.exports = router