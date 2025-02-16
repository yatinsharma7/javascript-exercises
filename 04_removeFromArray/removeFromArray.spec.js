const removeFromArray = require('./removeFromArray')
const removeFromArray2 = require('./removeFromArray2')

function generateRandomArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomNumber);
  }
  return array;
}

describe('removeFromArray', () => {
  test('removes a single value', () => {
    expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('removes multiple values', () => {
    expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
  });
  test('removes multiple of the same value', () => {
    expect(removeFromArray([1, 2, 2, 3], 2)).toEqual([1, 3]);
  });
  test('ignores non present values', () => {
    expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
  });
  test('ignores non present values, but still works', () => {
    expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
  });
  test('can remove all values', () => {
    expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
  });
  test('works with strings', () => {
    expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
  });
  test('only removes same type', () => {
    expect(removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);
  });
  // test('Large Array testcase',()=>{
  //   expect(removeFromArray(generateRandomArray(100,0,13),)).to
  // })

});
