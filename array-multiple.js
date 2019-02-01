function printer (array){
    console.log('input array is : ', array);
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

let result = printer([1,2,3]);
console.log('result array is : ' + result);