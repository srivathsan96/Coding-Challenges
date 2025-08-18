// Source: https://namastedev.com/practice/make-counter

/*
Make Counter

Create a function makeCounter that returns a counter object with methods to increment, decrement, and reset the counter. The counter should maintain its current value and provide these operations:

increment() – Increases the counter by 1 and returns the new value.
decrement() – Decreases the counter by 1 and returns the new value.
reset() – Resets the counter to its initial value (default: 0) and returns the reset value.
The counter should also allow an optional initial value.

Example Inputs & Outputs
const counter = makeCounter(5);
console.log(counter.increment()); // 6  
console.log(counter.increment()); // 7  
console.log(counter.decrement()); // 6  
console.log(counter.reset());     // 5  
console.log(counter.decrement()); // 4  

Constraints & Edge Cases

The counter should handle negative initial values.
The counter should not expose its internal value directly (encapsulation).
Methods should be chainable (optional bonus).
*/

function makeCounter(initialValue = 0) {
    // Your implementation
    let count = initialValue;

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = initialValue;
            return count;
        }
    }
}

