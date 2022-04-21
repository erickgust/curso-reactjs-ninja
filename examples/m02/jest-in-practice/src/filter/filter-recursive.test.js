'use strict'

import filter from './filter-recursive'

it('filter should be a function', () => {
  expect(typeof filter).toBe('function')
})

it(
  'filter() should throw an error with the message "First argument must be an array"',
  () => {
    expect(() => filter()).toThrow(new TypeError('First argument must be an array'))
  }
)

it(
  'filter([]) should throw an error with the message "Function must be passed"',
  () => {
    expect(() => filter([])).toThrow(new TypeError('Function must be passed'))
  }
)

it('filter([0, 1, 2], (item) => item) should return [1, 2]', () => {
  expect(filter([0, 1, 2], (item) => item)).toEqual([1, 2])
})

it('filter[1, 2, 3, 4], (item) => item > 4 should return []', () => {
  expect(filter([1, 2, 3, 4], (item) => item > 4)).toEqual([])
})

it('filter([1, 2, 3, 4], (item) => item > 2) should return [3, 4]', () => {
  expect(filter([1, 2, 3, 4], (item) => item > 2)).toEqual([3, 4])
})

it('filter([3, 4, 5, 0], (item, index) => index) should return [4, 5, 0]', () => {
  expect(filter([3, 4, 5, 0], (item, index) => index)).toEqual([4, 5, 0])
})

it('filter([9, 5, 0, 1], (item, index, array) => array) should return [9, 5, 0, 1]', () => {
  expect(filter([9, 5, 0, 1], (item, index, array) => array)).toEqual([9, 5, 0, 1])
})

it('filter([9, 5, 0, 1], (item, index, array) => array[index] === 0) should return [0]', () => {
  expect(filter([9, 5, 0, 1], (item, index, array) => array[index] === 0)).toEqual([0])
})

it(
  'filter([1, 3, 3, 9, 9], (item, index, array => index === array.indexOf(item))) should return [1, 3, 9]',
  () => {
    const result = filter([1, 3, 3, 9, 9], (item, index, array) => index === array.indexOf(item))
    expect(result).toEqual([1, 3, 9])
  }
)
