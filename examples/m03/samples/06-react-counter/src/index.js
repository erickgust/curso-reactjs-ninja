import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createStore } from 'redux'
import { App } from './app'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'DECREMENT': return state - 1
    case 'INCREMENT': return state + 1
    default: return state
  }
}

const store = createStore(counter)

const root = createRoot(document.querySelector('[data-js="root"]'))
root.render(
  <StrictMode>
    <App store={store} />
  </StrictMode>
)
