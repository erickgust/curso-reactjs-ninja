'use strict'

import find from './find'

it('find should be a function', () => {
  expect(typeof find).toBe('function')
})

it(
  'find() should throw an error with the message "First argument must be an array"',
  () => {
    expect(() => find()).toThrow(new TypeError('First argument must be an array'))
  }
)

it(
  'find([]) should throw an error with the message "Function must be passed"',
  () => {
    expect(() => find([])).toThrow(new TypeError('Function must be passed'))
  }
)

it('find([1, 2], item => item) should return 1', () => {
  expect(find([1, 2], item => item)).toBe(1)
})

it('find([1, 2, 3], item => item > 1) should return 2', () => {
  expect(find([1, 2, 3], item => item > 1)).toBe(2)
})

it('find([1, 2, 3], item => item > 3) should return undefined', () => {
  expect(find([1, 2, 3], item => item > 3)).toBe(undefined)
})

it('find([1, 2], (item, index) => index) should return 2', () => {
  expect(find([1, 2], (item, index) => index)).toBe(2)
})

it(
  'find([4, 3, 2, 5], (item, index, array) => array[index] % 2 === 1) should return 3',
  () => {
    expect(find([4, 3, 2, 5], (item, index, array) => array[index] % 2 === 1)).toBe(3)
  }
)

