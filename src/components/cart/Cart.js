import React from 'react'
import './Cart.css'
import { X } from 'lucide-react'
import { motion } from "framer-motion"

export default function Cart({ onClose }) {
  return (
    <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='cart'
    >
        <div className='title'>
            <X 
                size={25}
                stroke="#ff0000"
                className='close-btn'
                onClick={onClose}
            />

            <h4>CART</h4>
        </div>
    </motion.div>
  )
}
