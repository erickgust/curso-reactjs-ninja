export const Counter = ({ counter, increment, decrement }) => (
  <>
    <h1>{counter}</h1>
    <button type="button" onClick={decrement}>-</button>
    <button type="button" onClick={increment}>+</button>
  </>
)
