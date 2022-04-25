'use strict'

import reverse from '../reverse/reverse'

function reduce(array, fn, initial) {
  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  let [acc, ...next] = initial === undefined ? array : [initial, ...array]

  if (acc === undefined)
    throw new TypeError('No initial value')

  for (let i = 0, length = next.length; i < length; i++)
    acc = fn(acc, next[i], i, next)

  return acc
}

const reduceRight = (array, ...params) => reduce(reverse(array), ...params)

export default reduceRight
