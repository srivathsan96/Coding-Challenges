// Source: https://namastedev.com/practice/array-chunking

/*
Array Chunking

Write a function that splits an array into chunks (subarrays) of a given size n. If the array cannot be split evenly, the final chunk should contain the remaining elements.

Input:

An array of elements arr
A positive integer n representing the size of each chunk
Output:

An array of subarrays, each with a length of n (except possibly the last one)
Example Inputs & Outputs
// Example 1:
Input: ([1, 2, 3, 4], 2)
Output: [[1, 2], [3, 4]]

// Example 2:
Input: ([1, 2, 3, 4, 5], 2)
Output: [[1, 2], [3, 4], [5]]

// Example 3:
Input: ([], 3)
Output: []

// Example 4:
Input: ([1, 2, 3], 5)
Output: [[1, 2, 3]]

Constraints & Edge Cases
The chunk size n is a positive integer greater than 0.
The input array can be empty.
If n is larger than the array length, return a single chunk with the entire array.
If n is 1, return an array of single-element arrays.
*/

// O(arr.length) T || O(arr.length) S
function chunkArray(arr, n) {
  // Your implementation
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}
