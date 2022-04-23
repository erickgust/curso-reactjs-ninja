'use strict'

function someRecursive(array, fn) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  return function iterator(internalArr, counter) {
    const [current, ...next] = internalArr

    return internalArr.length === 0
      ? false
      : fn(current, counter, array)
        ? true
        : iterator(next, counter + 1)
  }(array, 0)
}

export default someRecursive
