/**
 * Write a recursive function flatten function return a new array with all values flattened
 */

function flatten(arr){

  let flat = [];

  for(let i = 0; i < arr.length; i++) {
    if(!(arr[i] instanceof Array)) {
      flat.push(arr[i]);
    } else {
      flat = flat.concat(flatten(arr[i]));
    }
  }

  return flat;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]));  // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]]));  // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));  // [1,2,3]