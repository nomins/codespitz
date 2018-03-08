const simpleIterable = {
    data: [1, 2, 3, 4],

    [Symbol.iterator]() {
        return this;
    },

    next() {
        return {
            done: this.data.length === 0,
            value: this.data.pop(),
        };
    },
};

module.exports = {
    simpleIterable,
};
