import React from 'react'
import './Product.css'
import { ArrowUp, XCircle } from 'lucide-react'

export default function Product({ onClose }) {
  return (
    <div className='add-product-modal'>
      <form
        className='product-form'
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
              required
            />
          </div>
          
          <div className='product-input'>
            <h6>Name: </h6>
            <input 
              type='text'
              placeholder='African Hoodie...'
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
              required
            >

            </textarea>
          </div>
        </div>


        <button type='submit'>
          <ArrowUp size={20} color='#fff'/>
          Upload Product
        </button>

      </form>
    </div>
  )
}
