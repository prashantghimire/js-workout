function charCounter(string) {
    let count = 1;
    let char = string[0];
    let output = '';
    for (let i = 0; i < string.length; i++) {
        if (i < string.length && string[i] != string[i + 1]) {
            output += (string[i] + count);
            count = 1;
            char = string[i];
        } else {
            count++;
        }
    }
    return output;
}

let countOutput = charCounter('aabbbccdddd');
console.log(countOutput);

function getMedian(arr1, arr2) {
    let merged = arr1
        .concat(arr2)
        .sort((a, b) => (a > b ? 1 : -1))
        .filter(a => Number.isFinite(a));

    let medianIndex = ((merged.length + 1) / 2) - 1;
    let left = Math.floor(medianIndex), right = Math.ceil(medianIndex);
    let median = (merged[left] + merged[right]) / 2;

    return median;
}

let median = getMedian([3, 2, 4], [7, 6, 10, 11, 1]);
console.log(`median is : ${median}.`);