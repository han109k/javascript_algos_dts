/**
 * An array A consisting of N different integers is given.
 * Your goal is to find that missing element.
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 */

// Time Complexity: O(n).
function findMissing(A) {
  const n = A.length;
  // Find sum of numbers from 1...n
  let total = Math.floor(((n + 1) * (n + 2)) / 2);
  for (let i = 0; i < n; i++) total -= A[i];
  return total;
}

console.log(findMissing([1])); // 2
console.log(findMissing([])); // 1
console.log(findMissing([2, 3, 1, 5])); // 4
