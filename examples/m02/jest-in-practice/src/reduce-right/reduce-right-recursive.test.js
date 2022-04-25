'use strict'

import reduceRight from './reduce-right-recursive'

it('reduceRight should be a function', () => {
  expect(typeof reduceRight).toBe('function')
})

it(
  'reduceRight() should throw an error with the message "First argument must be an array"',
  () => {
    expect(() => reduceRight()).toThrow(new TypeError('First argument must be an array'))
  }
)

it(
  'reduceRight([1, 2]) should throw an error with the message "Function must be passed"',
  () => {
    expect(() => reduceRight([1, 2])).toThrow(new TypeError('Function must be passed'))
  }
)

it('reduceRight([], () => {}) should throw an error with the message "No initial value', () => {
  expect(() => reduceRight([], () => { })).toThrow(new TypeError('No initial value'))
})

it('reduceRight([], () => {}, []) should return []', () => {
  expect(reduceRight([], () => { }, [])).toEqual([])
})

it('reduceRight([1, 2, 3], (acc, item) => acc + item, 0) should return 6', () => {
  expect(reduceRight([1, 2, 3], (acc, item) => acc + item, 0)).toBe(6)
})

it('reduceRight(["1", "2", "3"], (acc, item) => acc + item, 0) should return "0321"', () => {
  expect(reduceRight(["1", "2", "3"], (acc, item) => acc + item, 0)).toBe('0321')
})

it('reduceRight([1, 2, 3], (acc, item, index) => acc + index) should return 9', () => {
  expect(reduceRight([1, 2, 3], (acc, item, index) => acc + index + item, 0)).toBe(9)
})

it(
  'reduceRight([1, 2], (acc, item) => {acc["number-" + item] = item; return acc}, {}) should return { "number-1": 1, "number-2": 2 }',
  () => {
    const func = reduceRight([1, 2], (acc, item) => {
      acc["number-" + item] = item
      return acc
    }, {})
    expect(func).toEqual({ 'number-2': 2, 'number-1': 1 })
  })

it('reduceRight([1, 2], (acc, item, index, array) => acc + array[index], 0) should return 3', () => {
  expect(reduceRight([1, 2], (acc, item, index, array) => acc + array[index], 0)).toBe(3)
})

it('reduceRight(["k","c","i","r","e"], (acc, item) => acc + item, "") should return "erick"', () => {
  expect(reduceRight(["k", "c", "i", "r", "e"], (acc, item) => acc + item, "")).toBe('erick')
})

