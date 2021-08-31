/**
 * Time Complexity O (2^N)
 * Recursive solution
 */
function fib(num) {
  if (num < 3) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log("Recursive : ", fib(15));

/**
 * Time Complexity O (N)
 * Memoizated solution (Top-down approach)
 * Memoization : Storing the results of expensive function calls and
 * returning the cached result when the same inputs occur again
 */
function fibDynamic(num, memo = [undefined, 1, 1]) {
  if (memo[num] !== undefined) return memo[num];
  // if (num < 3) return 1; => Don't need to check since we're pre-programming memo array to include base case
  let res = fibDynamic(num - 1, memo) + fibDynamic(num - 2, memo);
  memo[num] = res;
  return res;
}

console.log("Dynamic : ", fibDynamic(15));

/**
 * Time Complexity O (N)
 * Tabulation solution (Buttom-up approach)
 * Starting from base case to build up to main case
 * Better approach for space complexity.
 * The reason: it does not use call stack like memoized version since it's iterative.
 * Also it doesn't cause stack overflow on cases of big numbers
 */
function fibTabular(num) {
  if (num < 3) return 1;
  let fibNums = [0,1,1];  // Storing base case
  for(let i = 3; i <= num; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[num];
}

console.log("Tabulated : ", fibTabular(15));