'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div>
        {['red', 'green', 'blue'].map((color, key) => (
          <Square color={color} key={key} />
        ))}
      </div>
    )
  }
}

export default App
