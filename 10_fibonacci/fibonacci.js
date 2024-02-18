function recursiveFibonacci(start, end, index, indexNumber) {
    if (indexNumber < 0) return "OOPS";
    if (indexNumber === 0) return 0;
    if (index === indexNumber) return end;
    return recursiveFibonacci(end, start + end, index + 1, indexNumber);
}

const fibonacci = function(indexNumber) {
    indexNumber = Number(indexNumber);
    return recursiveFibonacci(0, 1, 1, indexNumber);
};

// Do not edit below this line
module.exports = fibonacci;
