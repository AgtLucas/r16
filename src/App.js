import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  }

  render () {
    if (this.state.counter === 5) {
      throw new Error('I crashed!')
    }

    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>
  }
}

export default App
