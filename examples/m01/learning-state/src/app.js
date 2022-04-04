'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'

class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'blue'
    }
  }

  render () {
    return (
      <div>
        <Square color={this.state.color} />

        {['red', 'green', 'blue'].map((color, key) => (
          <Button key={key} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
