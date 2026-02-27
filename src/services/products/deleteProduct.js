import axios from 'axios'
import { toast } from 'react-toastify'

// Frontend function to send a DELETE request to the database
const deleteProduct = async (productId) => {

    try {
        // response from the backend when I make a delete request
        const res = await axios.delete(`http://localhost:5000/products/${productId}`)
        
        // Log the success message to the console
        console.log(res?.data?.message)
        
        // Notify the user that the delete request was successful
        toast.success(res?.data?.messsage)

    } catch (err) {
        // log the error that may occur when deleting a product
        console.error(err?.response?.data)
    }
}

// export the function as a default function
export default deleteProduct