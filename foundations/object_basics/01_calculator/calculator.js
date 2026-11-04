const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) { 
  const total = arr.reduce((acc, current) => acc+= current, 0)
  return total;
};

const multiply = function(arr) {
  const total = arr.reduce((acc, current) => acc*= current, 1)
  return total;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let total = 1;
  for(let i = 1; i <= num; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
