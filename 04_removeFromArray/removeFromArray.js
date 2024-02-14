const removeFromArray = function(array, ...itemsToRemove) {
    // for (const itemToRemove of itemsToRemove) {
    //     // const index = array.indexOf(itemToRemove);
    //     for (let index = array.indexOf(itemToRemove); index > -1; index = array.indexOf(itemToRemove)){
    //         array.splice(index,1);
    //     }
    // }
    const newArray = array.filter(item => !itemsToRemove.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
