const convertToCelsius = function(farDeg) {
  return Number(((farDeg - 32) * 5 / 9).toFixed(1));
};

const convertToFahrenheit = function(celDeg) {
  return Number(((celDeg * 9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
