const { expect } = require('chai');
const { simpleIterator } = require('./iterator');

describe('Iterator', () => {
    it('simpleIterator', () => {
        const a = simpleIterator.next();
        expect(a).to.deep.equal({ done: false, value: 4 });
        const b = simpleIterator.next();
        expect(b).to.deep.equal({ done: false, value: 3 });
        const c = simpleIterator.next();
        expect(c).to.deep.equal({ done: false, value: 2 });
        const d = simpleIterator.next();
        expect(d).to.deep.equal({ done: false, value: 1 });
        const e = simpleIterator.next();
        expect(e).to.deep.equal({ done: true, value: undefined });
    });
});
