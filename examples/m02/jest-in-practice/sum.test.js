'use strict'

import sum from './sum'

it('Sum should be a function', () => {
  expect(typeof sum).toBe('function')
})

it('sum(1, 4) should return 5', () => {
  expect(sum(1, 4)).toBe(5)
})
