/**
 * @param {String} str
    */
const palindromes = function (str) {
    str = str.toLowerCase();

    let arr = str.split('');
    arr = arr.filter((char) => char.match(/\w/));

    str = arr.join('');
    let str_rev = arr.reverse().join('');

    return str === str_rev;
};

// Do not edit below this line
module.exports = palindromes;
