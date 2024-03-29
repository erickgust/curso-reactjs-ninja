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

it('pagination({ total: 5, activePage: 1 }) should return [1, 2, 3, 4, 5]', () => {
  const params = { total: 5, activePage: 1 }
  const result = [1, 2, 3, 4, 5]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 6, activePage: 1 }) should return [1, 2, 3, "...", 6]', () => {
  const params = { total: 6, activePage: 1 }
  const result = [1, 2, 3, '...', 6]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 6, activePage: 2 }) should return [1, 2, 3, "...", 6]', () => {
  const params = { total: 6, activePage: 2 }
  const result = [1, 2, 3, '...', 6]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 6, activePage: 3 }) should return [1, 2, 3, 4, 5, 6]', () => {
  const params = { total: 6, activePage: 3 }
  const result = [1, 2, 3, 4, 5, 6]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 6, activePage: 4 }) should return [1, 2, 3, 4, 5, 6]', () => {
  const params = { total: 6, activePage: 4 }
  const result = [1, 2, 3, 4, 5, 6]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 6, activePage: 5 }) should return [1, "...", 4, 5, 6]', () => {
  const params = { total: 6, activePage: 5 }
  const result = [1, '...', 4, 5, 6]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 6, activePage: 6 }) should return [1, "...", 4, 5, 6]', () => {
  const params = { total: 6, activePage: 6 }
  const result = [1, '...', 4, 5, 6]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 10, activePage: 5 }) should return [1, "...", 4, 5, 6, "...", 10]', () => {
  const params = { total: 10, activePage: 5 }
  const result = [1, '...', 4, 5, 6, '...', 10]
  expect(pagination(params)).toEqual(result)
})

it('pagination({ total: 10 }) should return [1, 2, 3, "...", 10]', () => {
  const params = { total: 10 }
  const result = [1, 2, 3, '...', 10]
  expect(pagination(params)).toEqual(result)
})

it('pagination({}) should return [1]', () => {
  const params = {}
  const result = [1]
  expect(pagination(params)).toEqual(result)
})

it('pagination() should return [1]', () => {
  const result = [1]
  expect(pagination()).toEqual(result)
})

it('pagination({ total: "hello", activePage: 1 }) must throw an error', () => {
  const params = { total: 'hello', activePage: 1 }
  const msg = '"total" must be a number'
  expect(() => pagination(params)).toThrow(new TypeError(msg))
})

it('pagination({ total: 5, activePage: "bye" }) must throw an error', () => {
  const params = { total: 5, activePage: 'bye' }
  const msg = '"activePage" must be a number'
  expect(() => pagination(params)).toThrow(new TypeError(msg))
})
