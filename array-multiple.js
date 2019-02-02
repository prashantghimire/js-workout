const {performance} = require('perf_hooks');

function printer (array){
    let multiplication = [];
    for (let i = 0; i < array.length; i++){
        multiplication[i] = (function (){
            let currentMultiplication = 1;
            for (let j = 0; j < array.length; j++){
                if (i !== j){
                    currentMultiplication *= array[j];
                }
            }
            return currentMultiplication;
        }());
    }
    return multiplication;
}

function simplePrinter(array) {
    
    let total = 1;
    let totalMultiplication = array.reduce((total, current)=> {
        total *= current;
        return total;
    }, 1);

    let result = [];
    for (let i = 0; i < array.length; i++){
        result[i] = totalMultiplication / array[i];
    }
    return result;
}

let arr = (new Array(1000000)).fill(0).map((item, index)=> (index + 1));
let t1 = performance.now();
let printerResult = printer(arr);
let t2 = performance.now();

console.log(`O(n^2) computation took : ${(t2 - t1).toFixed(3)} ms`);

/*
// console.log('result array is : ', printerResult);
let t3 = performance.now();
let simpleResult = simplePrinter(arr);
let t4 = performance.now();
console.log(`O(n) computation took : ${(t4 - t3).toFixed(3)} ms`);
*/
// console.log('result array is : ', simpleResult);