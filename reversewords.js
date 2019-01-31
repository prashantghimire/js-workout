function reverseWords(string){
    return string.split('.').reverse().join('.');;
}

const sentence = 'i.like.this.program.very.much';
console.log(reverseWords(sentence));