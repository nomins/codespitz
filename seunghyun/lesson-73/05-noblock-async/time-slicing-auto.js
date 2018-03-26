/* eslint-disable */

// browser code
const looper = (n, f, ms = 5000, i = 0) => {
    let old = performance.now(), curr; 
    const runner = _ => {
        while(i < n) {
            curr = performance.now();
            if(curr - old < ms) f(i++);
            else {
                old = curr;
                requestAnimationFrame(runner);
                break;
            }
        }
    };
    requestAnimationFrame(runner);
};

looper(12, console.log); // NonBlocking