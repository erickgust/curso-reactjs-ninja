import { Component } from 'react';
import { Message } from './message'

export class MessageList extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <ul>
        {this.props.messages.map((message) => (
          <Message text={message.text} color={message.color} key={message.text} />
        ))}
      </ul>
    )
  }
}
