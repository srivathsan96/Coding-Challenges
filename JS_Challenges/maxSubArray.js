// Source: https://namastedev.com/practice/max-subarray

/*
Max SubArray

Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.

This is known as Kadane's Algorithm. You must solve it in O(n) time.

Example Inputs & Outputs

// Example 1:
Input: [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
Input: [1]
Output: 1

// Example 3:
Input: [5,4,-1,7,8]
Output: 23

Constraints & Edge Cases

Array may contain both positive and negative numbers
Single element array should return that element
If all numbers are negative, return the largest among them
Empty array should return -Infinity
*/

// Using Kadane's Algorithm O(n) T | O(1) S
function maxSubArray(nums) {
  // write your code  here
  let max_so_far = -Infinity; // very small negative number
  let current_max = 0;

  for (let i = 0; i < nums.length; i++) {
    current_max += nums[i];
    max_so_far = Math.max(current_max, max_so_far);
    if (current_max < 0) current_max = 0;
  }

  return max_so_far;
}

// Brute Force Approach could be used to solve this problem but the time complexity will become O(n^3) or O(n^2) for an optimized one.