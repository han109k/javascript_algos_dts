function bubbleSort(arr, comparator) {
  // if there is not a comparator i.e it's undefined
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    };
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      let res = comparator(arr[j], arr[j + 1]);
      if (res > 0) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
}

function strComp(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  return 0;
}

console.log(bubbleSort([0, -10, 7, 4]));
console.log(bubbleSort([1, 2, 3, 4]));
console.log(bubbleSort([4, 20, 12, 10, 7, 9]));

const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
console.log(bubbleSort(kitties, strComp));
