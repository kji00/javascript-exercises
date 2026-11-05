const palindromes = function (str) {
    const removeAndreverse = str.toLowerCase()
                                .replace(/[^a-zA-Z0-9]/g, "")
                                .split('')
                                .reverse()
                                .join('');
    const removePunctuation = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    return removePunctuation === removeAndreverse;
};

console.log(palindromes('A car, a man, a maraca.'))

// Do not edit below this line
module.exports = palindromes;
