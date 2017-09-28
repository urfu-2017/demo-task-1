'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    if(isNaN(arguments[2])){
        return Number(a) + Number(b);
    }else{
        return Number(a) + Number(b) + Number(arguments[2]);
    }
};


