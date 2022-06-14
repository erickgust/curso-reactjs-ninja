import { PureComponent } from "react";
import { Counter } from './counter'

export class CounterContainer extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: 0
    }

    this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    this.increment = () => this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    const { counter } = this.state

    return (
      <Counter
        counter={counter}
        decrement={this.decrement}
        increment={this.increment}
      />
    )
  }
}

