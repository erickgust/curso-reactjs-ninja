import { connect } from 'react-redux'

export const Counter = ({ counter, increment, decrement }) => (
  <>
    <h1>{counter}</h1>
    <button type="button" onClick={decrement}>-</button>
    <button type="button" onClick={increment}>+</button>
  </>
)

const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = (dispatch) => ({
  decrement: () => dispatch({ type: 'DECREMENT' }),
  increment: () => dispatch({ type: 'INCREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
