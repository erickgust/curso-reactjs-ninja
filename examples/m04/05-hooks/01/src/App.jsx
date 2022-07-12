import { PureComponent, useState } from "react";

export const App = () => (
  <>
    <CounterFunction/>
    <CounterClass/>
  </>
)

class CounterClass extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }

  decrement = () => {
    this.setState({counter: this.state.counter - 1})
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    )
  }
}

function CounterFunction () {
  const [counter, setCounter] = useState(0)
  const decrement = () => setCounter(counter - 1)
  const increment = () => setCounter(counter + 1)
  return (
    <Counter counter={counter} decrement={decrement} increment={increment}/>
  )
}

function Counter ({counter, decrement, increment}) {
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}
