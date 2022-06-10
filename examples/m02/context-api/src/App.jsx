import { PureComponent } from 'react';
import { MessageList } from './components/message-list'
import { ColorContext, color } from './components/color-context'

import './App.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: color
    }
  }

  render() {
    return (
      <ColorContext.Provider value={this.state.color}>
        <MessageList
          messages={[
            { text: 'hey' },
            { text: 'ho' },
            { text: 'let\'s go' }
          ]}
        />
      </ColorContext.Provider>
    )
  }
}
