'use strict';

const { sum } = require('./math');

console.info(sum(1, '2', 3));
// 6

console.info(sum(63, 15));
// 78

console.info(sum('12', 7));
// 19

console.info(sum(3, 3, 10));
//16
