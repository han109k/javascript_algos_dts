/**
 * *Divide & Conquer
 * Write a function called findRotatedIndex
 * which accepts a rotated array of sorted numbers and an integer.
 * The function should return the index of the integer in the array.
 * If the value is not found, return -1
 */
function findRotatedIndex(arr, target) {

  let index = -1;

  function helper(arr, low, high) {

    if(high > low) {
      const mid = Math.floor((high + low) / 2);

      if(arr[mid] === target) {
        index = mid;
        return mid;
      }
  
      // if(arr[mid] < arr[mid+1]) return -1;
  
      helper(arr, mid+1, high);
  
      helper(arr, low, mid);
    }

  }

  helper(arr, 0, arr.length);

  return index;
  
}

console.log(findRotatedIndex([3,4,1,2], 4));  // 1
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 8));  // 2
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 3));  // 6
console.log(findRotatedIndex([3,4,1,2], 6));  // -1
console.log(findRotatedIndex([6,7,8,9,1,2,3,4], 12));  // -1
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16));  // 5