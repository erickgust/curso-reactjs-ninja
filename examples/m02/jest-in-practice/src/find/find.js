'use strict'

function find(array, fn) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')


  for (let i = 0; i < array.length; i++) {
    if (fn(array[i], i, array)) {
      return array[i]
    }
  }
}

export default find

