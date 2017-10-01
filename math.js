'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    let parsedC = Number(c);

    return Number(a) + Number(b) + (isNaN(parsedC) ? 0 : parsedC);
};
