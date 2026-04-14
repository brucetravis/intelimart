//  import the cart schema
const Cart = require('../models/cartModel')

// function to add a product to cart
const addToCart = async (req, res) => {
    // get the user Id from the request body
    const userId = req.user.userId
    
    // receive the product data from the frontend
    const { _id, name, quantity, price, image } = req.body

    // if any of the data is missing send a 400 status error
    if (!_id || !name || !quantity || !price || !image) {
        // return a 400 status error
        return res.status(400).json({ message: "All fileds required" })
    }

    //  if the price is less than 0 or the quantity is less than 0
    if (Number(price) <= 0 || Number(quantity) <= 0) {
        // send a 400 bad request error
        return res.status(400).json({ message: "Price and quantity MUST be greater than 0" })
    }

    try {
        // Check if a user already has a cart
        let cart = await Cart.findOne({ userId: userId })

        // if the cart exists
        if (cart) {
            // check if the product already exists in their cart
            const productIndex = cart.items.findIndex(item => item.productId.toString() === _id)

            //  if the product exists
            if (productIndex >= 0) {
                // increase the quantity of the product
                // cart.items[productIndex].quantity += quantity
                return res.status(409).json("Product exists in cart.")
                
                // if the product does not exist
            } else {
                cart.items.push({
                    productId: _id,
                    name,
                    price,
                    quantity,
                    image
                })
            }
        
            // save the cart
            cart.updatedAt = Date.now()
            await cart.save()

            // create the cart if it does not exist
        } else {
            cart = await Cart.create({
                userId: userId,
                items: [{
                    productId: _id,
                    name,
                    price,
                    quantity,
                    image
                }]
            })
        }

        // return a 201 status response
        return res.status(200).json({
            message: "Product saved to cart Successfully",
            cart: cart ? cart.items : [] // return the users cart
        })

    } catch(err) {
        console.error("SERVER ERROR: ", err)
        return res.status(500).json({ message: "Server Error" })
    }

}

// function to remove a product from cart
const removeProduct = async (req, res) => {

    // get the product id from the fronend
    const { id } = req.params

    // get the user Id to see if tehy have a cart
    const userId = req.user.userId

    // if the id or the user is missing send a 404
    if (!id || !userId) {
        return res.status(400).json({ message: "ALL Id's required." })
    }

    try {
        // check if the user already has a cart
        let cart = await Cart.findOne({ userId: userId })

        // if the user has a cart
        if (!cart) {
            return res.status(200).json({
                message: "Cart is empty",
                cart: []
            })
        }

        // check if the product exists in the cart before removing it
        const productExists = cart.items.some(item => item.productId.toString() === id)


        // if the product does not exist
        if (!productExists) {
            // send a 404 (resource not found)
            return res.status(404).json({ message: "Product Not Found In Cart."})
        }

        // remove the product from the cart
        const remProducts = cart.items.filter(item => item.productId.toString() !== id)
        
        // update the items in the cart
        cart.items = remProducts
        
        // update the date of cart update
        cart.updatedAt = Date.now()
        // save the cart
        await cart.save()

        // send a response message
        return res.status(200).json({
            message: "Product removed from cart successfully",
            cart: cart.items
        })

    } catch(err) {
        console.error("SERVER ERROR: ", err)
        return res.status(500).json({
            message: "SERVER ERROR"
        })
    }
}


// function to fetch all cacrt products from the cart
const fetchCart = async (req, res) => {
    try {
        // Fetch the cart products from the db
        const cart = await Cart.findOne({
            userId: req.user.userId
        })

        // respond with the cart products
        return res.status(200).json({
            message: "Cart products fetched successfully",
            cart: cart ? cart.items : []
        })

    } catch(err) {
        console.error("SERVER ERROR")
        return res.status(500).json("Server Error.")
    }
}


// export the function
module.exports = { addToCart, fetchCart, removeProduct }