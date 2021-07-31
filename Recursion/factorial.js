// Iterative factorial
function factorialItr(num) {

  let total = 1;

  for(let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}

// Recursive factorial
function factorialRec(num) {
  if(num === 1 || num === 0) return 1;
  return num * factorialRec(num-1);
}

console.log(factorialItr(7), factorialRec(7));
