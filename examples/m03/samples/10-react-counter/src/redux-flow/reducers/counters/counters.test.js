import { counters, ADD_COUNTER, DECREMENT, INCREMENT, REMOVE_COUNTER } from './index'

it('Counters should be a function', () => {
  expect(typeof counters).toBe('function')
})

it('Should add a counter', () => {
  const input = []
  const action = { type: ADD_COUNTER }
  const output = [0]
  expect(counters(input, action)).toEqual(output)
})

it('Should add another counter', () => {
  const input = [0, 1]
  const action = { type: ADD_COUNTER }
  const output = [0, 1, 0]
  expect(counters(input, action)).toEqual(output)
})

it('Should remove a counter', () => {
  const input = [0, 1, 0]
  const action = { type: REMOVE_COUNTER, index: 1 }
  const output = [0, 0]
  expect(counters(input, action)).toEqual(output)
})

it('Should remove another counter', () => {
  const input = [0]
  const action = { type: REMOVE_COUNTER, index: 0 }
  const output = []
  expect(counters(input, action)).toEqual(output)
})

it('Should increment a counter', () => {
  const input = [0, 3, 2]
  const action = { type: INCREMENT, index: 0 }
  const output = [1, 3, 2]
  expect(counters(input, action)).toEqual(output)
})

it('Should increment another counter', () => {
  const input = [1, 0, 1]
  const action = { type: INCREMENT, index: 1 }
  const output = [1, 1, 1]
  expect(counters(input, action)).toEqual(output)
})

it('Should decrement a counter', () => {
  const input = [0, 2, 2]
  const action = { type: DECREMENT, index: 1 }
  const output = [0, 1, 2]
  expect(counters(input, action)).toEqual(output)
})

it('Should decrement another counter', () => {
  const input = [1, 2]
  const action = { type: DECREMENT, index: 1 }
  const output = [1, 1]
  expect(counters(input, action)).toEqual(output)
})

it('Should return the same state if action is unknown', () => {
  const input = [1, 1, 0]
  const action = { type: 'UNKNOWN' }
  const output = [1, 1, 0]
  expect(counters(input, action)).toEqual(output)
})

it('Should return initial state if last state is undefined', () => {
  const input = undefined
  const action = {}
  const output = []
  expect(counters(input, action)).toEqual(output)
})

