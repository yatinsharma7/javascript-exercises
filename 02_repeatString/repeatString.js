const repeatString = function(inputString,repeatNumber) {
    let repeatString =[];
    if(repeatNumber<0){
        return 'ERROR';
    }
    for (let index = 0; index < repeatNumber; index++) {
        repeatString.push(inputString);      
    }
    return repeatString.join('');

};

// Do not edit below this line
module.exports = repeatString;
