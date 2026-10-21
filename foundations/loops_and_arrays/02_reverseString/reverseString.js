const reverseString = function(str) {
    let newStr = str.split('');
    return newStr.toReversed().join('');
};
console.log(reverseString('hello world'))
// Do not edit below this line
module.exports = reverseString;
