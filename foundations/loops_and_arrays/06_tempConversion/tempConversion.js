const convertToCelsius = function (temp) {
  let toCelsius = (temp - 32) / 1.8;
  return Math.round(toCelsius * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  let toFahrenheit = (temp * 1.8) + 32;
  return Math.round(toFahrenheit * 10) / 10;
};

console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

