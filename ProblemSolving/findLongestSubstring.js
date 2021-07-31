/**
 * *SLIDING WINDOW
 * Write a function called findLongestSubstring which accepts a string and returns
 * the length of the longest substring with all distinct characters.
 */

function findLongestSubstring(str) {
  // create an empty set
  let lastSeen = {};
  let start = 0;
  let max = 0;

  // loop over string and build a substring
  for(let i = 0; i < str.length; i++) {
    if(str[i] in lastSeen) {
      start = Math.max(start, lastSeen[str[i]]);
    }

    max = Math.max(max, i - start + 1); 

    lastSeen[str[i]] = i + 1;
  }
  

  return max;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
