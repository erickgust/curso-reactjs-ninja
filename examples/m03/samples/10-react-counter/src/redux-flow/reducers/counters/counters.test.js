import { counters } from './index'

it('Counters should be a function', () => {
  expect(typeof counters).toBe('function')
})

it('Should add a counter', () => {
  const input = []
  const action = { type: 'ADD_COUNTER' }
  const output = [0]
  expect(counters(input, action)).toEqual(output)
})

it('Should add another counter', () => {
  const input = [0, 1]
  const action = { type: 'ADD_COUNTER' }
  const output = [0, 1, 0]
  expect(counters(input, action)).toEqual(output)
})

