'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: '3'
    }
  }

  render () {
    return (
      <div>
        <form>
          <textarea
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </form>
      </div>
    )
  }
}

export default App
