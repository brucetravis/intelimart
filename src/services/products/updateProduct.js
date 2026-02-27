import axios from "axios"
import { toast } from "react-toastify"

// function to update the product data
const updateProduct = async (id, formData) => {

    try {
        // create the form data object
        const data = new FormData()

        // append the required data manually
        data.append("category", formData.category )
        data.append("name", formData.name)
        data.append("price", formData.price)
        data.append("quantity", formData.quantity)
        data.append("description", formData.description)

        // only append the imae if a new file was selected
        if (formData.image instanceof File) {
            data.append("image", formData.image)
        }
        // Get a response from the backend
        const res = await axios.put(`http://localhost:5000/products/${id}`, data)

        // Display the updated product on the console
        console.log('Product update successfully.', res?.data)

        // Notify the user using a toast message
        toast.success(res?.data?.message)

    } catch (err) {
        toast.error(err?.response?.data || err?.response)
        console.error(err?.response?.data || err?.response)
    }
}

// export the function
export default updateProduct