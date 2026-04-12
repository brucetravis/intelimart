import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthProvider";
import axios from "axios";
import { useProduct } from "./ProductProvider";

// create the cart context
const CartContext = createContext()

// create a custom hook to act as a provider
export const useCart = () => useContext(CartContext)



// create the provider
export default function CartProvider({ children }) {

    // state to store the cart products
    const [ isCartProducts, setIsCartProducts ] = useState([]) // initial state is an empty array

    // import the login state and teh user token from the Auth Provider
    const { userGoogleToken } = useAuth()

    // import the loading state from the Product context
    const { loading, setLoading } = useProduct()

    // function to add a product to cart
    const addToCart = async (product) => {
        try {
            // get the user token from localStorage
            const token = localStorage.getItem('token')
            const googleToken = localStorage.getItem('googleToken')

            // check if there is a user who is already logged in, save the product in the database cart
            if (token || userGoogleToken) {

                // save the user data in the database
                const response = await axios.post(
                    'http://localhost:5000/cart/addToCart', 
                    product,
                    {
                        headers: {
                            Authorization: `Bearer ${token || googleToken}`
                        }
                    }
                )

                // update the state
                setIsCartProducts(response.data.cart)

                // send a toast to notify the user that the product has been saved successfully tothe databse cart
                toast.success(`Product Added to Cart.`)

                // exit the function
                return
            }

            // Check if the product is already in cart
            const alreadyInCart = isCartProducts.some(p => p._id === product._id)

            // if true
            if (alreadyInCart) {
                // notify the user that the product is already in cart
                toast.info("Product already in cart.")
                // exit the function
                return
            }

            // if it is not in the cart, add it
            setIsCartProducts((prev) => {
                // create a new cart array
                const newCart = [...prev, product]

                // store the products in localStorage for persistence
                localStorage.setItem('guest_cart', JSON.stringify(newCart))

                // return the new cart
                return newCart
            })

            // toast message to notify the user that the product has been added to cart successfully
            toast.success("Product Added to cart Sucessfully.")

            window.location.reload()

        } catch(err) {
            console.error("ERROR ADDING PRODUCT TO CART: ", err.message, err.response.data)
            toast.info("Product Already in Cart")
        }
    }
    

    // function to remove a product from the cart
    const removeCartProduct = async (productId) => {
        
        // get the token and the google token from localStorage to see if a user has logged in
        const token = localStorage.getItem('token')
        const googleToken = localStorage.getItem('googleToken')

        try {

            if (token || googleToken) {
                // send a request to the backend to remove a product from cart
                const res = await axios.delete(`http://localhost:5000/cart/removeProduct/${productId}`,{
                    headers: {
                        Authorization: `Bearer ${ token || googleToken}`
                    }
                })

                const updatedCart = res.data.cart || []

                // update localStorage
                localStorage.setItem('cart', JSON.stringify(updatedCart))
                
                // update the state and remove the product
                setIsCartProducts(updatedCart)

                //  success message informing the user that he product has been successfully from cart
                toast.success("Product removed from cart Successfully")

                // exit the function
                return
            }

            // guest cart
            
            // filter to remove a single product
            setIsCartProducts((prev) => {
                const remainingProducts = prev.filter((p) => p._id !== productId)

                // save the remaining products to localStorage
                localStorage.setItem('guest_cart', JSON.stringify(remainingProducts))
                
                // return the array since filter returns an array
                return remainingProducts
            })

            // Notify the user that the product has been removed from cart successfully
            toast.success("Product removed from cart successfully.")

        } catch(err) {
            console.error("ERROR REMOVING PRODUCT FROM CART: ", err.message)
        }
    }

    // function to fetch the users cart from the db
    const fetchCart = async () => {
        try {
            // set the loading state to true
            setLoading(true)

            // get the user token from localStorage
            const token = localStorage.getItem('token')
            const googleToken = localStorage.getItem('googleToken')

            // console.log('FETCH CART MONGO TOKEN: ', token)

            // if the user is logged in
            if (token || userGoogleToken) {
                const res = await axios.get('http://localhost:5000/cart/fetchCart', {
                    headers: {
                        Authorization: `Bearer ${token || googleToken}`
                    }
                })
            
                // log the cart products to the console
                // console.log("Cart Products: ", res.data.cart)

                // replace the 'cart' in localStorage with the cart from the db
                localStorage.setItem('cart', JSON.stringify(res.data.cart))

                // get the cart Items to store in state
                const cart = JSON.parse(localStorage.getItem('cart'))

                // update the cart state with the users cart products
                setIsCartProducts(cart)

                // stop loading
                setLoading(false)
                
                // fetch the cart from local storage if It is present
            } else {
                // fetch the localStorage cart
                const savedCart = localStorage.getItem('guest_cart')

                // if there is a cart in localStorage parse it, if not, have a default empty array
                const cart = savedCart ? JSON.parse(savedCart) : []
                
                // update the state with the cart products
                setIsCartProducts(cart)
            } 

        } catch(err) {
            console.error("ERROR fetching cart: ", err.response?.data || err.message || err)
        
        } finally {
            setLoading(false)
        }
    }

    const token = localStorage.getItem('token')

    useEffect(() => {
        if (token || userGoogleToken) {
            fetchCart() // fetch the cart on mount
        } else {
            // load the saved cart
            const savedCart = localStorage.getItem('guest_cart')
            setIsCartProducts(savedCart ? JSON.parse(savedCart) : [])
        }
        
    }, [])

    const subTotal = isCartProducts.reduce((total, p) => {
                                    return total = total + (p.price * p.quantity)
                                }, 0)
    const shipping = 20

    const tax = 5

    const discount = 10

    const total = (subTotal + shipping + tax) - discount

    return(
        <CartContext.Provider value={{
            isCartProducts, addToCart,
            removeCartProduct, subTotal, tax, discount, total,
            shipping, loading
        }}>
            { children }
        </CartContext.Provider>
    )
}