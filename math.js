'use strict';

exports.isStar = true;

exports.sum = function (...nums) {
    return nums.reduce((acc, num) => acc + Number(num), 0);
};
