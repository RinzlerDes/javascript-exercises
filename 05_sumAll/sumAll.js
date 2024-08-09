/**
 * 
 * @param {Number} a
 * @param {Number} b 
 */
const sumAll = function(a, b) {
    if (a < 0 
        || b < 0
        || isNaN(a)
        || isNaN(b)
        || !Number.isInteger(a)
        || !Number.isInteger(b)
    ) {
        return "ERROR";
    }
    let sum = 0;
    let low = b;
    let high = a;
    
    if (a < b) {
        low = a;
        high = b;
    }

    for (low; low <= high; low++) {
        sum += low;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
