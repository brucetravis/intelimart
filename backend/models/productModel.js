const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    category: { type: String, required: true },
    sku: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    total: { type: Number, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    image: { type: String, required: true } // store cloudinary URL
}, { timestamps: true}) //automatically adds createdAt and updatedAt


module.exports = mongoose.model('Product', productSchema)

