'use strict'

console.log('Arrow functions:')

const sum = function(x, y) { return x + y }

const sumArrow = (x, y) => x + y

const add1 = x => sum(x, 1)

console.log(add1(5))
