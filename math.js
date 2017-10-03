'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let res = parseInt(a) + parseInt(b);
    if (c !== undefined) {
        res += parseInt(c);
    }

    return res;
};
