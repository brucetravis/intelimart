// import mongoose so that we can create a MongoDB schema
const mongoose = require("mongoose")

// user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String, // second name has to be a string
        required: true // second name cannot be empty
    },

    secondName: {
        type: String, // second name has to be a string
        required: true // second name cannot be empty
    },

    email: {
        type: String, // email has to be a string
        required: true, // email cannot be empty
        unique: true // email has to be unique
    },

    role: {
        type: String, // user role has to be a string
        required: true // user role cannot be empty
    },

    password: {
        type: String, // second name has to be a string
        required: true // second name cannot be empty
    },

    createdAt: {
        type: Date, // date type
        default: Date.now // curret date when the user is being created
    }
})


// export the user schema
module.exports = mongoose.model("User", userSchema)