function BinarySearch(elements, key){
    let search = true;
    let leftIndex = 0;
    let rightIndex = elements.length - 1;
    while (search){
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        // console.log(`right left : ${leftIndex} - ${rightIndex}, mid index : ${midIndex}`);
        if(rightIndex - leftIndex < 2) {
            let leftItem = elements[leftIndex];
            let rightItem = elements[rightIndex];
            return (key === leftItem) || (key === rightItem);
        } else if(key < elements[midIndex]){
            rightIndex = midIndex;
        } else if (key > elements[midIndex]) {
            leftIndex = midIndex;
        } else {
            return true;
        }
        if(rightIndex <= leftIndex){
            console.log(`evaluated now ${leftIndex} and ${rightIndex}`);
            return false;
        }
    }

}

let elements = [1, 2, 5, 7, 8, 9, 19, 34, 45, 56, 78, 89, 100];
            //  0  1  2  3  4  5   6   7   8   9  10  11   12


console.log('\nshould all find');
elements.forEach((element)=> {
    var result = BinarySearch(elements, element);
    console.log(`number : ${element}, result = ${result}`);
});


console.log(`\nshould not find any`);
elements.forEach(e => {
    var result = BinarySearch(elements, e*101);
    console.log(`number : ${e}, result : ${result}`);
});