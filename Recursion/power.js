/**
 * *RECURSION
 * power(2,0) // 1
 * power(2,2) // 4
 * power(2,4) // 16
 */

function power(base, pow) {
  if(pow === 0) return 1;
  return base * power(base, pow-1);
}

console.log(power(2,0));
console.log(power(2,4));
console.log(power(3,3));
console.log(power(5,4));