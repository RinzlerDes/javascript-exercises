/**
 * @argument {String} str
 */
const reverseString = function (str) {
    return str.split('').reduce((acum, elem) => elem + acum, '');
};
// const reverseString = function (str) {
//   let reversedString = '';

//   for (const letter of str) {
//     reversedString = letter + reversedString;
//   }

//   return reversedString;
// };

// Do not edit below this line
module.exports = reverseString;
