// import the User model (tool to interact with the databse)
const User = require('../models/usersModel')

// function to query all users
const getAllUsers = async (req, res) => {

    // try catch block  incase of any errors
    try {
        // users
        const users = await User.find()

        // respond with a success message
        return res.status(200).json({ 
            message: 'Users queried successfully.', 
            users: users 
        })

    } catch(err) {
        console.error("ERROR QUERYING USERS: ", err)
        return res.status(500).json({ message: 'SERVER ERROR' })
    }
}

module.exports = getAllUsers

