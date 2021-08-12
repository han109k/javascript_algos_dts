/**
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object which may contain nested objects.
 */

function nestedEvenSum(obj) {
  let even = 0;

  for (let key in obj) {
    if (!(obj[key] instanceof Object)) {
      if (obj[key] % 2 === 0) {
        even += obj[key];
      }
    } else {
      even += nestedEvenSum(obj[key]);
    }
  }

  return even;
}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

let obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
