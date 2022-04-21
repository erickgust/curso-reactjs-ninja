'use strict'

function recursiveFilter(array, fn) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  return function iterator(arrayFilter, index = 0) {
    const [current, ...next] = arrayFilter

    return arrayFilter.length === 0
      ? []
      : (fn(current, index, array) ? [current] : [])
        .concat(iterator(next, index + 1))
  }(array)
}

export default recursiveFilter
