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
    if (amountNum >= 0) {
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
                amount: payableAmount
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        )

        // return paystacks authorization url and reference here
        return response.data.data 

    } catch(err) {
        console.error("Error Initializing payment: ", err.response?.data)
        // throw err
        return res.status(500).json({
            message: "SERVER ERROR: ", err
        })
    }
    
}


// export the controller
module.exports = initPayment