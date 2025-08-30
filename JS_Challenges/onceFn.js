// Source: https://namastedev.com/practice/oncefn

/*
once(fn)

Implement the function once(fn) which accepts another function fn and returns a new function.
This new function allows fn to be executed only once, no matter how many times it is called.
On the first call, fn should be executed normally and its result returned.
On subsequent calls, return the result from the first execution, without re-invoking fn.

Input
A function fn (could be synchronous or asynchronous)
The returned function can take any number of arguments

Output
A function that:
Calls fn only once.
Returns the first result on all calls after the first.

Edge Cases
Function with no arguments:
fn might be called without any arguments. Ensure your implementation still works.

Function returning undefined or null:
fn may return undefined or null as a valid result. These should be cached and returned on subsequent calls.

Function throwing errors:
If fn throws an error during the first call, subsequent calls should not cache the error but may re-invoke fn (depending on implementation choice).

Asynchronous function that rejects:
If fn returns a Promise that rejects, subsequent calls might retry or return the same rejected Promise, depending on your implementation.

Multiple calls before the first call resolves (async case):
For async fn, if multiple calls are made before the first Promise resolves, all should receive the same Promise.

fn relies on this context:
Your implementation should preserve the original this context when invoking fn.

Examples
Basic usage
function add(a, b) {
  return a + b;
}

const onceAdd = once(add);

console.log(onceAdd(2, 3)); // Output: 5 (fn executed)
console.log(onceAdd(4, 5)); // Output: 5 (cached result)
console.log(onceAdd(10, 20)); // Output: 5 (cached result)

Function with no arguments

function greet() {
  return "Hello Namaste Dev!";
}

const onceGreet = once(greet);

console.log(onceGreet()); // Output: "Hello Namaste Dev!"
console.log(onceGreet()); // Output: "Hello Namaste Dev!"

Function returning undefined

function doNothing() {
  return undefined;
}

const onceDoNothing = once(doNothing);

console.log(onceDoNothing()); // Output: undefined
console.log(onceDoNothing()); // Output: undefined

Function that throws an error

let count = 0;
function sometimesThrows() {
  if (count === 0) {
    count++;
    throw new Error("Oops!");
  }
  return "Success";
}

const onceThrow = once(sometimesThrows);

try {
  onceThrow(); // Throws error
} catch (e) {
  console.log(e.message); // Output: "Oops!"
}

console.log(onceThrow()); // Output: "Success" (called again if you handle errors this way)

Async function example

async function fetchData() {
  console.log("Fetching...");
  return "Data";
}

const onceFetch = once(fetchData);

onceFetch().then(console.log); // Logs "Fetching..." then "Data"
onceFetch().then(console.log); // Immediately logs "Data", no second fetch
*/

// O(1) T || O(1) S

function once(fn) {
  // Your code here ...
  let called = false;
  let firstCallResult;
  return function (...args) {
    if (!called) {
      try {
        firstCallResult = fn.apply(this, args);
        called = true;
      } catch (error) {
        throw error;
      }
    }
    return firstCallResult;
  }
}