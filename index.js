function chunk(num, chunkSize){
    let arraySize = Math.ceil(num/chunkSize);
    console.log('array size : '+ arraySize);
    // static array
    var array = new Array(arraySize);
    for (let i = 0; i < array.length; i++){
        if(i === array.length - 1){
            array[i] = (num % chunkSize) === 0 ? chunkSize : (num % chunkSize);
        } else {
            array[i] = chunkSize;
        }
    }
    return array;
}

/*
1,1 = ab
1,2 = abb
1,3 = babb
1,4 = bbabb
*/

function getComb (countA, countB){
    let str = '';
    if (countB > countA){
        str = spread(countA, countB, 'b', 'a');
    } else {
        str = spread(countB, countA, 'a', 'b');
    }
    console.log(str);
}

// assume countB > countA
function spread(countA, countB, bigChar, smallChar){
    let string = '';
    // handle 1 and >= 2 case
    let totalChars = countA + countB;
    console.log('total chars : ' + totalChars);
    let i = 0;
    let trackA = 0;
    let trackB = 0;

    while(i < totalChars){
        if(i % 3 == 2 && countA > trackA){
            string += smallChar;
            trackA += 1;
        } else if (countB > trackB) {
            string += bigChar;
            trackB += 1;
        }
        i++;
    }
    return string;
}

let response = getComb(3, 1);
console.log(response);