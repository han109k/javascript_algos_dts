/**
 *  *MULTIPLE POINTERS
 *  Write a function called averagePair
 *  Given a sorted array of integers and a target average,
 *  determine if there is a pair of values in the array
 *  where the average of the pair equals the target average.
 *  There may be more than one pair that matches the average target.
 */

// Time complexity O(n)
// Space complexity O(n)
function averagePair(arr, target) {
  // check if target is an integer
  if ((target * 2 * 10) % 10 > 0) return false;

  target *= 2;
  let set = new Set(arr);

  for (let number of arr) {
    let num2 = target - number;
    if (set.has(num2)) return true;
  }

  return false;
}

// Time complexity O(n)
// Space complexity O(1)
function averagePairRef(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
