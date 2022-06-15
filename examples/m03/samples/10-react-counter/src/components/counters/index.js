import { connect } from 'react-redux'
import { Counter } from '../counter/index'

export const Counters = ({ counter, increment, decrement }) => (
  <div>
    {[0, 0, 0].map((_, index) => (
      <Counter
        key={index}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    ))}
  </div>
)

const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch({ type: 'DECREMENT' }),
  increment: () => dispatch({ type: 'INCREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
