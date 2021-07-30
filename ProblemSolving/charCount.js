// Break it down
function charCount(str) {
  // create a new object to return at the end
  const result = {};
  // loop over the string, for each character ...
  
  for(letter of str) {
    // if char is a number/letter AND is a key in object, increment value
    if(result.hasOwnProperty(letter)) {
      result[letter] = result[letter] + 1;
    }  
    // if char is a number/letter AND is NOT a key in object, add it to object and set value to 1
    else {
      result[letter] = 1;
    }
    // if char is a space, special char, etc. ignore
  }

  // return the object
  return result;
}

//* Refactoring
function charCountRef(str) {
  // create a new object to return at the end
  const result = {};
  // loop over the string, for each character ...
  
  for(letter of str) {
    letter = letter.toLowerCase();
    if(/[a-z0-9]/.test(letter)) {
      // if char is a number/letter AND is a key in object, increment value
      // if char is a number/letter AND is NOT a key in object, add it to object and set value to 1
      result[letter] = ++result[letter] || 1;
    }  
    // if char is a space, special char, etc. ignore
  }

  // return the object
  return result;
}

console.log(charCountRef("asdfa ok  boomer!"));