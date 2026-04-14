const { default: axios } = require("axios")

// function to initialize the payment
const initPayment = async (req, res) => {
    
    // get the email and amount from teh request body
    const { email, amount } = req.body

    // if they are not available
    if (!email || !amount ) {
        return res.status(400).json({ message: "All fields required" })
    }

    let amountNum = Number(amount)

    // convert amount a number and check if it is greater than 0
    if (amountNum <= 0) {
        return res.status(400).json({ message: "Amount MUST be greater than 0." })
    }

    // convert amount to the smallest unit
    const payableAmount = amountNum * 100


    try {
        // paystacks response
        const response = await axios.post(
            "https://api.paystack.co/transaction/initialize",
            {
                email: email,
                amount: payableAmount,
                callback_url: "http://localhost:3000/users/payment-success"
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        )

        // return paystacks authorization url and reference here
        return res.status(200).json(response.data.data)

    } catch(err) {
        console.error("Error Initializing payment: ", err.response?.data)
        // throw err
        return res.status(500).json({
            message: "SERVER ERROR: ",
            err: err.response?.data || err.message
        })
    }
    
}

// function to verify the users payment
const verifyPayment = async (req, res) => {

    try {
        // extract the refernce from teh url
        const { reference } = req.params

        // Ask paystack if teh reference is valid and successful
        const response = await axios.get(
            `https://api.paystack.co/transaction/verify/${reference}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
                }
            }
        ) // returns {
        //  data: {
        //      status: "success",
        //      reference: "abc123"
        //      amount: 5000
        // }

        const paymentData = response.data.data

        // check if the payment was successful
        if (paymentData.status !== "success") {
            // return a 400
            return res.status(400).json({
                success: false,
                message: "Payment not successful"
            })
        }

        // send a response to the frontend
        return res.status(200).json({
            success: true,
            message: "Payment verified successfully",
            data: paymentData
        })


    } catch(err) {
        console.error("ERROR VERIFYING PAYSTACK PAYMENT: ", err)
        return res.status(500).json({ 
            message: "Server Error",
            err: err.response?.data || err.message
        })
    }
}


// export the controller
module.exports = { initPayment,  verifyPayment }