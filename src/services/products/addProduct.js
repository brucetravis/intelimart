// import the axios library so that we can make http requests
import axios from 'axios'
import { toast } from 'react-toastify'

//  function to add a product to the database
const addProduct = async (productData) => {
    // try catch block to catch possible errors
    try {
        // backend response after sending the request to the backend
        const res = await axios.post('http://localhost:5000/products', productData)

        //  log the response to the console
        console.log("Product Added Successfully.", res?.data)

        // display a message to show success in product addition
        toast.success(res?.data?.message || 'Product successfully added to database.') // display the backend success message after successfully adding the product to the database

    } catch (error) {
        //  log an error incase the product addition to the database fail
        console.error(error.response?.data || error.response)
    }
}


export default addProduct