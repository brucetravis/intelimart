import React from 'react'
import './Search.css'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function SearchBar({ onClose }) {
  return (
    <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='searchbar'
    >
        <div className='title'>
            <X
                size={25}
                stroke="#ff0000"
                className='close-btn'
                onClick={onClose}
            />
        </div>

        <motion.input
            type='text'
            initial={{ width: "20vw" }}
            whileFocus={{ 
                width: "40vw", 
                borderColor: "#85bcff"
            }}
            transition={{ duration: 0.2 }}
            placeholder='Search bag, shoes, clothes'
        />

    </motion.div>
  )
}
