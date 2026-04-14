// import the User model (tool to interact with the databse)
const User = require('../models/usersModel')
// import bcrypt to hash the password
const bcrypt = require('bcrypt')

// import the jsonwebtoken module to generate a jsonwebtoken
const jwt = require('jsonwebtoken')

// backend funcion to create a user
const createUser = async (req, res) => {
    // try catch block to try some code out

    // receive the data sent from the frontend
    const { firstName, secondName, gender,email, password, confirmPassword } = req.body

    // validate the data

    // check if any of the data is missing
    if (!firstName || !secondName || !gender || !email || !password || !confirmPassword) {
        // return an error of status 400 if any of the data above is missing
        return res.status(400).json({ message: "All fields required." })
    }

    // check if the passwords match
    if (password !== confirmPassword) {
        // return a 400 if they don't match
        return res.status(400).json({ message: "Passwords MUST match." })
    }

    // admins
    const admins = ["bruceambundo@gmail.com", "neurora4@gmail.com", "bruzy@gmail.com"]

    try {
        // Check if the user already exists in MongoDb (criteria: email)
        const existingUser = await User.findOne({ email }) // returns a promise because of await

        // if the user exists
        if (existingUser) { // if else treats it as a true/false
            // return a 400 invalid data
            return res.status(400).json({ message: "User alredy exists" })
        }

        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10) // hashing takes time, (use await)

        // user role
        // const role = "user"

        // new user
        const newUser = await User.create({
            firstName: firstName,
            secondName: secondName,
            gender: gender,
            role: admins.includes(email) ? "admin" : "user",
            email: email,
            password: hashedPassword
        })

        // send a response message the the user has been created successfully
        return res.status(201).json({ 
            message: "User created successfully.",
            userId: newUser._id
        })

    } catch (err) {
        console.error("ERROR CREATING USER: ", err)

        // send a JSON with a 500 status'
        return res.status(500).json({ message: "Server error" })
    }
}

// function to log in a user
const logInUser = async (req, res) => {

    // Get the data from the front end
    const { email, password } = req.body

    // validate the data

    // check if they both exist
    if (!email || !password) {
        // return a 400 invalid data error
        return res.status(400).json({ message: "All fields required." })
    }

    // check if the exists
    const existingUser = await User.findOne({ email }) // returns a promise because of await 

    // if the user does not exist, return a 404
    if (!existingUser) {
        return res.status(404).json({ message: "User does not exist." })
    }

    try {
        //  if the user exists
        
        // compare the passwords
        const comparePassword = await bcrypt.compare(password, existingUser.password)

        // if the passwords are not the same deny the user entry
        if (!comparePassword) {
            return res.status(400).json({ message: "Invalid Password" })
        }

        // Generate a JWT token that the user will use to make requests
        const token = jwt.sign(
            {
                userId: existingUser._id,
                firstName: existingUser.firstName,
                secondName: existingUser.secondName,
                email: existingUser.email,
                role: existingUser.role,
                status: existingUser.status
            }, // user payload
            process.env.JWT_SECRET, // secret token to sign our JWT token
            { expiresIn: '1h' }
        )

        // send a sucess message to the frontend together with the token
        return res.status(200).json({ 
            message: 'User successfully logged In.',
            token
        })

    } catch(err) {
        console.error("SERVER ERROR: ", err)
        
        // return a 500 server error
        return res.status(500).json({ message: "SERVER ERROR: ", err })
    }
}




// export the function
module.exports = { createUser, logInUser }