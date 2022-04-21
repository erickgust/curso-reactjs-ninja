'use strict'

function everyRecursive(array, fn) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  return function iterator(internalArr, index) {
    const [current, ...next] = internalArr

    return internalArr.length === 0
      ? true
      : (fn(current, index, array) ? iterator(next, index + 1) : false)
  }(array, 0)
}

export default everyRecursive
