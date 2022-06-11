import { Component } from 'react';
import { ColorContext } from './color-context'

export class Message extends Component {
  render() {
    return (
      <li style={{ background: this.context.color }}>
        {this.props.text}
        <button onClick={this.context.changeColor(this.props.color)}>
          Change color
        </button>
      </li>
    )
  }
}

Message.contextType = ColorContext
