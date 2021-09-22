/**
 * Write a recursive function called reverse which accepts a string
 * and returns a new string in reverse.
 */

function reverse(str) {
  let rts = "";
  if (str.length === 0) {
    return rts;
  } else {
    rts += str.slice(-1);
  }

  rts = rts.concat(reverse(str.slice(0, -1)));
  return rts;
}

console.log(reverse("awesome")); // "emosewa"
console.log(reverse("hungarian")); // "nairagnuh"
