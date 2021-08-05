// Time complexity : O(n^2)
function sort(arr) {

  for(let i = arr.length - 1; i > -1; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        // Swap values
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}

function sortOpt(arr) {
  let noSwaps;
  for(let i = arr.length - 1; i > -1; i--) {
    noSwaps = true;
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        // Swap values
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        false;
      }
    }
    if(noSwaps) break;
  }

  return arr;
}

console.log(sort([5,3,6,2,10,4,1]));
console.log(sort([37,45,29,8]));