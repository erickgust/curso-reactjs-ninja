'use strict'

function filter(array, fn) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  const arrayFilter = []

  for (let i = 0, length = array.length; i < length; i++) {
    if (fn(array[i], i, array))
      arrayFilter.push(array[i])
  }

  return arrayFilter
}

export default filter 
