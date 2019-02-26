const { performance } = require('perf_hooks');

function fibWithDp(index, store) {
    let result = 0;

    if (store[index]) {
        return store[index];
    }

    if (index === 0) {
        result = 0;
    } else if (index === 1) {
        result = 1;
    } else {
        result = fibWithDp(index - 1, store) + fibWithDp(index - 2, store);
    }
    
    store[index] = result;

    return result;
}

function fibWithoutDP(index) {
    let result = 0;
    if (index === 0) {
        result = 0;
    } else if (index === 1) {
        result = 1;
    } else {
        result = fibWithoutDP(index - 1) + fibWithoutDP(index - 2);
    }
    return result;
}

var n = 40;
var t1 = performance.now();
var number1 = fibWithDp(n, {});
var t2 = performance.now();
console.log(`${n}th fib number : ${number1}`);
console.log(`time taken to compute with dp: ${(t2 - t1).toFixed(3)} ms.`);

var t3 = performance.now();
var number2 = fibWithoutDP(n);
var t4 = performance.now();
console.log(`${n}th fib number : ${number2}`);
console.log(`time taken to compute w/o dp: ${(t4 - t3).toFixed(3)} ms.`);
