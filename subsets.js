function subsets (array){
    let upperLimit = array.length;
    let result = [];
    for (let i = 0; i < Math.pow(2, upperLimit); i++){

        let value = i.toString(2);
        let prefix = '';
        for (let j = 0; j < upperLimit - value.length; j++){
            prefix += '0';
        }
        value = prefix + value;

        let res = '';
        for (let j = 0; j < value.length; j++){
            if (value[j] == 1){
                res += array[j];
            }
        }
        result.push(res);

    }
    return result;
}

let subset = subsets([1,2,3,4,5,6]);
console.log(subset);
