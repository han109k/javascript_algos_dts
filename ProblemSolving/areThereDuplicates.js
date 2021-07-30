/**
 * *FREQUENCY COUNTER
 * Implement a function called, areThereDuplicates which accepts
 * a variable number of arguments, and check whether there are duplicates
 * among the arguments passed in.
 */

function areThereDuplicates() {

  // using arguments object
  // alternatively rest parameters can be used
  if(arguments.length === 0 || arguments.length === 1) {
    return false;
  }

  // create frequency variable
  const frequency = {};

  for(let argument of arguments) {
    if(argument in frequency) {
      return true;
    } else {
      frequency[argument] = 1;
    }
  }

  return false;
}

function areThereDuplicatesRef() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1,2,3)); // false
console.log(areThereDuplicates(1,2,2)); // true
console.log(areThereDuplicates('a','b','c','a')); // true
console.log(areThereDuplicates('')); // true