import React from 'react'
import Volume from './Volume'
import Power from './Power'

export default function Controls (props) {
  return (
    <div
      id='controls'
    >
      <Volume
        changeVolume={props.changeVolume}
        volume={props.volume}
      />
      <Power
        togglePower={props.togglePower}
        powerOn={props.powerOn}
      />
    </div>
  )
}