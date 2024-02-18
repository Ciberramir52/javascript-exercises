const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1 = 0,num2 = 0) {
  return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, currentItem) => total * currentItem);
};

const power = function(base, pow) {
	return base ** pow;
};

const factorial = function(number) {
	return Array.from({ length: number }, (value, index) => index + 1).reduce((total, currentItem) => total * currentItem, 1);
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
