// Time complexity : O(n+m)
// Space complexity : O(n+m)

/**
 * Merges two sorted arrays
 * @param {arr1} sorted array
 * @param {arr2} sorted array
 * @returns mArr
 */
function merge(arr1, arr2) {

  let mArr = [];

  let i = 0, j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      mArr.push(arr1[i]); i++;
    } else if (arr1[i] > arr2[j]) {
      mArr.push(arr2[j]); j++;
    } else {
      mArr.push(arr1[i]);
      mArr.push(arr2[j]);
      i++;j++;
    }
  }

  while(i < arr1.length) {
    mArr.push(arr1[i]); i++;
  }
  while(j < arr2.length) {
    mArr.push(arr2[j]); j++;
  }
  

  return mArr;
}

// Time complexity O(n*logn)
// Space complexity O(n)
function sort(arr) {

  let half = Math.floor(arr.length / 2);
  if(half === 0) {
    return arr;
  }

  let left = sort(arr.slice(0, half));
  let right = sort(arr.slice(half));

  return merge(left, right);

}

// console.log(merge([1, 5, 7, 8], [2, 8, 16, 20]));
console.log(sort([15,2,55,31,93,4,6]));