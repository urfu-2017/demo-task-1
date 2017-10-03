'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let NumC = Number(c);
    if (Number.isNaN(NumC)) {
        let result = Number(a) + Number(b);
    } else {
        let result = Number(a) + Number(b) + NumC;
    }
    return result;
};
