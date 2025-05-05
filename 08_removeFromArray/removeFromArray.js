const removeFromArray = function(arr, ...args) {
    let result = [];
    for (const element of arr) {
        if (!args.includes(element))
            result.push(element);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
