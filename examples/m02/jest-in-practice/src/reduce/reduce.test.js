'use strict'

import reduce from './reduce'

it('reduce should be a function', () => {
  expect(typeof reduce).toBe('function')
})

it(
  'reduce() should throw an error with the message "First argument must be an array"',
  () => {
    expect(() => reduce()).toThrow(new TypeError('First argument must be an array'))
  }
)

it(
  'reduce([1, 2]) should throw an error with the message "Function must be passed"',
  () => {
    expect(() => reduce([1, 2])).toThrow(new TypeError('Function must be passed'))
  }
)

it('reduce([], () => {}) should throw an error with the message "No initial value', () => {
  expect(() => reduce([], () => { })).toThrow(new TypeError('No initial value'))
})

it('reduce([], () => {}, []) should return []', () => {
  expect(reduce([], () => { }, [])).toEqual([])
})

it('reduce([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {
  expect(reduce([1, 2, 3], (acc, item) => acc + item, 0)).toBe(6)
})

it('reduce(["1", "2", "3"], (acc, item) => acc + item, 0) should return 6', () => {
  expect(reduce(["1", "2", "3"], (acc, item) => acc + item, 0)).toBe('0123')
})

it('reduce([1, 2, 3], (acc, item, index) => acc + index) should return 9', () => {
  expect(reduce([1, 2, 3], (acc, item, index) => acc + index + item, 0)).toBe(9)
})

it(
  'reduce([1, 2], (acc, item) => {acc["number-" + item] = item; return acc}, {}) should return {"number-1": 1, "number-2": 2}',
  () => {
    const func = reduce([1, 2], (acc, item) => {
      acc["number-" + item] = item
      return acc
    }, {})
    expect(func).toEqual({ "number-1": 1, "number-2": 2 })
  })

it('reduce([1, 2], (acc, item, index, array) => acc + array[index], 0) should return 3', () => {
  expect(reduce([1, 2], (acc, item, index, array) => acc + array[index], 0)).toBe(3)
})
