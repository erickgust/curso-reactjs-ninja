'use strict'

import map from './map-recursive'

it('Map should be a function', () => {
  expect(typeof map).toBe('function')
})

it(
  'map("hello") should throw an error with the message "First argument must be an array"',
  () => {
    expect(() => map("hello")).toThrow(new TypeError('First argument must be an array'))
  }
)

it(
  'map([1, 2]) should throw an error with the message "Function must be passed"',
  () => {
    expect(() => map([1, 2])).toThrow(new TypeError('Function must be passed'))
  }
)

it('map([1, 2], (item) => item) should return [1, 2]', () => {
  expect(map([1, 2], (item) => item)).toEqual([1, 2])
})

it('map([2, 8], (item) => item) should return [2, 8]', () => {
  expect(map([2, 8], (item) => item)).toEqual([2, 8])
})

it('map([3, 1], (item, index) => index) should return [0, 1]', () => {
  expect(map([1, 2], (item, index) => index)).toEqual([0, 1])
})

it('map([5, 6], (item, index, array) => array) should return [[5, 6], [5, 6]]', () => {
  expect(map([5, 6], (item, index, array) => array)).toEqual([[5, 6], [5, 6]])
})

