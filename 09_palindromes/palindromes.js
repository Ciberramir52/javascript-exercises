const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const res = str.split("").reverse().join("");
    return str === res;
};
// Do not edit below this line
module.exports = palindromes;
