import React, { useEffect, useState } from 'react'
import './UpdateProduct.css'
// import the lucide react icons
import { ArrowUp, XCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useProduct } from '../../../../contexts/ProductProvider'
import updateProduct from '../../../../services/products/updateProduct'
// import { toast } from 'react-toastify'

export default function UpdateProduct({ onClose, productData }) {

  const { loading, setLoading } = useProduct()

  // state to store the form data
  const [ formData, setFormData ] = useState({
    category: "",
    name: "",
    price: "",
    quantity: "",
    description: "",
    image: null
  })

  // useEffect to automatically fill the inputs
  useEffect(() => {
    // if the product data is available
    if (productData) {
      // update the inputs with the current product data from the products page
      setFormData({
        category: productData.category || "",
        name: productData.name || "",
        price: productData.price || "",
        quantity: productData.quantity || "",
        description: productData.description || "",
        image: productData?.image || ""
      })
    }

  }, [productData]) // keep watch on the product data

  const handleChange = (e) => {
    // Destructure the name and the value
    const { name, value, files } = e.target

    setFormData((prev) => ({
      // spread out the previous data
      ...prev, 
      [name]: files ? files[0] : value
    }))
  }

  // function to submit the updated Product
  const handleSubmit = async (e) => {
    // prevent the forms default submission
    e.preventDefault()

    try {
      // start the loading process
      setLoading(true) // set loading to true
      
      console.log('THIS IS THE FORM DATA: ', formData) // confirm if teh form data state is actually present
      
      // update the product
      await updateProduct(productData._id, formData)

      // stop the loading process
      setLoading(false)
      // close the modal
      onClose()

    } catch (err) {
      // stop the loading process if there is an error
      setLoading(false)
      console.error('ERROR Updating Product.')
    }
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut"}}
      className='update-product-modal'
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

        <h4 className='text-center mt-3 mb-4'>UPDATE PRODUCT</h4>

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

            {productData?.image && (
              <img
                src={`${productData.image}`}
                alt="Current product"
              />
            )}
            
            <input 
              type="file"
              accept="image/*"
              name='image'
              onChange={handleChange}
            />

          </div>
        </div>

        <button type='submit'>
          <ArrowUp size={20} color='#fff'/>
          { loading ? 'Updating Product....' : 'Update Product'}
        </button>

      </form>
    </motion.div>
  )
}
