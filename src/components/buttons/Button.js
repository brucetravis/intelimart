import React from 'react'
import './Button.css'

export default function Button({ name, text }) {
  return (
    <button className={ name }>{ text }</button>
  )
}
