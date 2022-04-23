'use strict'

function some(array, fn) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  for (let index = 0, length = array.length; index < length; index++) {
    if (fn(array[index], index, array))
      return true
  }

  return false
}

export default some
