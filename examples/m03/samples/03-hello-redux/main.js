export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }

  return state
}

const $decrement = document.querySelector('[data-js="decrement"]')
const $increment = document.querySelector('[data-js="increment"]')
const $counter = document.querySelector('[data-js="counter"]')

const { createStore } = Redux
const store = createStore(counter)

const updateValue = (type) => () => store.dispatch({ type })

$decrement.addEventListener('click', updateValue('DECREMENT'))
$increment.addEventListener('click', updateValue('INCREMENT'))

store.subscribe(() => {
  $counter.textContent = store.getState()
})


