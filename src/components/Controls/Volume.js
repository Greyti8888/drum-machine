import React from 'react'

export default function Volume (props) {
  return (
    <input 
      id='volume' 
      type='range' 
      min='0' 
      max='1' 
      step='0.01'
      value={props.volume}
      onChange={props.changeVolume}
      />
  )
}