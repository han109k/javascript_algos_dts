/**
 * Missing integer
 * A is an array with N number integers,
 * find smallest positive integer (excl. 0) that does not exist in A.
 * EX: [1,3,6,4,1,2] -> 5 | [1,2,3] -> 4 | [-1, -6] -> 1
 * Constraints: 1 <= N <= 1000000, n is integer of A => -1000000 <= n <= 1000000
 */

function solution(A) {
  let min = 1;
  A.sort();

  for (let number of A) {
    if (number > -1 && min === number) min++;
  }

  return min;
}

function solutionRef(A) {
  const map = {};
  for (let number of A) {
    map[number] = (map[number] || 0) + 1;
  }
  for (let i = 0; i < 1000002; i++) {
    if (!map[i]) return i;
  }
  return 1;
}

console.log(solution([1, 3, 6, 4, 1, 2])); // 5
console.log(solution([1, 2, 3])); // 4
console.log(solution([-1, -3, 5])); // 1
console.log(solution([0, 0, 0, 0, 0, 0])); // 1
console.log(solution([37])); // 1
