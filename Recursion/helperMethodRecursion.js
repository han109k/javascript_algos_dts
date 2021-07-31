function collectOddValues(arr) {

  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }

    if(helperInput[0] %2 !== 0) { // check first element whether odd or not
      result.push(helperInput[0]);
    }
    
    helper(helperInput.slice(1)); // remove first element
  }

  helper(arr);

  return result;
}

function pureRecursion(arr) {

  let array = [];

  if(arr.length === 0) {
    return array;
  }

  if(arr[0] % 2 !== 0) {
    array.push(arr[0]);
  }  

  array = array.concat(pureRecursion(arr.slice(1)));
  return array;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]));
console.log(pureRecursion([1,2,3,4,5,6,7,8,9,10]));