function getNthRoot (number, root){
    let logResult = (1/root) * Math.log2(number);
    return Math.pow(2, logResult).toFixed(2);
}

const number = 81;
const root = 3;
const nthRoot = getNthRoot(number, root);

console.log(`${root}th root of ${number} is ${nthRoot}`);