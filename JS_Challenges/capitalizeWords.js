// Source: https://namastedev.com/practice/capitalize-words

/*
Capitalize Words

Write a function that takes a sentence as input and returns a new sentence where the first letter of each word is capitalized, and the rest of the letters are in lowercase.

Input: A string sentence containing one or more words separated by spaces.
Output: A new string where each word starts with an uppercase letter followed by lowercase letters.

Example Inputs & Outputs
// Example 1:
Input: "hello world"
Output: "Hello World"

// Example 2:
Input: "javaScript is FUN"
Output: "Javascript Is Fun"

// Example 3:
Input: "   multiple   spaces  "
Output: "Multiple Spaces"

// Example 4:
Input: ""
Output: ""

Constraints & Edge Cases
Input may have multiple spaces between words.
Input may contain uppercase, lowercase, or mixed-case characters.
Input can be an empty string.
Words can contain letters only; punctuation is not considered in this challenge.
Leading/trailing spaces should be trimmed in the final result.
*/

function capitalizeWords(sentence) {
  // Your implementation

  // trim and split the sentence
  let array = sentence.trim().split(/\s+/);

  // For each word, convert the first character to uppercase and the rest to lowercase and return the concatenated version
  let result = array.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // finally join them and return
  return result.join(" ");
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javaScript is FUN"));
console.log(capitalizeWords("   multiple   spaces  "));
console.log(capitalizeWords(""));
console.log(capitalizeWords(" "));
