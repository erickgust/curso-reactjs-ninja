import { PureComponent } from 'react';
import { MessageList } from './components/message-list'
import { ColorContext, color } from './components/color-context'

import './App.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.changeColor = (color) => () => this.setState({ color })
    this.state = {
      color,
      changeColor: this.changeColor
    }
  }

  render() {
    return (
      <ColorContext.Provider value={this.state}>
        <MessageList
          messages={[
            { text: 'hey', color: 'black' },
            { text: 'ho', color: 'orange' },
            { text: 'let\'s go', color: 'cyan' }
          ]}
        />
      </ColorContext.Provider>
    )
  }
}
