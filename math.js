'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if (a !== null && a !== undefined && b !== null && b !== undefined) {
        return parseFloat(a) + parseFloat(b);
    }
};
