'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    // Реализуйте сложение в этой функции
    let cUndefined = 0;
    if (c !== undefined){ 
        cUndefined = Number(c);
    }
    return Number(a) + Number(b) + cUndefined;
};
