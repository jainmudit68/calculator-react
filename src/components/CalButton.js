import React from 'react'
import './CalButton.css'


export default function CalButton(props) {
  return (
    <button className='calbutton'>
        {props.symbol}
    </button>
  )
}
