const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
    },
    {
        name: "Ray",
        yearOfBirth: 1,
        yearOfDeath: 2011,
    },
    null,
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];



/**
 * @typedef {Object} Person
 * @property {String} name
 * @property {Number} yearOfBirth
 * @property {Number} yearOfDeath
 */

/**
 * @param {Person} person
 */
function getAge(person) {
    // if (!person.yearOfDeath) {
    //     person.yearOfDeath = new Date().getFullYear();
    // }
    const YOD_or_today = person?.yearOfDeath || new Date().getFullYear();

    return YOD_or_today - person?.yearOfBirth;
}

/**
 * @param {Person[]} people
    */
const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldest_age = getAge(oldest);
        const person_age = getAge(person);

        return person_age > oldest_age ? person : oldest;
    });
    // people.sort((a, b) => {
    //     if (!a.yearOfDeath) {
    //         let date = new Date();
    //         a.yearOfDeath = date.getFullYear();
    //     }
    //     if (!b.yearOfDeath) {
    //         let date = new Date();
    //         b.yearOfDeath = date.getFullYear();
    //     }
    //
    //     const age_a = a.yearOfDeath - a.yearOfBirth;
    //     const age_b = b.yearOfDeath - b.yearOfBirth;
    //
    //     return age_b - age_a;
    // })
    // return people.shift();
};

console.log(people);
console.log(findTheOldest(people));
console.log(people);

// Do not edit below this line
module.exports = findTheOldest;
