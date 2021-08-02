function search(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor(arr.length / 2);

  while (arr[middle] !== val && left < right) {
    if (arr[middle] < val) {
      left = middle + 1;
    } else if (arr[middle] > val) {
      right = middle - 1;
    }

    middle = Math.floor((left + right) / 2);
  }

  return arr[middle] === val ? middle : -1;
}

console.log(search([1,2,3,4,5,6,7,8,9], 2));
console.log(search([1,2,3,4,5,6,7,8,9], 3));
console.log(search([1,2,3,4,5,6,7,8,9], 10));
console.log(search([1,2,3,4,5,6,7,8,9], -4));