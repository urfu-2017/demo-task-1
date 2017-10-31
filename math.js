'use strict';

exports.isStar = false;

exports.sum = function (a, b, c) {
    if (c === undefined) {
        c = 0;
    }

    return Number(a) + Number(b) + Number(c);
};
