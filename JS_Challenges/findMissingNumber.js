// Source: https://namastedev.com/practice/find-missing-number

/*
Find Missing Number

You are given an array containing n distinct numbers taken from the range 0 to n. This means the array should ideally contain all numbers from 0 to n, but one number is missing. Your task is to find and return that missing number.

Input: An array of n integers where each integer is unique and lies between 0 and n (inclusive) except for one missing number.
Output: Return the missing number.

Example Inputs & Outputs
// Example 1:
Input: [3, 0, 1]
Output: 2

// Example 2:
Input: [0, 1]
Output: 2

// Example 3:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8

// Example 4:
Input: [0]
Output: 1

Constraints & Edge Cases
The array contains exactly n numbers.
All numbers are unique.
Numbers are in the range 0 to n.
Only one number is missing from the sequence.
The array may be in any order.
Edge case: missing number could be 0 or n.
*/

// O(n) T || O(1) S (Mathematical Approach)
function findMissingNumber(nums) {
  // Your implementation
  // Logic, sum of n numbers (expected sum) - sum of available numbers (actual sum), gives the missing number
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, num) => acc + num, 0);

  return expectedSum - actualSum;
}

// O(n^2) T | O(1) S
function findMissingNumber2(nums) {
  // Your implementation
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
}
