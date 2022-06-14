const $decrement = document.querySelector('[data-js="decrement"]')
const $increment = document.querySelector('[data-js="increment"]')
const $counter = document.querySelector('[data-js="counter"]')

export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }

  return state
}

const createStore = (reducer) => {
  let state
  const subscriptions = []

  const subscribe = (fn) => {
    subscriptions.push(fn)
    return () => {
      subscriptions = subscriptions.filter(item => item !== fn)
    }
  }

  const dispatch = ({ type }) => {
    state = reducer(state, { type })
    subscriptions.forEach(subscription => subscription())
    console.log(subscriptions)
  }

  const getState = () => state

  dispatch({})

  return { dispatch, subscribe, getState }
}

const store = createStore(counter)
const updateValue = (type) => () => store.dispatch({ type })
const render = () => ($counter.textContent = store.getState())

$decrement.addEventListener('click', updateValue('DECREMENT'))
$increment.addEventListener('click', updateValue('INCREMENT'))

store.subscribe(render)
store.subscribe(() => {
  console.log('value', store.getState())
})

render()

