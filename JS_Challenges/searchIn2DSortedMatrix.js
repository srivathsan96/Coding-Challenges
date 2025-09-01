// Source: https://namastedev.com/practice/search-in-a-2d-sorted-matrix

/*
Search in a 2D Sorted Matrix

You are given a 2D matrix of integers where each row is sorted in ascending order from left to right, and each column is sorted in ascending order from top to bottom.

Write a function searchElement(matrix, target) that returns true if the target is found in the matrix, and false otherwise.

Function Signature
function searchElement(matrix: number[][], target: number): boolean

Input
matrix: a 2D array of integers (0 ≤ matrix.length ≤ 1000, 0 ≤ matrix[i].length ≤ 1000)

target: an integer value to be searched for

Output
Return true if the target exists in the matrix, otherwise return false.

Time Complexity
O(m + n), where m is the number of rows and n is the number of columns.

Space Complexity
O(1) — No extra space is used other than a few variables.

Example
searchElement([
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17]
], 5) // ➞ true

searchElement([
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17]
], 15) // ➞ false

searchElement([], 1) // ➞ false

searchElement([[]], 1) // ➞ false
*/

// O(m + n) T | O(1) S
function searchElement(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;

  // Start from top right
  let i = 0;
  let j = matrix[0].length - 1;

  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) {
      // equals target
      return true;
    }

    if (matrix[i][j] > target) {
      // move left
      j--;
    } else {
      // move down
      i++;
    }
  }

  return false;
}

// O(m * n) T | O(1) S
function searchElement2(matrix, target) {
  let result = false;
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    if (row.includes(target)) result = true;
  }
  return result;
}
