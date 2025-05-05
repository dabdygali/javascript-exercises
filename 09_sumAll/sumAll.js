const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0)
        return "ERROR";
    if (a > b)
        [a, b] = [b, a];
    let result = 0;
    while (a <= b)
    {
        result += a;
        a++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
