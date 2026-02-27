import React, { useState } from 'react'
import './AddProduct.css'
// import the lucide react icons
import { ArrowUp, XCircle } from 'lucide-react'
// import the add product function
import addProduct from '../../../../services/products/addProduct'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

export default function AddProduct({ onClose }) {

  //  state to store all the product data
  const [ formData, setFormData ] = useState({
    category: "",
    name: "",
    price: "",
    quantity: "",
    description: "",
    image: null // null instead of "". This is important since we will store a file object and not a string
  }) // initial state are empty strings

  // loading state
  const [ loading, setLoading ] = useState(false) // initially, the loading state is false meaning not loading

  // function to update the input values accordingly
  const handleChange = (e) => {
    // destructure and get the name and value
    const { name, value, files } = e.target
    
    // update the inputs accordingly
    setFormData((prev) => ({
      ...prev,
      [name]:  files ? files[0] : value
    }))
  }

  //  function to handle the form submission
  const handleSubmit = async (e) => {
    // prevents the forms default submission
    e.preventDefault()
    
    try {
      // set the loading state to true meaning start loading
      setLoading(true)

      //  create a new instance of the formData so that we can add the formData 
      const data = new FormData()

      for (let key in formData) {
        data.append(key, formData[key])
      }

      // pause while submitting the data
      await addProduct(data)

      // set the loading state to false meaning stop loading
      setLoading(false)

      // close the modal (call the function to close the modal)
      onClose()

      // clear the form after a successful form submission
      setFormData({
        category: "",
        name: "",
        price: "",
        quantity: "",
        description: "",
        image: null
      })

    } catch (err) {
      // incase of an error stop loading
      setLoading(false)
      console.error("Error uploading Product: ", err)
    }
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut"}}
      className='add-product-modal'
    >
      <form
        className='product-form'
        onSubmit={handleSubmit}
      >
        <XCircle 
          size={24}
          stroke="#ff2b14"
          className='close-btn'
          onClick={onClose}
        />

        <h4 className='text-center mt-3 mb-4'>UPLOAD PRODUCT</h4>

        <div className='upload-product-div'>
          <div className='product-input'>
            <h6>Category:</h6>
            <input
              type='text'
              placeholder='Hoodies'
              name='category'
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className='product-input'>
            <h6>Name: </h6>
            <input
              type='text'
              placeholder='African Hoodie...'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='upload-product-div'>
          <div className='product-input'>
            <h6>Quantity:</h6>
            <input
              type='number'
              placeholder='5'
              name='quantity'
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className='product-input'>
            <h6>Price: </h6>
            <input 
              type='number'
              step="0.01" // allows decial values like 2 decimal places
              min="0" // prevents negative prices
              placeholder={`$23.99`}
              name='price'
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className='upload-product-div'>
          <div className='product-input'>
            <h6>Total: </h6>
            <input 
              type='number'
              placeholder='$100'
              name='total'
              value={formData.quantity * formData.price}
              onChange={handleChange}
              disabled
            />
          </div>
        </div>

        <div className='upload-product-div'>
          <div className='product-input'>
            <h6>Description: </h6>
            
            <textarea
              placeholder='Enter Product Description'
              rows="4"
              name='description'
              value={formData.description}
              onChange={handleChange}
              required
            >

            </textarea>
          </div>
        </div>


        <div className='upload-product-div'>
          <div className='product-input'>
            <h6>Product image: </h6>
            
            <input 
              type="file"
              accept="image/*"
              name='image'
              onChange={handleChange}
              required
            />

          </div>
        </div>

        <button type='submit'>
          <ArrowUp size={20} color='#fff'/>
          { loading ? 'Adding Product....' : 'Upload Product'}
        </button>

      </form>
    </motion.div>
  )
}
