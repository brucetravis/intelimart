import React from 'react'
import './Button.css'

export default function Button({ name, text, clickFunction, disabledStatus, buttonIcon }) {
  return (
    <button 
      disabled={disabledStatus} 
      className={ name } 
      onClick={clickFunction}
    >
      {buttonIcon}
      { text }
    </button>
  )
}
