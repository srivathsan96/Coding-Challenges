// Source: https://namastedev.com/practice/validate-palindrome

/*
Validate Palindrome

JavaScript
easy
10 mins

Write a function that determines whether a given string is a valid palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward. Ignore cases and all non-alphanumeric characters.

Input: A single string str.

Output: Return true if the string is a valid palindrome, false otherwise.

Example Inputs & Outputs
// Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

// Example 2:
Input: "race a car"
Output: false

// Example 3:
Input: " "
Output: true

// Example 4:
Input: "1234"
Output: false

// Example 5:
Input: "!!!@@@###"
Output: true. // ignores all the non alphanumeric characters

Constraints & Edge Cases
The input string may contain letters, numbers, spaces, and special characters.
Ignore cases (treat uppercase and lowercase the same).
Ignore all non-alphanumeric characters.
An empty string or a string with only non-alphanumeric characters is considered a valid palindrome.
*/

// Space & Time Complexity: O(n) T | O(n) S

function checkPalindrome2(str) {

    // Return true if str is empty
    if(str.length === 0) return true;

    // Replace non-alphanumeric characters with "" using regex
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Return true if no alphanumeric characters present in the str
    if(cleaned.length === 0) return true;

    // Reverse the cleaned string
    let reversed = cleaned.split("").reverse().join("");

    // Return the result of comparison
    return reversed === cleaned;
}
console.log("");
console.log(checkPalindrome2("A man, a plan, a canal: Panama"));
console.log(checkPalindrome2("race a car"));
console.log(checkPalindrome2(" "));
console.log(checkPalindrome2("1234"));
console.log(checkPalindrome2("!!!@@@###"));


/*
The function checkPalindrome2 processes the input string to determine if it is a palindrome, considering only alphanumeric characters and ignoring case.

Time Complexity:
- Replacing non-alphanumeric characters with regex: O(n), where n is the length of the input string, since it scans through the entire string once.
- Converting to lowercase: O(n).
- Splitting the cleaned string into an array: O(n).
- Reversing the array: O(n).
- Joining the reversed array back into a string: O(n).
- Comparing the cleaned and reversed strings: O(n).

Overall, the dominant operations are linear scans and transformations, resulting in a total time complexity of O(n).

Space Complexity:
- The cleaned string stores at most all characters from the original string, so O(n).
- The reversed array and string also require O(n) space.
- Additional variables are constant space.

Therefore, the overall space complexity is O(n).
*/