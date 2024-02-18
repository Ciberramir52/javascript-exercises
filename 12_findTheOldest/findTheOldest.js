const findTheOldest = function(people) {
    // people = people.map(person => {
    //     if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
    //     return {
    //         age: person.yearOfDeath - person.yearOfBirth,
    //         ...person
    //     };
    // });
    // return people.sort((a, b) => {
    //     if (a.age < b.age) return 1;
    //     if (a.age > b.age) return -1;
    //     return 0;
    // })[0];
    return people.reduce((acc, current) => {
        const accAge = getAge(acc.yearOfBirth, acc.yearOfDeath);
        const currAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return currAge > accAge ? current : acc;
    })
};

function getAge (birth, death) {
    if (!death) death = new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
