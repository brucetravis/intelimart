// import the express module
const express = require('express')

// create a minimalist express router instance using the express framework
const router = express.Router()

// export the controller creating the user
const { createUser, logInUser, getAllUsers } = require('../controllers/authController')

// route to get all users
router.get('/users', getAllUsers)

// route to create a user
router.post('/register', createUser)

// route to log in a user
router.post('/logIn', logInUser)

// export the router
module.exports = router



