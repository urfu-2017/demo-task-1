'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let thirdNumber = 0;
    if (c !== undefined)
        thirdNumber = Number(c);
    return Number(a) + Number(b) + thirdNumber;
};
