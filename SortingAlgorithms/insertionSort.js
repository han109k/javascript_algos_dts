function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    do {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      j--;
    } while (j != -1 || arr[j] < arr[j + 1]);
  }

  return arr;
}

console.log(sort([5, 3, 6, 2, 10, 4, 1]));
console.log(sort([37, 45, 29, 8]));

// Time complexity O(n^2)
function sortRef(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(sortRef([5, 3, 6, 2, 10, 4, 1]));
console.log(sortRef([37, 45, 29, 8]));
