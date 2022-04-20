'use strict'

function map(array, fn) {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array')
  }

  if (typeof fn !== 'function') {
    throw new Error('Function must be passed')
  }

  const arrayMap = []

  for (let i = 0, length = array.length; i < length; i++) {
    arrayMap.push(fn(array[i], i, array))
  }

  return arrayMap
}

export default map

