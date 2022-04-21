'use strict'

function every(array, fn) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  for (let index = 0, length = array.length; index < length; index++) {
    if (!fn(array[index], index, array))
      return false
  }

  return true
}

export default every
