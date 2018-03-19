/* eslint-disable no-restricted-syntax */
const { expect } = require('chai');
const { simpleIterable } = require('./iterable');

describe('Iterable', () => {
    it('simpleIterable', () => {
        const expected = [0, 1, 2, 3, 4];
        for (const value of simpleIterable) {
            expect(value).to.equal(expected.pop());
        }
    });
});
