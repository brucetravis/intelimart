import React from 'react'
import './Button.css'

export default function Button({ name, text, clickFunction }) {
  return (
    <button className={ name } onClick={clickFunction}>{ text }</button>
  )
}
