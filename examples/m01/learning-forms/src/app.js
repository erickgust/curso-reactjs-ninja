'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Initial value',
      checked: false
    }
  }

  render () {
    return (
      <div>
        <form>
          <input
            type='text'
            value={this.state.value}
            onChange={(e) => (this.setState({ value: e.target.value }))}
          />

          <label>
            <input
              type='checkbox'
              checked={this.state.checked}
              onChange={(e) => (this.setState({ checked: e.target.checked }))}
            />
            Checkbox
          </label>

          <input type='radio' name='radio' id='radio-1' value='1' defaultChecked />
          <label htmlFor='radio-1'>Radio 1</label>
          <input type='radio' name='radio' id='radio-2' value='2' />
          <label htmlFor='radio-2'>Radio 2</label>
        </form>
      </div>
    )
  }
}

export default App
