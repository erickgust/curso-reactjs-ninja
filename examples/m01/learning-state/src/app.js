'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div>
        <Button handleClick={() => alert('Hi there!')}>
          Click here
        </Button>
      </div>
    )
  }
}

export default App
