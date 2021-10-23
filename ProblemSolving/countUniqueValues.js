/**
 * *MULTIPLE POINTER
 * Implement a function called countUniqueValues,
 * which accepts a sorted array, and count the unique
 * values in the array. There can be negative numbers
 * in the array, but it will always be sorted.
 */


function countUniqueValues(str) { 
  if (str.length === 0 || str.length === 1) {
    return str.length;
  }

  let unique = 1;
  let pivot = str[0];

  for(let i = 1; i < str.length; i++) {
    let seeker = str[i];
    if(pivot != seeker) {
      unique++;
      pivot = seeker;
    }
  }

  return unique;
}

console.log(countUniqueValues([1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,3,4,4,4,5,6,12,13,14])); // 9
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4
console.log(countUniqueValues([-2,-1,-1,0,1,1,2,2,3,4,5,6,6,7,9])); // 4