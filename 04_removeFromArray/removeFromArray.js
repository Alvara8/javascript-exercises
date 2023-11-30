const removeFromArray = function (array, ...theArgs) {

    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!theArgs.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};










// Do not edit below this line
module.exports = removeFromArray;
