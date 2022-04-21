'use strict'

import every from './every-recursive'

it('every should be a function', () => {
  expect(typeof every).toBe('function')
})

it(
  'every("hello") should throw an error with the message "First argument must be an array"',
  () => {
    expect(() => every("hello")).toThrow(new TypeError('First argument must be an array'))
  }
)

it(
  'every([1, 2]) should throw an error with the message "Function must be passed"',
  () => {
    expect(() => every([1, 2])).toThrow(new TypeError('Function must be passed'))
  }
)

it('every([1, 2, 3], item => item) should return true', () => {
  expect(every([1, 2, 3], item => item)).toBe(true)
})

it('every([1, 2, 3], item => item > 2) should return false', () => {
  expect(every([1, 2, 3], item => item > 2)).toBe(false)
})

it('every([1, 2, 3], (item, index) => index === item - 1) should return true', () => {
  expect(every([1, 2, 3], (item, index) => index === item - 1)).toBe(true)
})

it(
  'every([2, 2, 2, 2], (item, index, array) => item === array[0]) should return true',
  () => {
    expect(every([2, 2, 2, 2], (item, index, array) => item === array[0])).toBe(true)
  }
)

