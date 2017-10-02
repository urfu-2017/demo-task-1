'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    return arguments.length === 3 ? Number(a) + Number(b) + Number(c) : Number(a) + Number(b);
};
