import axios from "axios";

const { createContext, useContext, useState, useEffect } = require("react");

// create the product context
const ProductContext = createContext()

// A custom hook for the context
export const useProduct = () => useContext(ProductContext) // Raect contexts MUST be called in a function and never at the top level


export default function ProductProvider({ children }) {

    //  state to store all products
    const [ products, setProducts] = useState([]) // initial state is an empty array

    // loading state to load the products
    const [ loading, setLoading ] = useState(false) // initial state is false meaning not loading


    //  function to fetch products from the database
    const fetchProducts = async () => {
        //  try catch block to catch possible errors
        try {
            // set loading to true
            setLoading(loading)

            //  store the response from the backend
            const res = await axios.get('http://localhost:5000/products')

            // send a response message stating that the read was a success
            // console.log('Products fetched successfully', res.data)
            
            // update the state with the products
            setProducts(res.data.products)

            // setLoading to false
            setLoading(false)

        } catch (err) {
            console.error(err.response?.data || err.response)
        }
    }

    // useEffect to fetch all products once when one lands on the page
    useEffect(() => {

        // call the function to fetch all products
        fetchProducts()

    }, []) // Empty dependency array

    return (
        <ProductContext.Provider value={{
            products, setProducts, fetchProducts, loading, setLoading
        }}>
            { children }
        </ProductContext.Provider>
    )
}