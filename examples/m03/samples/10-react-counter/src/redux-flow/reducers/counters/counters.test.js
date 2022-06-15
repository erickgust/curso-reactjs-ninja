import { counters } from './index'

it('Counters should be a function', () => {
  expect(typeof counters).toBe('function')
})

it('Should add a counter', () => {
  const input = []
  const action = { type: 'SOMETHING' }
  const output = [0]
  expect(counters(input, action)).toEqual(output)
})
