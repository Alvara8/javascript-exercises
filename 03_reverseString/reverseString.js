const reverseString = function (word) { // Jared
                                        // 01234

    let newWord = "";
    for (let i = word.length-1; i >= 0 ; i--) {
      newWord+=word[i];
    }

    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
