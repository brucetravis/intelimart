// import the orders schema
const Orders = require('../models/ordersModel')
// import the uuid module so that we can generate an Id for each product
const { v4: uuidv4 } = require('uuid')

// function to order a product
const addOrder = async (req, res) => {

    // check if the user is logged in
    const userId = req.user.userId

    // receive the product data from the frontend
    const { _id, name, quantity, price, image } = req.body

    // check if all fields are present
    if (!_id || !name || !quantity || !price || !image) {
        // return a 400
        return res.status(400).json({
            message: "All field required."
        })
    }

    //create an order id
    const orderId = uuidv4()

    try {
        // check if the user order cart already exists
        let orders = await Orders.findOne({ userId: userId })

        // if the users order cart exists
        if (orders) {
            // check if the product has already been ordered
            let productIndex = orders.items.findIndex(item => item.productId.toString() === _id)

            // if it has already been ordered, inform the user
            if (productIndex >= 0 ) {
                // return a 409
                return res.status(409).json({ message: "Product Already ordered"})
            } else {

                orders.items.push({
                    OrderId: orderId,
                    productId: _id,
                    name,
                    price,
                    quantity,
                    image
                })
            }

            // save the order cart
            orders.updatedAt = Date.now()
            // save the order cart
            await orders.save()

            console.log("SAVED ORDER: ", orders)

        } else {
            orders = await Orders.create({
                userId: userId,
                OrderId: orderId,
                items: [{
                    productId: _id,
                    name,
                    price,
                    quantity,
                    image
                }]
            })
        }

        // return a response
        return res.status(200).json({
            message: "Order placed, Await Delivery within 5 working days",
            orders: orders ? orders.items : []
        })

    } catch(err) {
        console.error("SERVER ERROR: ", err)
        return res.status(500).json({ message: "SERVER ERROR " })
    }
}


// function to fetch all orders
const fetchOrders = async (req, res) => {

    try {
        // fetch all orders from the database
        const orders = await Orders.find({}).populate("userId", "firstName email")

        console.log("FETCHED ORDER: ", orders)

        // send teh orders to the frontend with a 200
        return res.status(200).json({
            message: "Orders fetched successfully.",
            orders: orders
        })

    } catch(err) {
        console.error("SERVER ERROR: ", err)
        return res.status(500).json({ message: "SERVER ERROR" })
    }
}


// export the function
module.exports = { addOrder, fetchOrders }