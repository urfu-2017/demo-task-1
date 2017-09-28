'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    // Реализуйте сложение в этой функции
    let cUndefined;
    if (c === undefined)
        cUndefined = 0;
    else 
        cUndefined = Number(c);
    
    return Number(a) + Number(b) + cUndefined;
};
