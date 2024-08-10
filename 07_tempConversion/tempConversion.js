/**
 *
 * @param {Number} temp
 */
const convertToCelsius = function (temp) {
  let cel = ((temp - 32) * 5) / 9;

  if (cel % 1 !== 0) {
    cel = cel.toFixed(1);
  }
   
  return Number(cel);
};

/**
 *
 * @param {Number} temp
 */
const convertToFahrenheit = function (temp) {
  let fer = (temp * 9) / 5 + 32;

  if (fer % 1 !== 0) {
    fer = fer.toFixed(1);
  }

  return Number(fer);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
