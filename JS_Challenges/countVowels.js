// Source: https://namastedev.com/practice/count-vowels

/*
Write a function countVowels that takes a string as input and returns the number of vowels in that string. Vowels include both lowercase and uppercase characters: 'a', 'e', 'i', 'o', 'u' and 'A', 'E', 'I', 'O', 'U'.

Example Inputs & Outputs

countVowels("hello")         // → 2  (e, o)
countVowels("JavaScript")    // → 3  (a, a, i)
countVowels("bcd")           // → 0
countVowels("AEIOU")         // → 5
countVowels("")              // → 0

Constraints & Edge Cases

- Input will always be a string.
- String may contain spaces, punctuation, or numbers — these are not vowels.
- Function should be case-insensitive (handle both uppercase and lowercase).
- An empty string should return 0.
*/

// O(n) T | O(n) S
function countVowels(str) {
  let vowels = new Set(["a", "e", "i", "o", "u"]); // Store vowels in lowercase
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.has(char)) count++;
  }

  return count;
}

countVowels("hello"); // → 2  (e, o)
countVowels("JavaScript"); // → 3  (a, a, i)
countVowels("bcd"); // → 0
countVowels("AEIOU"); // → 5
countVowels(""); // → 0
