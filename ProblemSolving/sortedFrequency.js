/**
 * Divide & Conquer
 * Given a sorted array and a number, write a function that count the
 * occurrences of the number in the array
 * Time complexity: O(logn)
 */

function sortedFrequency(arr, target) {
  let count = 0;

  function helper(arr, low, high) {
    if (high > low) {
      const mid = Math.floor((high + low) / 2);

      if (arr[mid] === target) count++;

      helper(arr, low, mid);
      helper(arr, mid + 1, high);
    }
  }

  helper(arr, 0, arr.length);

  return count === 0 ? -1 : count;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
