import React from 'react'
import './ViewProduct.css'
import { XCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Info from '../../../info/Info'

export default function ViewProduct({ product, onClick }) {
    // if there is no product return null
    if (!product) return null

  return (
    <motion.section
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'easeInOut' }}
        className='view-product-modal'
    >
        <div
            className='view-product-card'
        >
            <XCircle 
                size={20}
                stroke="#ff2b14"
                className='close-btn'
                onClick={onClick}
            />

            <div
                className='header'
            >
                <img 
                    src={product.image}
                    alt={product.name}
                    className={product?.status === "Active" ? "borderActive" : "borderInactive" }
                />

                <h2>{product.name}</h2>

            </div>

            <div
                className='grid'
            >   
                <div>
                    <h3>Product</h3>
                    <Info label="Category" value={product.category} />
                    <Info label="Name" value={product.name} individual={product} />
                    {/* <Info label="Phone" value={product.phone} individual={product} /> */}
                    <Info label="Status" value={product.status} individual={product} />

                    <Info label="Quantity" value={product.quantity} />
                    <Info label="Price" value={`$${product.price}`} />

                    <Info 
                        label="Total spent"
                        value={`$${product.total.toLocaleString()}`}
                    /> 
                </div>

                <div>
                    <Info label="Last Updated" value={new Date(product.updatedAt).toDateString()} />
                </div>

            </div>
        </div>
    </motion.section>
  )
}
