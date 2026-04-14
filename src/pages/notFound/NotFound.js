import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

export default function NoPageFound() {

  return (
    <section className='no-page-found'>
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>

        <Link 
            to='/'
        >
            Go to home
        </Link>
    </section>
  )
}
