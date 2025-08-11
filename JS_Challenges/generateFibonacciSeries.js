// Source: https://namastedev.com/practice/fibonacci-series

/*
Fibonacci Series

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. It starts with 0 and 1. That is:

F(0) = 0  
F(1) = 1  
F(n) = F(n - 1) + F(n - 2) for n > 1
Given an integer n, return an array containing the first n Fibonacci numbers, starting from 0.

Examples
Input: n = 5
Output: [0, 1, 1, 2, 3]

Input: n = 8  
Output: [0, 1, 1, 2, 3, 5, 8, 13]

Input: n = 1
Output: [0]

Input: n = 0
Output: []
Constraints
0 ≤ n ≤ 50

Return an empty array [] for:

n ≤ 0
non-integer inputs
Return [0] for n = 1

*/

// O(n) T | O(n) S
function generateFibonacci(n) {
  if (typeof n !== "number" || n <= 0) return [];
  if (n === 1) return [0];

  let a = 0;
  let b = 1;
  let c;
  let arr = [a, b];

  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    arr.push(c);
  }

  console.log(arr);
}

generateFibonacci(5);
