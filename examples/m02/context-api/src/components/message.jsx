import { Component } from 'react';
import { ColorContext } from './color-context'

export class Message extends Component {
  render() {
    return (
      <li style={{ background: this.context.color }}>
        {this.props.text}
      </li>
    )
  }
}

Message.contextType = ColorContext
