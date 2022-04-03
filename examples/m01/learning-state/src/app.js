'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <Button handleClick={() => this.setState({ counter: this.state.counter + 1 })}>
          {this.state.counter}
        </Button>
      </div>
    )
  }
}

export default App
