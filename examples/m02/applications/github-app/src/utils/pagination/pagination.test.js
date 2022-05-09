'use strict'

import pagination from './index'

it('pagination should be a function', () => {
  expect(typeof pagination).toBe('function')
})

it('pagination({ total: 1, activePage: 1 }) should return [1]', () => {
  const params = { total: 1, activePage: 1 }
  const result = [1]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 2, activePage: 1 }) should return [1, 2]', () => {
  const params = { total: 2, activePage: 1 }
  const result = [1, 2]
  expect(pagination(params)).toEqual(result)
})
