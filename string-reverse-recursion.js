function reverse(str, count, result) {
    if (count === str.length) {
        return result;
    }
    return reverse(str, count + 1, str[count] + result);
}

let str = 'apple';
let reverseResult = reverse(str, 0, '');
console.log(reverseResult);