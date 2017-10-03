'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    var result = a + b;
    if (typeof c !== 'undefined') {
        result += c;
    }

    return result;
};
