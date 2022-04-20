'use strict'

function recursiveMap(array, fn) {
  if (!Array.isArray(array)) {
    throw new Error('First argument must be an array')
  }

  if (typeof fn !== 'function') {
    throw new Error('Function must be passed')
  }

  return (function iterator(arrayMap, counter = 0) {
    const [current, ...next] = arrayMap

    return arrayMap.length === 0
      ? []
      : [
        fn(current, counter, array),
        ...iterator(next, counter + 1)
      ]
  })(array)

}

export default recursiveMap

