/**
 * Write a recursive function called fib  which accepts
 * a number and returns the nth th number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers
 * 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number
 * thereafter is equal to the sum of the previous two numbers.
 */

/**
 * Time Complexity O (N)
 */
function fibIter(num) {

  if(num === 0) return undefined;
  if(num === 1 && num === 2) return 1;
  
  let fib = 1;
  let prev = 1;
  for(let i = 2; i < num; i++) {
    let tmp = fib;
    fib += prev;
    prev = tmp;
  }

  return fib;
}

/**
 * Time Complexity O (2^N)
 */
function fib(num) {
  if(num <= 2) return 1;
  return fib(num-1) + fib(num-2);
}

console.log(fibIter(4));  // 3
console.log(fibIter(6));  // 8
console.log(fibIter(10));  // 55
console.log(fibIter(28));  // 317811

console.log(fib(4));  // 3
console.log(fib(6));  // 8
console.log(fib(10));  // 55
console.log(fib(28));  // 317811