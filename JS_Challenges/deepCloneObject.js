// Source: https://namastedev.com/practice/deep-clone-object

/*
Deep Clone Object

Create a function that performs a deep clone of a given JavaScript object. The function should handle nested objects, arrays, and primitive data types without retaining any references to the original object.

Example Inputs & Outputs

const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const cloned = deepClone(original);

console.log(cloned); // { a: 1, b: { c: 2 }, d: [3, 4] }
console.log(cloned !== original); // true
console.log(cloned.b !== original.b); // true
console.log(cloned.d !== original.d); // true

Constraints & Edge Cases
The function should handle objects and arrays of arbitrary depth.
It should not modify the original object.
The function should correctly clone primitive values (number, string, boolean, null, undefined, symbol).
Functions and special objects (like Date, RegExp) are not required to be cloned accurately.
*/

// Solution: Combines Recursion with Handling Arrays/Objects
function deepClone(obj) {
    // Your implementation

    // check if input is a primitive
    if (obj === null || (typeof obj !== 'object')) {
        return obj;
    }

    // check if input is a Date object
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // check if input is an array
    if (Array.isArray(obj)) {
        return obj.map((item) => deepClone(item));
    }

    //  check if input is an object
    let clone = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

// Other Ways to Deep Clone an Object:

// Simple One Liner But fails for special data types (Date, RegExp, Map, Set, undefined, Infinity, NaN, Symbol, functions), loses prototype chain, with a performance hit for very large objects. 
const cloned = JSON.parse(JSON.stringify(obj));

// Using structuredClone (Best Modern Approach)
const clonedObject = structuredClone(original);

// Using Library like Lodash
// Lodash: _.cloneDeep(obj)