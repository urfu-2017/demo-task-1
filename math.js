'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (a !== undefined && b !== undefined && c !== undefined &&
         (!isNaN(a.toString().split(' ')) && (!isNaN(b.toString().split(' ')) &&
         !isNaN(c.toString().split(' '))))) {
        return parseFloat(a, 10) + parseFloat(b, 10) + parseFloat(c, 10);
    } else if (a === undefined && b !== undefined && c !== undefined &&
        ((!isNaN(b.toString().split(' ')) && !isNaN(c.toString().split(' '))))) {
        return parseFloat(b, 10) + parseFloat(c, 10);
    } else if (a !== undefined && b === undefined && c !== undefined &&
        ((!isNaN(a.toString().split(' ')) && !isNaN(c.toString().split(' '))))) {
        return parseFloat(a, 10) + parseFloat(c, 10);
    } else if (a !== undefined && b !== undefined && c === undefined &&
        ((!isNaN(a.toString().split(' ')) && !isNaN(b.toString().split(' '))))) {
        return parseFloat(a, 10) + parseFloat(b, 10);
    }


    return 'args not correct';
};
