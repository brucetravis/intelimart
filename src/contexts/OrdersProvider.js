import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

// create the context
const OrdersContext = createContext()

// custom hook for our content
export const useOrders = () => useContext(OrdersContext)

export default function OrdersProvider({ children }) {

    const { setIsLoginModal } = useAuth()

    // state to store the user orders
    const [ orders, setOrders ] = useState([]) // initial state is an empty array

    // loading state
    const [ loading, setLoading ] = useState(false) // initial loading state is false

    // get the user token
    const token = localStorage.getItem('token')
    const googleToken = localStorage.getItem('googleToken')

    // function to order a product
    const orderProduct = async (product) => {

        try {
            setLoading(true)

            // check if the user is logged in
            if (!token) {
                // Display the modal that will guide them in loggin in
                setIsLoginModal(true)
                return
            }

            // send a request to the backend to order a product
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/orders/makeOrder`, 
                product, 
                {
                    headers: {
                        Authorization: `Bearer ${ token || googleToken }`
                    }
                }
            )

            // Notify the user that they have successfully orderd the product
            toast.success(res.data.message)

        } catch(err) {
            console.error("ERROR ordering product: ", err)
            setLoading(false)
            toast.info(err.response.data.message)

        } finally {
            setLoading(false)
        }
    }


    // function to fetch all orders
    const fetchOrders = useCallback(async () => {

        try {
            setLoading(true)
            
            // send a request to the backend to order products
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/orders`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            // get all orderes from the backend and store them in state
            setOrders(res.data.orders || [])

        } catch(err) {
            setLoading(false)
            console.error('ERROR fetching Products')

        } finally {
            setLoading(false)
        }
    },[token])

    console.log("THESE ARE MY ORDERS: ", orders)

    // useEffect to automatially fetch all orders on mount
    useEffect(() => {
        // call the function
        fetchOrders()

    }, [fetchOrders]) // Empty dependency array
    
    return (
        <OrdersContext.Provider value={{ 
            orderProduct, orders, loading, fetchOrders
        }}>
            { children }
        </OrdersContext.Provider>
    )
}