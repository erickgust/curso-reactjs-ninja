'use strict'

function reverse(array) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  return array.length === 0
    ? []
    : [array.slice(-1)[0], ...reverse(array.slice(0, -1))]
}

export default reverse
