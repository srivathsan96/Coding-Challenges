// Source: https://namastedev.com/practice/reversewords
/*
ReverseWords

Write a function reverseWords that takes a sentence string as input and returns a new string where each word is reversed, but the order of the words remains the same.
Words are separated by spaces. Preserve the original spacing.

Example Inputs & Outputs
reverseWords("Hello World")           // → "olleH dlroW"  
reverseWords("JavaScript is fun")     // → "tpircSavaJ si nuf"  
reverseWords("  Lead  and Trail  ")   // → "  daeL  dna liarT  "  
reverseWords("")                      // → ""  
reverseWords("OneWord")               // → "droWenO"

Constraints & Edge Cases

- Input is always a string.
- Words are defined by space characters.
- Multiple spaces between words should be preserved.
- Leading/trailing spaces should also be preserved.
- Empty string input should return an empty string.
*/

function reverseWords(sentence) {
  return sentence
    .split(/(\s+)/) // split by whitespace (preserves the whitespaces)
    .map((part) => {
      // Reverse if not just whitespace
      return part.trim() ? part.split("").reverse().join("") : part;
    })
    .join("");
}

reverseWords("Hello World"); // → "olleH dlroW"
reverseWords("JavaScript is fun"); // → "tpircSavaJ si nuf"
reverseWords("  Lead  and Trail  "); // → "  daeL  dna liarT  "
reverseWords(""); // → ""
reverseWords("OneWord"); // → "droWenO"
