//* Time complexity O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i < n + 1; i++) {
    total += i;
  }

  return total;
}

//* Time complexity O(1)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let start = performance.now();
let result = addUpTo(10);
let finish = performance.now();
console.log(`Result is ${result} and calculated in ${finish - start}ms `);

start = performance.now();
result = addUpTo2(10);
finish = performance.now();
console.log(`Result is ${result} and calculated in ${finish - start}ms `);
