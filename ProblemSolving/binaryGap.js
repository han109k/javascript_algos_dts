/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros
 * that is surrounded by ones at both ends in the binary representation of N.
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
 * The number 529 has binary representation 1000010001 and contains two binary gaps:
 * one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains
 * one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.
 * The number 32 has binary representation 100000 and has no binary gaps.
 */

function binaryGap(n) {
  // convert number to binary(string) >>> zero fill right shift number.toString(2) '2' radix (base)
  n = (n >>> 0).toString(2);
  // convert string to array, then reverse it finally convert back to string
  n = n.split("").reverse().join("");

  let flag = false, max = 0, counter = 0;
  for(let i = 0; i < n.length; i++) {
    if(flag && n[i] === '0') counter++;
    if(n[i] === '1') {
      flag = true;
      if(max < counter) max = counter;
      counter = 0;
    }
  }

  return max;
}

console.log(binaryGap(9));  // 2
console.log(binaryGap(32)); // 0
console.log(binaryGap(529)); // 0
