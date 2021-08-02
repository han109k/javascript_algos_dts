// Time complexity : O(n)
function search(arr, num) {

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) return i;
  }

  return -1;
}

console.log(search([1,2,3], 3));