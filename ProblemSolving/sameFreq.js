/**
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 */

function sameFrequency(num1, num2) {

  const digits1 = {}
  const digits2 = {}

  // find frequency of digits for first number
  while(num1 > 0) {
    let digit = num1 % 10;
    digits1[digit] = (digits1[digit] || 0) + 1;
    num1 = Math.floor(num1 / 10);
  }

  while(num2 > 0) {
    let digit = num2 % 10;
    digits2[digit] = (digits2[digit] || 0) + 1;
    num2 = Math.floor(num2 / 10);
  }

  // compare the digits of second number with first number
  for(let digit in digits1) {
    if(digits1[digit] != digits2[digit]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578,5879385)); // true
console.log(sameFrequency(22,222)); // false