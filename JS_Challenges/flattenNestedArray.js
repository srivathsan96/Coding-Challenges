// Source: https://namastedev.com/practice/flatten-nested-array

/*
Flatten Nested Array

Create a function that takes a nested array of arbitrary depth and returns a flattened array where all nested elements are extracted and placed in a single array.

Example Inputs & Outputs
//Example 1
Input: [1, [2, [3, 4], 5], 6]
Output: [1, 2, 3, 4, 5, 6]

//Example 2
Input: [["a"], ["b", ["c", "d"]], "e"]
Output: ["a", "b", "c", "d", "e"]

Constraints & Edge Cases

The input array may contain numbers, strings, or other data types.
The function should handle deeply nested arrays efficiently.
Empty arrays should be handled correctly.
The function should return a new array without modifying the original input.
*/


// Solution 1:

// O(n) T | O(n) S
function flattenArray(arr) {
    // Your implementation
    return arr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr), []);
}

// Solution 2:

// O(n) T | O(n) S
function flattenArray2(arr) {
    // Your implementation
    let result = [];

    (function flat(a) {
        for(let val of a) {
            Array.isArray(val) ? flat(val) : result.push(val);
        }
    })(arr);

    return result;
}