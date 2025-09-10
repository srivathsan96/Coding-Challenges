// Source: https://www.algoexpert.io/frontend/coding-questions/memoize

/*
Memoize

Write a memoize function that takes in a required callback function and an optional resolver function. The memoize function returns a memoized version of the callback function, which is defined as follows:

All of the return values of the memoized function are cached. If the memoized callback is called with an existing cache key (defined below), then that cached value is returned without invoking the callback again.

The cache key is defined based on the optional resolver function. If a resolver function is not provided, then the cache key is the result of passing the memoized function arguments to JSON.stringify as an array. If a custom resolver function is provided, then the arguments should be individually passed to that function instead, and its return value will be the cache key (note that this can be of any type).

The memoized function should also have three methods:
- clear(): Clears out the cache.
- delete(...args): Deletes the cache entry corresponding to the passed arguments if one exists.
- has(...args): Returns a boolean of true if the cache has an entry corresponding to the passed arguments, otherwise false.

For simplicity, you don't need to worry about binding a this context (i.e., you can assume that the callback doesn't reference this).

Sample Usage

const callback = (...args) => args;
const memoized = memoize(callback);
memoized(123); // calls callback, returns 123
memoized(123); // returns 123
memoized(123, 'abc'); // calls callback, returns [123, 'abc']

const memoized2 = memoize(callback, args => args[0]);
memoized2(123); // calls callback, returns 123
memoized2(123); // returns 123
memoized2(123, 'abc'); // returns 123
memoized2('abc', 123); // calls callback, returns ['abc', 123]
memoized2('abc'); // returns ['abc', 123]
*/

// O(n) Time (per call), for key generation + callback execution time.
// O(m * s) Space, where m is the number of unique argument sets and s is the size of each stored value.
function memoize(callback, resolver) {
  // Write your code here.
  const cache = new Map();

  function getCacheKey(args) {
    return resolver != null ? resolver(...args) : JSON.stringify(args);
  }

  function memoized(...args) {
    const cacheKey = getCacheKey(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const output = callback(...args);
    cache.set(cacheKey, output);
    return output;
  }

  memoized.clear = function () {
    cache.clear();
  };

  memoized.delete = function (...args) {
    const cacheKey = getCacheKey(args);
    cache.delete(cacheKey);
  };

  memoized.has = function (...args) {
    const cacheKey = getCacheKey(args);
    return cache.has(cacheKey);
  };

  return memoized;
}
