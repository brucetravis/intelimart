import React from 'react'
import './Product.css'
import { XCircle } from 'lucide-react'

export default function Product({ onClose }) {
  return (
    <div className='add-product-modal'>
      <form
        className='product-form'
      >
        <XCircle 
          size={20}
          stroke="#ff2b14"
          className='close-btn'
          onClick={onClose}
        />

        <div>
          <div></div>
          
          <div></div>
        </div>
      </form>
    </div>
  )
}
