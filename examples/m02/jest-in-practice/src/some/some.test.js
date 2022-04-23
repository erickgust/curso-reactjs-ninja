'use strict'

import some from './some'

it('some should be a function', () => {
  expect(typeof some).toBe('function')
})

it(
  'some("hello") should throw an error with the message "First argument must be an array"',
  () => {
    expect(() => some("hello")).toThrow(new TypeError('First argument must be an array'))
  }
)

it(
  'some([1, 2]) should throw an error with the message "Function must be passed"',
  () => {
    expect(() => some([1, 2])).toThrow(new TypeError('Function must be passed'))
  }
)

it('some([], item => item) should return false', () => {
  expect(some([], item => item)).toBe(false)
})

it('some([1, 2, 3], item => item > 2) should return true', () => {
  expect(some([1, 2, 3], item => item > 2)).toBe(true)
})

it('some([1, 2, 3], (item, index) => index % 2 === 0) should return true)', () => {
  expect(some([1, 2, 3], (item, index) => index % 2 === 0)).toBe(true)
})

it('some([2, 3, 4], (item, index, array) => item === array[0]) should return true)', () => {
  expect(some([2, 3, 4], (item, index, array) => item === array[0])).toBe(true)
})
