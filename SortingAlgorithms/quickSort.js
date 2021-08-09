// Time Complexity O(n)
function pivot(arr, start, end) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];

  return swapIndex;
}

// console.log(pivot([7,2,4,1,5]));
// console.log(pivot([4, 2, 7, 10]));
// console.log(pivot([4, 3, 6, 2, 10]));

/**
 * ! In JavaScript, all objects interact by reference
 * ! This includes Arrays, String object
 * Time Complexity Worst case: O(n^2) - Average: O(n*logn)
 * To optimize algo pivot should be selected randomly
 * instead of selecting the first index
 * SpaceComplexity O(logn)
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
function sort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let swap = pivot(arr, left, right);
    // left
    sort(arr, left, swap);
    // right
    sort(arr, swap+1,right);
  }
  return arr;
}

console.log(sort([4,2,7,10]));
console.log(sort([7,2,4,1,5]));
console.log(sort([100,-3,2,4,6,9,1,2,5,3,23]));
