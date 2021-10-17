function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    };
  }

  for(let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for(let j = i+1; j < arr.length; j++) {
      if(comparator(arr[min], arr[j]) > 0) min = j;
    }
    if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
}

console.log(selectionSort([0, -10, 7, 4]));
console.log(selectionSort([1, 2, 3, 4]));
console.log(selectionSort([4, 20, 12, 10, 7, 9]));
