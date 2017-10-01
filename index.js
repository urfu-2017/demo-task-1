'use strict';

const { sum } = require('./math');

console.info(sum('1', 2));
// 3
console.info(sum(1, 2));

console.info(sum('кек', 'кек', 'undefined'));
// 78

console.info(sum('12.fv53b', '7', '19'));
// 19

console.info(sum('a', '21', '1'));

console.info(sum('12.3', 7, '19'));

console.info(sum(12, 7, 19));

console.info(sum(undefined, undefined, undefined));
