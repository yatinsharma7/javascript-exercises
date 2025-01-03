function reverseString(sentence) {
    sentenceArray = sentence.split('');
    sentenceArrayReverse = sentenceArray.reverse();
    return sentenceArrayReverse.join('');
}

// Do not edit below this line
module.exports = reverseString;
