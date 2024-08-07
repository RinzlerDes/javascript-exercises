/**
 * @argument {Array} arr
 * @argument {Array} targets
 */
const removeFromArray = function (arr, ...targets) {
  for (let i = 0; i < targets.length; i++) {
    let targetIndex;
    let target = targets[i];
    while ((targetIndex = arr.findIndex((elem) => elem === target)) != -1) {
      arr.splice(targetIndex, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
