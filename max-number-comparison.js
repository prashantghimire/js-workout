let size = 10000000;
var array = (new Array(size).fill(0).map(() => Math.floor(Math.random() * size)));

function complex (arr){
    return arr.sort((a, b)=> b - a)[0];
}

function fast (arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++){
        max = (arr[i] > max) ? arr[i]: max;
    }
    return max;
}

let {performance} = require('perf_hooks');

let t1 = performance.now();
let maxFast = fast(array);
let t2 = performance.now();
console.log(`finding max using fast : ${maxFast} took ${(t2 - t1).toFixed(3)} ms.`);

let t3 = performance.now();
let maxComplex = complex(array);
let t4 = performance.now();
console.log(`finding max using complex : ${maxComplex} took ${(t4 - t3).toFixed(3)} ms.`);