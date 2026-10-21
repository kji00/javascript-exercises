const removeFromArray = function(arr, ...args) {
    let argsArr = args;
    let newArr = [...arr];
    for(let i = 0; i < args.length; i++){
        newArr = newArr.filter(num => num !== argsArr[i])
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
