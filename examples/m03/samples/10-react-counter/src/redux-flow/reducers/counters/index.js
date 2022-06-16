export const counters = (state, action) => {
  if (action.type === 'ADD_COUNTER')
    return state.concat(0)

  return state
}
