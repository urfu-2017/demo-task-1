'use strict';

exports.isStar = false;

exports.sum = function (a, b) {
    let c = arguments[0] || 0;
    return Number(a) + Number(b) + Number(c);
};
