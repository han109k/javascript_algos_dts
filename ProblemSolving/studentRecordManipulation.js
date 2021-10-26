function manipulateStudentRecord(obj, operation, prop, newValue) {
  // write your code here
  if (operation === "edit" && obj.hasOwnProperty(prop)) {
    obj[prop] = newValue;
  }
  if (operation === "delete" && obj.hasOwnProperty(prop)) {
    delete obj[prop];
  }

  return obj;
}

console.log(
  manipulateStudentRecord(
    { name: "John", lastName: "Bliss", city: "Florida" },
    "edit",
    "city",
    "Seattle"
  )
);
console.log(
  manipulateStudentRecord(
    { name: "John", lastName: "Bliss", city: "Florida" },
    "delete",
    "city"
  )
);
console.log(
  manipulateStudentRecord(
    { name: "John", lastName: "Bliss", city: "Florida" },
    "delete",
    "abc",
    "Tor"
  )
);
