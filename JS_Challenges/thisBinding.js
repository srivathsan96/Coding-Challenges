// Source: https://www.algoexpert.io/frontend/coding-questions/this-binding

/*
This Binding

Without calling Function.prototype.call, Function.prototype.apply or Function.prototype.bind, implement the following three similar functions on the Function prototype:

1. myCall(thisContext, ...args)

myCall should call the original function with thisContext bound to the function's this keyword, passing all of the remaining args as individual arguments to the function.

The return value of the original function should be returned by myCall.

2. myApply(thisContext, args)

myApply should call the original function with thisContext bound to the function's this keyword, passing all of the values in the args array as individual arguments to the function.

The return value of the original function should be returned by myApply.

3. myBind(thisContext, ...args)

myBind should return a new function that calls the original function with thisContext bound to the function's this keyword, passing all of the remaining args as individual arguments to the function. The new function should accept optional arguments, which should also be passed to the original function, after the args originally passed to myBind.

The new function should return the return value of the original function.

You can assume that the thisContext argument passed to each function will always be an object. When binding this object to the this keyword, the original object should be bound, not a clone. You can also assume that the original function will be declared using standard function syntax (i.e., it won't be an arrow function).

You should minimize side-effects as much as possible, ensuring that thisContext remains unchanged after calls to these functions and ensuring that standard iteration through properties on thisContext works normally.

Sample Usage

const obj = {num: 0};

function logNums(x, y) {
  console.log(this.num, x, y);
}

logNums.myCall(obj, 1, 2);
logNums.myApply(obj, [1, 2]);

const boundFunction = logNums.myBind(obj, 1);
boundFunction(2);

Sample Output

// Console logs:
0 1 2 // From myCall.
0 1 2 // From myApply.
0 1 2 // From myBind.
*/

Function.prototype.myCall = function (thisContext, ...args) {
  // Write your code here.
  const fn = Symbol(); // create a symbol (unique property)
  thisContext[fn] = this; // function to be called
  const result = thisContext[fn](...args); // store the result of the function
  delete thisContext[fn]; // delete the symbol we just created
  return result; // return the result
};

Function.prototype.myApply = function (thisContext, args = []) {
  // Write your code here.
  return this.myCall(thisContext, ...args);
};

Function.prototype.myBind = function (thisContext, ...args) {
  const fn = this;
  // Write your code here.
  return function (...args2) {
    return fn.myApply(thisContext, [...args, ...args2]);
  };
};