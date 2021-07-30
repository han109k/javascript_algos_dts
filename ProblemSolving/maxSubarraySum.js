
/**
 * SLIDING WINDOW PATTERN
 */
function maxSubarraySum(arr, num) {

  let temp = 0;
  let max = 0;

  if(arr.length < num) {
    return null;
  }

  for(let i = 0; i < num; i++) {
    temp += arr[i];
  }

  max = temp;

  for(let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];
    max = Math.max(max, temp);
  }

  return max;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));  // 19