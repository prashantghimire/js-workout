const { performance } = require('perf_hooks');

function fib(n, store) {
    let v = 0;

    if (store[n]) {
        return store[n];
    }

    if (n === 0) {
        v = 0;
    } else if (n === 1) {
        v = 1;
    } else {
        v = fib(n - 1, store) + fib(n - 2, store);
    }
    store[n] = v;
    return v;
}

var t1 = performance.now();
var p = fib(1000, {});
var t2 = performance.now();
console.log('fib: ', p);
console.log('time taken : ', (t2 - t1).toFixed(3), ' ms.');