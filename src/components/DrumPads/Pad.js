import React from 'react'

export default class Pad extends React.Component {
  state = {
    active: false,
  }

  componentDidMount() {
    document.getElementById(this.props.id).volume = this.props.volume;
  }

  playSound = (e) => {
    let audio = document.getElementById(this.props.id)
    audio.currentTime = 0;
    audio.play()
    this.setState({
      active: true
    })
    this.props.setDisplayName(this.props.name)
    setTimeout(() => {
      this.setState({
        active: false
      })
    }, 100)
  }
  render() {
    return (
      <button
        id={this.props.name}
        className={`drum-pad ${this.state.active ? 'active' : ''}`}
        onClick={this.playSound}
        disabled={this.props.powerOn ? false : true}
      >
        <audio
          id={this.props.id}
          src={this.props.sound}
          className='clip'
        ></audio>
        {this.props.id}
      </button>
    )
  }
}