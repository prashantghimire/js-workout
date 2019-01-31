let {performance} = require('perf_hooks');
function combinator(string, count, memo){
    
    if (count === 0){
        return 1;
    }
    
    s = string.length - count;
    if (string[s] === 0){
        return 0;
    }

    if (memo[count]) {
        return memo[count];
    }

    result = combinator(string, count - 1, memo);
    let firstTwo = parseInt(string.substr(0, 2));
    if (count >= 2 && firstTwo <= 26){
        result += combinator(string, count - 2, memo);
    }

    memo[count] = result;
    return result;
}

let t1 = performance.now();
let string = '12345678937469483294829374937469483294829374';
let memo = new Array(1 + string.length).fill(null);
let response = combinator(string, string.length, memo);
let t2 = performance.now();
console.log(`time taken : ${(t2 - t1).toFixed(5)} ms.`);
console.log(response);