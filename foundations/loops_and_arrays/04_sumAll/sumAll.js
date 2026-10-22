const sumAll = function (num1, num2) {
  let sum = 0;
  if ([num1, num2].some((arg) => !Number.isInteger(arg) || arg < 0))
    return "ERROR";
  else if (num1 > num2) {
    for (let i = num2; i < num1 + 1; i++) {
      sum = sum + i;
    }
  } else {
    for (let i = num1; i < num2 + 1; i++) {
      sum = sum + i;
    }
  }
  return sum;
};
console.log(sumAll(2, 10));

// Do not edit below this line
module.exports = sumAll;
