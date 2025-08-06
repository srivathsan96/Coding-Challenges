// Source: https://namastedev.com/practice/findmaxnumber

/*
findMaxNumber

JavaScript
easy
15 mins

Write a function findMaxNumber that takes an array of numbers as input and returns the largest number in the array. If the array is empty, return null.

Example Inputs & Outputs
findMaxNumber([1, 2, 3, 4, 5])       // → 5  
findMaxNumber([-10, -20, -3, -1])   // → -1  
findMaxNumber([42])                // → 42  
findMaxNumber([])                  // → null  
findMaxNumber([100, 100, 100])     // → 100  

Constraints & Edge Cases
Input is always an array.
Array can include positive, negative, and zero values.
Array can be empty — in that case, return null.
Array may include duplicate values.
Must not mutate the original array.
*/

// Space & Time Complexity: O(n) T | O(1) S
function findMaxNumber(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

//For the purpose of user debugging.
console.log(findMaxNumber([-10])); // → -10
console.log(findMaxNumber([1, 2, 3, 4, 5])); // → 5
console.log(findMaxNumber([-10, -20, -3, -1])); // → -1
console.log(findMaxNumber([42])); // → 42
console.log(findMaxNumber([])); // → null
console.log(findMaxNumber([100, 100, 100])); // → 100
