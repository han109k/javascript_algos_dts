/**
 * Write a function called collectStrings which accepts an object and returns
 * an array of all the values in the object that have a type string.
 */

function collectStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (obj[key] instanceof Object) {
      strings = strings.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    }
  }

  return strings;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
