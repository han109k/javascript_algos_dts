// Time Complexity O(n^2)
function search(str, word) {
  let count = 0;
  let j = 0;

  // loop over longer string
  for (let i = 0; i < str.length; i++) {
    // loop over shorter string
    while (j < word.length) {
      // if the characters do match and find a search match, increment counter
      if (word[j] === str[i]) {
        if (j === word.length - 1) count++;
        i++;
      }
      // if the characters don't match break out the loop
      else if (word[j] !== str[i]) j = word.length;
      j++;
    }
    j = 0;
  }

  return count;
}

function searchREF(str, word) {
  let count = 0;
  
  // loop over longer string
  for (let i = 0; i < str.length; i++) {
    // loop over shorter string
    for(let j = 0; j < word.length; j++) {
      // if the characters don't match break out the loop
      if(word[j] !== str[i+j]) j = word.length;
      // if the characters do match and find a search match, increment counter
      if(j === word.length - 1) count++;
    }
  }

  return count;
}

console.log(search("adomgadd", "omg")); // 1
console.log(search("adomgadd", "omgomg")); // 0
console.log(searchREF("adomgadd", "omgomg")); // 0
console.log(search("asdfgwok dfsaokfq", "ok")); // 2
console.log(searchREF("asdfgwok dfsaokfq", "ok")); // 2
