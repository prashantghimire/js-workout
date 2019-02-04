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


let output = charCounter('aabbbbcccddaccc');
console.log(output);