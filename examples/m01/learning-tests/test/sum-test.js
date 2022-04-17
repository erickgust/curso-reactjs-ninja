'use strict'

const sum = require('./sum')

console.assert(typeof sum === 'function', 'Sum should be a function')

console.assert(sum(1, 2) === 3, 'Sum(1, 2) should be equal to 3')

console.assert(sum(3, 2) === 5, 'Sum(3, 2) should be equal to 5')
