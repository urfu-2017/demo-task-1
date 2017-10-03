'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let NumC = Number(c);
    var result = 0;
    if (Number.isNaN(NumC)) {
        result = Number(a) + Number(b);
    } else {
        result = Number(a) + Number(b) + NumC;
    }

    return result;
};
