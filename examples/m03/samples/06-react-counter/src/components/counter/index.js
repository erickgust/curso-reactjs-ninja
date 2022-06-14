import { PureComponent } from 'react'
import { Counter } from './counter'

export class CounterContainer extends PureComponent {
  constructor() {
    super()
    this.setValue = (type) => () => this.props.store.dispatch({ type })
  }

  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <Counter
        counter={this.props.store.getState()}
        decrement={this.setValue('DECREMENT')}
        increment={this.setValue('INCREMENT')}
      />
    )
  }
}

