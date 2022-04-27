'use strict'

function find(array, fn) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  return function iterator(internalArr, counter) {
    const [current, ...next] = internalArr

    return internalArr.length === 0
      ? undefined
      : fn(current, counter, array)
        ? current
        : iterator(next, counter + 1)
  }(array, 0)
}

export default find

