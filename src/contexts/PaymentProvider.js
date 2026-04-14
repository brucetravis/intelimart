import axios from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider";
import { useCart } from "./CartProvider";

// create the context
const PaymentContext = createContext()

// create and export a custom payment hook
export const usePayment = () => useContext(PaymentContext)


// create and export the default payment provider
export default function PaymentProvider({ children }) {

    // loading state
    const [ loading, setLoading ] = useState(false) // initial state is fals emeaning not loading

    // get the decoded token
    const { decodedToken, setIsLoginModal } = useAuth()

    // get the cart state function
    const { setCartProducts } = useCart()

    // function to make a payment to paystack
    const payment = async (price) => {

        // get the token and the google token from loclStorage
        const token = localStorage.getItem('token')
        // const googleToken = localStorage.getItem('googleToken')

        // check if the user is logged in or signed up
        if (!token) {
            setIsLoginModal(true) //open the log in modal
            // exit the function
            return
        }

        // user data to send to the backend
        const paymentData = {
            email: decodedToken?.email,
            amount: price
        }

        try {
            // start loading
            setLoading(true)

            // backend response
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/payments/create-payment`,
                paymentData,
                {
                    headers: {
                        Authorization: `Bearer ${ token }`
                    }
                }
            )

            // get the authorization url from the backend
            const { authorization_url } = res.data

            // if the authorization url is not returned
            if (!authorization_url) {
                throw new Error("Payment link not returned.")
            }

            // if it is returned

            // Redirect the user to Paystack
            window.location.href = authorization_url

            // set the loading state to false
            setLoading(false)

            // clear the cart
            setCartProducts([])

            // remove the users cart
            localStorage.removeItem('cart')

        } catch(err) {
            console.error("Error making a Payment request to the backend: ")

            // const errMessage = 
            //     err.response?.data?.message || //backend netweok error 
            //     err.response || // axios error
            //     "Something went wrong"
            
            // toast.error(errMessage)

        } finally {
            setLoading(false)
        }
    }

    return (
        <PaymentContext.Provider value={{
            payment, loading
        }}>
            { children }
        </PaymentContext.Provider>
    )
}