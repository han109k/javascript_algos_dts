/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, 
 * capitalize the first letter of each string in the array.
 */

function capitalizeFirst(arr) {

  let cArr = [];
  if(arr.length === 0) return cArr;

  // can move this part into a function
  let str = arr[0];
  str = str[0].toUpperCase();
  str += arr[0].slice(1);
  //
  
  cArr.push(str);

  cArr = cArr.concat(capitalizeFirst(arr.slice(1)));

  return cArr;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));  // ['Car', 'Taco', 'Banana']