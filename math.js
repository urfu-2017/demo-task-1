'use strict';

exports.isStar = true;

exports.sum = function (a) {
    var summa = 0;
    for (var i = 0; i < arguments.length; i++) {
        a = Number(arguments[i]);
        if (!isNaN(a)) {
            summa += a;
        }
    }

    return summa;
};
