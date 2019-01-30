function Hashtable (size){
    this.data = new Array(size).fill(0);
}

// create array of the size, recreate double on index out of bound
// calculate index for each value and put item in that index 
Hashtable.prototype.put = function (value) {
    let hashIndex = getHashIndex(value, this.data);
    if(!this.data[hashIndex]){
        this.data[hashIndex] = value;
    } else {
        this.data[hashIndex + 1] = value;
    }
};

function getHashIndex (value = '', array){
    let sumOfAscii = getAsciiSum(value);
    let index = sumOfAscii % array.length;
    return index;
}

function getAsciiSum(value){
    let sumOfChar = value
    .split('')
    .reduce((sum, value)=> {
        return sum + value.charCodeAt(0);
    }, 0);
    return sumOfChar;
}



let data = ['alice', 'bob', 'carol', 'bob', 'david', 'bob', 'alice'];

let hashtable = new Hashtable(20);

for (let i = 0; i < data.length; i++){
    hashtable.put(data[i]);
}

console.log(hashtable.data);