// Source: https://namastedev.com/practice/anagram-checker

/*
Anagram Checker

Write a function that checks whether two input strings are anagrams of each other. An anagram is a word formed by rearranging the letters of another word, using all original letters exactly once.

Input: Two strings str1 and str2
Output: A boolean value – true if the strings are anagrams, false otherwise.

Example Inputs & Outputs
// Example 1:
Input: ("listen", "silent")
Output: true

// Example 2:
Input: ("hello", "world")
Output: false

// Example 3:
Input: ("Triangle", "Integral")
Output: true

// Example 4:
Input: ("rat", "car")
Output: false

// Example 5:
Input: ("a", "A")
Output: true

// Example 6:
Input: ("dormitory!!", "dirty room")
Output: true

Constraints & Edge Cases
- The comparison should be case-insensitive.
- Both strings may contain non-alphabetic characters (optional: ignore them).
- Empty strings are valid inputs.
- Strings of different lengths can’t be anagrams.
- Whitespaces are ignored and compare only letters
*/

function isAnagram(str1, str2) {
  // Your implementation

  // normalize the input strings using regex:
  // - convert str1 and str2 to lowercase
  // - remove non-alphabetic characters
  // - remove whitespaces
  // - sort and join them

  const format = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");

  // return the result of comparison
  return format(str1) === format(str2);
}