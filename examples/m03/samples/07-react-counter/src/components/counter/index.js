import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Counter } from './counter'

class CounterContainer extends PureComponent {
  constructor() {
    super()
    this.setValue = (type) => () => this.props.dispatch({ type })
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        decrement={this.setValue('DECREMENT')}
        increment={this.setValue('INCREMENT')}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state
})

export default connect(mapStateToProps)(CounterContainer)
