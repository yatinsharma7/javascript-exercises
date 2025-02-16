const sumAll = function(a,b) {
    let sum = 0;
    if(a<0 || b<0) return "ERROR";
    if(!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';    
    if (a<b) {
        for (let index = a; index <= b; index++) {
            sum = sum + index;
            
        }
        return sum;
    } else if(a>b) {
        for (let index = b; index <=a; index++) {
            sum += index;
            
        }
        return sum;
    } 




};

// Do not edit below this line
module.exports = sumAll;
