let {performance} = require('perf_hooks');
function combinator(string, count){
    
    if (count === 0){
        return 1;
    }
    
    s = string.length - count;
    if (string[s] === 0){
        return 0;
    }

    result = combinator(string, count - 1);
    let firstTwo = parseInt(string.substr(0, 2));
    if (count >= 2 && firstTwo <= 26){
        result += combinator(string, count - 2);
    }

    return result;

}

let t1 = performance.now();
let string = '1234567893746948329482937429837492374982374982374982734892';
let response = combinator(string, string.length);
let t2 = performance.now();
console.log(`time taken : ${(t2 - t1).toFixed(5)} ms.`);
console.log(response);