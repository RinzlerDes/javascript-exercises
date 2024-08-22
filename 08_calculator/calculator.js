const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

/**
    * @param {Array} arr
    */
const sum = function(arr) {
    if (!arr.length) return 0;
	return arr.reduce((sum, item) => sum + item);
};

const multiply = function(nums) {
    let product = 1;

    for (num of nums) product *= num;

    return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
    if (a < 1) return 1;

    return a * factorial(a - 1);
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


