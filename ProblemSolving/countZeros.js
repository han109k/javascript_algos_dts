/**
 * Divide & Conquer
 * Time Complexity O (logn)
 * 
 * Given an array 1s and 0s which has all 1s first followed by all 0s,
 * write a function which returns the number of zeroes in the array.
 */
function countZerosHelper(arr, low, high) {

  if(high >= low) {
    
    const mid = Math.floor((high + low) / 2);

    if((mid === 0 || arr[mid-1] === 1) && arr[mid] === 0) {
      return mid;
    }
  
    if(arr[mid] === 0) {
      return countZerosHelper(arr, low, (mid - 1));
    } else {
      return countZerosHelper(arr, (mid + 1), high);
    }
  }

  return -1;
}

function countZeroes(arr) {

  const length = arr.length;
  const one = countZerosHelper(arr, 0, length-1);
  let count;

  one === -1 ? count = 0 : count = (length - one);

  return count;
}


console.log(countZeroes([1,1,1,1,0,0])); // 2
console.log(countZeroes([1,0,0,0,0]));   // 4
console.log(countZeroes([0,0,0]));       // 3
console.log(countZeroes([1,1,1,1]));     // 0
console.log(countZeroes([1,1,1,1,1,0,0,0,0,0])); // 5
console.log(countZeroes([0]));  // 1