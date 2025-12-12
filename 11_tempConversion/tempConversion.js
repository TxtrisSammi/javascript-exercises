const convertToCelsius = function(temp) {
  temp = Math.round(10 * (temp - 32) * (5/9)) / 10;

  return temp;
};

const convertToFahrenheit = function(temp) {
  temp = Math.round(10 * (temp * 1.8 + 32)) / 10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
