'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    // Реализуйте сложение в этой функции
    let result = 0;
    if (Number(c)) {
        result = Number(a) + Number(b) + Number(c);
    } else {
        result = Number(a) + Number(b);
    }

    return result;

};
