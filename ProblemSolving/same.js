/**
 * FREQUENCY COUNTER PATTERN
 * write a function called same, which accepts two arrays.
 * The function should return true if every value in the array
 * has it's corresponding value squared in the second array.
 * Frequency of values must be the same
 */

// Time complexity O(n)
function same(arr1, arr2) {

  // check length of both arrays if NOT equal then return false otherwise continue
  if(arr1.length !== arr2.length) {
    return false;
  }

  // create two objects each contains key as number and value as frequency
  const obj1 = {};
  const obj2 = {};
  
  arr1.map(number => {
    obj1[number] = (obj1[number] || 0) + 1;
  })

  arr2.map(number => {
    obj2[number] = ++obj2[number] || 1;
  })

  // loop over obj1
  // check if obj2 contains squared key of obj1 and also check frequency
  for(const key in obj1) {
    if(!(key ** 2 in obj2)) {
      return false;
    }
    if(obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1,2,3], [4,1,9])); //true
console.log(same([1,2,3,2], [9,1,4,4])); //true
console.log(same([1,2,3], [1,9])); //false
console.log(same([1,2], [25,16])); //false
console.log(same([1,2,1], [4,4,1])); //false