function getPattern (index){
    let alphas = (new Array(26)).fill(0).map((item, index)=> { return String.fromCharCode(65+ index);});
    let str = '';
    let rem = 0;
    while (index > 26){
        rem = index % 26;
        index = Math.floor(index / 26);
        str += rem + '.';
    }
    console.log(index, 'index');
    str += rem;
    console.log(str);
    return str.split('.').map(x => alphas[parseInt(x) - 1]).reverse().join('');
}

let pattern = getPattern(1804289384);
console.log(pattern);