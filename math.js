'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let numA = Number(a);
    let numB = Number(b);
    let numC = c === undefined ? 0 : Number(c);

    return numA + numB + numC;
};
