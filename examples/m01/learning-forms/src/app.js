'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={(e) => {
              this.setState({
                checked: e.target.checked
              }, () => {
                this.setState({
                  showContent: this.state.checked
                })
              })
            }}
          />
          Mostrar conteúdo
        </label>

        {this.state.showContent && <h1>Conteúdo</h1>}
      </div>
    )
  }
}

export default App
