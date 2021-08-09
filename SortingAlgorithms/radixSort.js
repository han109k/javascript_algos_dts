/**
 * getDigit(num, place) - returns the digit in num
 * at the given place value
 */
function getDigit(num, place) {

  let digit;

  do {
    digit = num % 10;
    num = Math.floor(num / 10);
    place--;
  } while(place > -1);

  return digit;
}

function getDigitRef(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// console.log(getDigit(12345, 0)); // 5
// console.log(getDigit(12345, 1)); // 4
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 3)); // 2
// console.log(getDigit(12345, 4)); // 1
// console.log(getDigit(12345, 5)); // 0

/**
 * returns the number of digits in num
 */
function digitCount(num) {
  
  let count = 0;
  do {
    num = Math.floor(num / 10);
    count++;
  } while(num > 0);

  return count;
}

function digitCountRef(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(1)); // 1
// console.log(digitCount(25)); // 2
// console.log(digitCount(314)); // 3
// console.log(digitCount(0)); // 1

/**
 * Given an array of numbers, returns the number of digits
 * in the largest numbers in the list
 */
function mostDigits(nums) {
  let mostDigits = 0;
  for(num of nums) {
    if(mostDigits < digitCount(num)) mostDigits = digitCount(num);
  }
  return mostDigits;
}

function mostDigitsRef(nums) {
  let maxDigits = 0;
  for(num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(nums));
  }
  return mostDigits;
}

// console.log(mostDigits([1234, 56, 7])); // 4
// console.log(mostDigits([1, 1, 11111, 1])); // 5
// console.log(mostDigits([12, 34, 56, 78])); // 2


// Time Complexity: O(n*k); n length of array, k word size
// Space Complexity: O(n + k)
function sort(arr) {

  let k = mostDigits(arr);

  let buckets = new Array(10);
  for(let i = 0; i < buckets.length; i++) {
    buckets[i] = new Array();
  }

  for(let i = 0; i < k; i++) {

    for(let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }

    arr = [];

    for(let k = 0; k < 10; k++) {
      arr = arr.concat(buckets[k])
    }
    for(let i = 0; i < buckets.length; i++) {
      buckets[i] = new Array();
    }
  }
  return arr;
}

function sortRef(arr) {
  let k = mostDigits(arr);
  
  for(let i = 0; i < k; i++) {
    // 10 empty arrays
    let buckets = Array.from({length: 10}, () => []);
    for(let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(sortRef([3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793]));
console.log(sortRef([7,2,4,1,5]));