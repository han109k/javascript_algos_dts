/**
 * *Frequency Counter Pattern 
 * Given two strings, write a function to determine 
 * if the second string is an anagram of the first.
 */

// Time complexity O(n)
function validAnagram(str1, str2) {

  if(str1.length !== str2.length) {
    return false;
  }

  const freq1 = {};
  const freq2 = {};

  for(let char of str1) {
    freq1[char] = (freq1[char] || 0) + 1;
  }

  for(let char of str2) {
    freq2[char] = (freq2[char] || 0) + 1;
  }

  for(let property in freq1) {
    if(!(property in freq2)) {
      return false;
    }
    if(freq1[property] !== freq2[property]) {
      return false;
    }
  }

  return true;
}

function validAnagramRef(str1, str2) {

  if(str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for(let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for(let character of str2) {
    if(!lookup[character]) {
      return false;
    } else {
      lookup[character] -= 1;
    }
  }

  return true;
}

console.log(validAnagramRef('', ''));  // true
console.log(validAnagramRef('aaz', 'zza'));  // false
console.log(validAnagramRef('anagram', 'nagaram'));  // true
console.log(validAnagramRef('rat', 'car'));  // false
console.log(validAnagramRef('qwerty', 'qytrew'));  // true
console.log(validAnagramRef('awesome', 'awesom'));  // false