'use strict'

import reverse from '../reverse/reverse-recursive'

function reduce(array, fn, initial) {
  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  const [acc, ...newArr] = initial === undefined ? array : [initial, ...array]

  if (acc === undefined)
    throw new TypeError('No initial value')

  return function iterator(internalAcc, internalArray, counter) {
    const [current, ...next] = internalArray
    return internalArray.length === 0
      ? internalAcc
      : iterator(fn(internalAcc, current, counter, newArr), next, counter + 1)
  }(acc, newArr, 0)
}

const reduceRight = (array, ...params) => reduce(reverse(array), ...params)

export default reduceRight
