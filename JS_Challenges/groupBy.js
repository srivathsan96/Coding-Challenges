// Source: https://namastedev.com/practice/groupbyarr-key

function groupBy(arr, key) {
  // Your implementation

  // Method 1: O(n^2) T | O(n) S
  if (arr.length <= 0) return {};

  let group = [];

  for (let obj of arr) {
    if (obj.hasOwnProperty(key)) {
      if (!group.includes(obj[key])) {
        group.push(obj[key]);
      }
    }
  }

  let final_obj = {};

  for (let keyName of group) {
    final_obj[keyName] = arr.filter((obj) => {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] === keyName) {
          return obj;
        }
      }
    });
  }

  return final_obj;
}

// Method 2: O(n) T | O(n) S
function groupBy2(arr, key) {
  let result = {};

  for (let obj of arr) {
    if (obj.hasOwnProperty(key)) {
      if (!result.hasOwnProperty(obj[key])) {
        result[obj[key]] = [];
      }

      result[obj[key]].push(obj);
    }
  }

  return result;
}

console.log(
  groupBy(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age"
  )
);

console.log(
  groupBy2(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age"
  )
);

// The function groupBy2 iterates through each element of the input array arr exactly once, performing constant-time checks and operations for each element. Specifically, for each object in arr, it checks if the object has the specified key, then checks if the key's value already exists in the result object, and potentially adds the object to the corresponding array.

// Time complexity:
// - The main loop runs n times, where n is the length of arr.
// - Each iteration involves constant-time property checks and object property access.
// - Overall, the time complexity is O(n).

// Space complexity:
// - In the worst case, all objects have unique values for the key, resulting in the result object containing n keys, each with an array of objects.
// - The total space used to store the result is proportional to the size of the input array, so the space complexity is O(n).

// In summary:
// - Time complexity: O(n)
// - Space complexity: O(n)
