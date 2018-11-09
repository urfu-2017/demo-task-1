/* eslint-env mocha */
'use strict';

const { sum } = require('../math');
const assert = require('assert');

describe('Math', function () {
    describe('sum', function () {
        it('should sum `1` and `2` and get `3`', function () {
            assert.strictEqual(sum(1, 2), 3);
        });
        it('should sum `1` and `2` and `3` get `6`', function () {
            assert.strictEqual(sum(1, 2, 3), 6);
        });
    });
});
