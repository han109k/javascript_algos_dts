/**
 * *SLIDING WINDOW
 * Write a function called minSubArrayLen  which accepts two parameters
 * - an array of positive integers and a positive integer.
 * This function should return the minimal length of a //!contiguous
 * subarray of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 */

function minSubArrayLen(arr, num) {

  if(arr[0] > num) {
    return 1;
  }

  let start = 0;
  let end = 0;
  let total = 0;
  let len = Infinity;

  while(start < arr.length) {

    if(total < num && end < arr.length) {
      total += arr[end];
      end++;
    } else if(total >= num) {
      len = Math.min(len, (end - start));
      total -= arr[start];
			start++;
    } else {
      start = arr.length;
    }
  }

  return len === Infinity ? 0 : len;
}

function minSubArrayLenRef(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));  // 2 -> [4,3]
console.log(minSubArrayLen([2,1,6,5,4], 9));  // 2 -> [5,4]
console.log(minSubArrayLen([2,23,11,45,35,64], 52)); // 1 -> [64]
console.log(minSubArrayLen([2,4,16,22,7,8,9], 95)); // 0
console.log(minSubArrayLen([2,4,16,22,7,8,9], 1)); // 1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); // 3