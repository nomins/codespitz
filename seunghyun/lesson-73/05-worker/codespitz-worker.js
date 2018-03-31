/* eslint-disable no-undef, no-unused-vars */
const backRun = (f, end, ...arg) => {
    const blob = new Blob([`
        onmessage = e => postMessage((${f})(e.data));
    `], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const worker = new Worker(url);
    worker.onmessage = e => end(e.data);
    worker.onerror = e => end(null);
    worker.postMessage(arg);
};

backRun(v => v[0] + v[1], console.log, 3, 5);
