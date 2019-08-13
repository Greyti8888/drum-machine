import React from 'react'
import Pad from './Pad'

export default function DrumPads(props) {
  let renderPads = () => {
    return (padsData.map((currentValue, index, array) => {
      return (
        <Pad
          id={array[index].id}
          key={array[index].id}
          sound={array[index].sound}
          name={array[index].name}
          setDisplayName={props.setDisplayName}
          powerOn={props.powerOn}
          volume={props.volume}
        />
      )
    }))
  }
  return (
    <div
      id='drum-pads'
    >
      {renderPads()}
    </div>
  )
}

const padsData = [
  {
    id: 'Q',
    name: 'Heater-1',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    id: 'W',
    name: 'Heater-2',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    id: 'E',
    name: 'Heater-3',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    id: 'A',
    name: 'Heater-5',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    id: 'S',
    name: 'Heater-6',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    id: 'D',
    name: 'Open-HH',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    id: 'Z',
    name: 'Kick-n\'-Hat',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    id: 'X',
    name: 'Kick',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    id: 'C',
    name: 'Closed-HH',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]