'use strict'

function reduce(array, fn, initial) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  if (typeof fn !== 'function')
    throw new TypeError('Function must be passed')

  let [acc, ...next] = initial === undefined ? array : [initial, ...array]

  if (acc === undefined)
    throw new TypeError('No initial value')

  for (let i = 0, length = next.length; i < length; i++)
    acc = fn(acc, next[i], i, next)

  return acc
}

export default reduce
