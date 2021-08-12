/**
 * Write a function a called capitalizeWorlds.
 * Given an array of words, return a new array
 * containing each word capitalized.
 */

function capitalizeWords(arr) {
  if (arr.length === 0) return arr;

  let newArr = [];
  newArr.push(arr[0].toUpperCase());

  return newArr.concat(capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
