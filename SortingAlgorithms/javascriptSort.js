/** 
 * The built-in sort method accepts an optional *comparator function
 * This tells to JavaScript how to sort
 * The comparator look at pairs of elements (a & b)
 * * If it returns a negative number, a should come before b
 * * If it returns a positive number, a should come after b
 * * If it returns 0, a and b are the same
*/

function numberCompare(num1, num2){
  return num1 - num2;
}

console.log([6,4,15,10].sort(numberCompare));

function compareByLen(str1, str2){
  return str1 - str2;
}

["Data Structures", "Search Algorithms", "Javascript", "Sort Algortihms"].sort(compareByLen)