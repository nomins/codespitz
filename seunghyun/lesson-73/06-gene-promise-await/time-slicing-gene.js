/* eslint-disable */

// browser code
const loop = function* (n, f, slice = 3) {
    let i = 0, limit = 0;
    while (i < n) {
        if (limit++ < slice) f(i++);
        else {
            limit = 0;
            yield;
        }
    }
};

// 실행 로직과 반복 알고리즘의 분리
const executor = (iter) => {
    const runner = (_) => {
        iter.next();
        requestAnimationFrame(runner);
    };
    requestAnimationFrame(runner);
};

executor(loop(10, console.log));
