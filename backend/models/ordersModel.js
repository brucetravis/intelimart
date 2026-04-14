// import the mongoose model to create the schema
const mongoose = require('mongoose')

// cart schema
const ordersSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Allows you refernce another document
        ref: "User", // refernces the user model
        required: true
    },

    OrderId: { type: String, required: true },

    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product", // refernces the Product model
                required: true
            },

            name: {
                type: String,
                required: true
            },

            price: {
                type: Number,
                required: true
            },

            quantity: {
                type: Number,
                required: true,
                default: 1
            },

            image: {
                type: String, // cloudinary URL
                required: true
            }
        }
    ],
    
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

// export the cart schema
module.exports = mongoose.model("Orders", ordersSchema)