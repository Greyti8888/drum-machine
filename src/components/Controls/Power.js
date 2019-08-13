import React from 'react'

export default function Power (props) {
  return (
    <button 
      id='power'
      onClick={props.togglePower}
      >
      {props.powerOn ? 'ON' : 'OFF'}
    </button>
  )
}