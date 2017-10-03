'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (arguments.length > 2) {
        return Number(a) + Number(b) + Number(arguments[2]);
    }

    return Number(a) + Number(b);
};
