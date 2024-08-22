/**
 * @param {Number} num
    */
const fibonacci = function(num) {
    num = Number(num);

    if (isNaN(num)) return 'oh no';
    else if (num < 0) return 'OOPS';
    else if (num === 0) return 0;
    else if (num < 3) return 1;

    let sum = 1;
    let prev = 1;

    for (let i = 0; i < num - 2; i++) {
        let temp = sum;
        sum += prev;
        prev = temp;
    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
