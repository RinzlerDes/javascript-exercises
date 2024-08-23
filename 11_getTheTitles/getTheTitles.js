/**
 * @typedef {Object} Book
 * @property {string} title
 * @property {string} author
 */


/**
 * @param {Book[]} books
 */const getTheTitles = function(books) {
    return books.map((book) => book.title);
    // let arr = [];
    //
    // books.forEach((book) => {
    //     arr.push(book.title);
    // });
    //
    // return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
