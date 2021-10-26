/**
 * An array A consisting of N integers is given. Rotation of the array means
 * that each element is shifted right by one index,
 * and the last element of the array is moved to the first place
 * The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
 */
function rotate(A, K) {
  if (K !== 1 && A.length % K === 0) return A;
  if (K > A.length) K = A.length % K;

  return [].concat(A.slice(A.length - K)).concat(A.slice(0, A.length - K));
}

console.log(rotate([3, 8, 9, 7, 6], 0));
console.log(rotate([3, 8, 9, 7, 6], 1));
console.log(rotate([3, 8, 9, 7, 6], 3));
console.log(rotate([3, 8, 9, 7, 6], 5));
console.log(rotate([1, 2, 3, 4], 4));