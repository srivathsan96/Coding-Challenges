// Source: https://namastedev.com/practice/objectassign

/*
Object.assign()

The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. Your task is to replicate this functionality.

If the target is null or undefined, throw a TypeError.
Only enumerable and own properties should be copied.
Later source properties overwrite earlier ones if they have the same key.
The method should return the target object.

Example Inputs & Outputs

customAssign({a: 1}, {b: 2}) → {a: 1, b: 2}  
customAssign({a: 1}, {a: 2, b: 3}) → {a: 2, b: 3}  
customAssign({}, {a: undefined}, {b: null}) → {a: undefined, b: null}  
customAssign({}, null, {a: 1}) → throws TypeError  

Constraints & Edge Cases

target must not be null or undefined
Only own, enumerable properties of source objects should be copied
If a source is null or undefined, it should be skipped (not throw an error)
Must return the modified target object
Symbol properties should be ignored in this simplified version
*/

// O(n * m) T | O(1) S
function customAssign(target, ...sources) {
  // Your implementation
  if (target === null || target === undefined)
    throw new TypeError(
      "Target is null or undefined and cannot be converted to object"
    );

  target = Object(target);

  if (typeof target === "object" && sources) {
    for (let obj of sources) {
      if (obj === null || obj === undefined) continue;
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          target[key] = obj[key];
        }
      }
    }
  }

  return target;
}
