'use strict'

import div from './div'

it('Div should be a function', () => {
  expect(typeof div).toBe('function')
})

it('div(10, 2) should return 5', () => {
  expect(div(10, 2)).toBe(5)
})
