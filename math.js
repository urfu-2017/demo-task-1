'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (arguments.length > 2) {
        return a + b + arguments[2];
    }

    return a + b;
};
