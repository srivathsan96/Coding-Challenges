// Source: https://namastedev.com/practice/list-format

/*
List Format

Write a function that takes an array of strings and returns a human-readable list formatted with commas and the word "and" before the last item. This is similar to how natural language lists are formatted in English.

For example:

["apple"] → "apple"
["apple", "banana"] → "apple and banana"
["apple", "banana", "cherry"] → "apple, banana and cherry"
["", "two", ""] → ", two and "

Example Inputs & Outputs
formatList([]) 
// → ""

formatList(["apple"]) 
// → "apple"

formatList(["apple", "banana"]) 
// → "apple and banana"

formatList(["apple", "banana", "cherry"]) 
// → "apple, banana and cherry"

formatList(["one", "two", "three", "four"]) 
// → "one, two, three and four"
Constraints & Edge Cases

The input will always be an array of strings
Return an empty string if the array is empty
Handle 1-item, 2-item, and 3+ item cases correctly
Items may include empty strings, but treat them as valid values
*/

// O(n) T | O(n) S
function formatList(items) {
  const len = items.length;

  if (len === 0) return "";
  if (len === 1) return items[0];
  if (len === 2) return `${items[0]} and ${items[1]}`;

  return items.slice(0, len - 1).join(", ") + " and " + items[len - 1];
}