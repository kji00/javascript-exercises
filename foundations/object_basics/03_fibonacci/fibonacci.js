const fibonacci = function (num) {
  let arr = [1, 1];
  if (num === 0 || num < 1 || !Number.isInteger(num)) {
    return "OOPS";
  } else {
    for(let i = 1; i < num-1; i++){
        let fibSum = arr[i] + arr[i - 1];
        arr.push(fibSum);
    }
  }
  return arr[num-1];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;