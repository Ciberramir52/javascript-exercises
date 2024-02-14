const reverseString = function(str) {
    // const strlen = str.length;
    // let reversestr = "";
    // for (let i = strlen - 1; i >= 0; i--) {
    //     reversestr += str[i];
    // }
    // console.log(reversestr);
    // return reversestr;
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
