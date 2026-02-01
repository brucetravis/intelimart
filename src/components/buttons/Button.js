import React from 'react'
import './Button.css'

export default function Button({ name, text, onClick }) {
  return (
    <button className={ name } onClick={onClick}>{ text }</button>
  )
}
