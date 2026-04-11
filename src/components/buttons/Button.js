import React from 'react'
import './Button.css'

export default function Button({ name, text, clickFunction, disabledStatus }) {
  return (
    <button disabled={disabledStatus} className={ name } onClick={clickFunction}>{ text }</button>
  )
}
