'use strict'

function reverse(array) {
  if (!Array.isArray(array))
    throw new TypeError('First argument must be an array')

  const newArr = []

  for (let index = array.length; index--;)
    newArr.push(array[index])
  return newArr
}

export default reverse
