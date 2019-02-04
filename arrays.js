let array = new Array(10).fill(0).map((a, i) => i);

for (let i = 0; i < array.length / 2; i++) {
    let randomIndex = Math.abs(Math.ceil(Math.random() * array.length - 1));
    let temp = array[randomIndex];
    let swapIndex = array.length - 1 - randomIndex;
    array[randomIndex] = array[swapIndex];
    array[swapIndex] = temp;
}

console.log(array);