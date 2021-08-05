// Time complexity : O(n^2)
function sort(arr) {

  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(arr[minIndex] !== arr[i]) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }    
  }

  return arr;
}

console.log(sort([5,3,6,2,10,4,1]));
console.log(sort([37,45,29,8]));