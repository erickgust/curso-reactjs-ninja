'use strict'

import reverse from './reverse-recursive'

it('reverse should be a function', () => {
  expect(typeof reverse).toBe('function')
})

it('reverse([1, 2, 3]) should return [3, 2, 1]', () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
})

it('reverse([4, 3, 8]) should return [4, 3, 8]', () => {
  expect(reverse([4, 3, 8])).toEqual([8, 3, 4])
})

it(
  'reverse() should throw an error with the message "First argument must be an array"',
  () => {
    expect(() => reverse()).toThrow(new TypeError('First argument must be an array'))
  }
)
