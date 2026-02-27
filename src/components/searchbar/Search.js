import React from 'react'
import './Search.css'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useSearch } from '../../contexts/SearchProvider'

export default function SearchBar({ onClose }) {

    // import the search context from the search provider
    const { searchTerm, setSearchTerm } = useSearch()
    
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
            placeholder='Search, Hoodie, t-shirt, Bakcpack'
            name='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

    </motion.div>
  )
}
