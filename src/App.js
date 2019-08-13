import React from 'react'
import Controls from './components/Controls/Controls'
import Display from './components/Display'
import DrumPads from './components/DrumPads/DrumPads'

export default class App extends React.Component {
  state = {
    key: '',
    display: '',
    power: true,
    volume: 0.5,
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  handleKeyPress = (e) => {
    let key = document.getElementById(e.key.toUpperCase())
    if (key !== null) {
      document.getElementById(e.key.toUpperCase()).parentNode.focus()
      document.activeElement.click()
    }
  }
  
  setDisplayName = (displayText) => {
    this.setState({
      display: displayText
    })
  }
  
  changeVolume = (e) => {
    this.setState({
      display: `Volume: ${Math.round(e.target.value * 100)}`,
      volume: e.target.value,
    })
    Array.from(document.getElementsByClassName('clip')).forEach((sound) => sound.volume = e.target.value)
    setTimeout(() => this.setState({
      display: ''
    }), 1000)
  }
  
  togglePower = () => {
    if (this.state.power) {
      this.setState({
        display: ''
      })
    }
    this.setState({
      power: !this.state.power
    })
  }
  
  render() {
    return(
      <div 
        id='drum-machine'
        className={this.state.power ? 'powerOn' : 'powerOff'}
        >
        <Controls 
          changeVolume={this.changeVolume}
          togglePower={this.togglePower}
          powerOn={this.state.power}
          volume={this.state.volume}
          />
        <Display 
          text={this.state.display}
          />
        <DrumPads 
          pressedKey={this.state.key}
          setDisplayName={this.setDisplayName}
          powerOn={this.state.power}
          volume={this.state.volume}
          />
      </div>
    )
  }
}