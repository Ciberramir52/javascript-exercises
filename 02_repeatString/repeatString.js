const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let finalPhrase = "";
    for (let i = 0; i < num; i++) {
        finalPhrase += string;
    }
    return finalPhrase;
};

// Do not edit below this line
module.exports = repeatString;
