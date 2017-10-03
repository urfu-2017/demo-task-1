'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    var result = Number(a) + Number(b);
    if (typeof c !== 'undefined') {
        result += Number(c);
    }

    return result;
};
