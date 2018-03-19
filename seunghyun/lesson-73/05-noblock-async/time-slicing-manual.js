/* eslint-disable */

// browser code
const looper = (n, f, slice = 3) => {
    let limit = 0, i = 0;
    const runner = _ => {
        while(i < n) {
            if (limit++ < slice) f(i++);
            else {
                limit = 0;
                requestAnimationFrame(runner);
                break;
            }
        }
    };
    requestAnimationFrame(runner);
};

looper(12, console.log); // NonBlocking