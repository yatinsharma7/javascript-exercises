// const removeFromArray = function(arr,...items) {
//     for(let item of items){
//         arr = arr.filter(element=>element !==item);

//     }
//     return arr;
// };



const removeFromArray = function(arr,...items) {
    items.forEach((item) => {arr = arr.filter(element=> element !==item)})
    return arr; 
    
}
// const removeFromArray = function(array,...items){
//     const newArray = [];
//     array.forEach(element => {
//         if(!items.includes(element)){newArray.push(element)}
//     });
//     return newArray;
// }

// const removeFromArray = function(array,...items){
//     return array.filter(elements=>!items.includes(elements))
// }



// Do not edit below this line
module.exports = removeFromArray;
// module.exports = removeFromArray2;
