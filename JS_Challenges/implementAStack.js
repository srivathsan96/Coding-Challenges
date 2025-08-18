// Source: https://namastedev.com/practice/implement-a-stack

/*
Implement a Stack

Implement a Stack data structure in JavaScript. A stack follows the Last-In-First-Out (LIFO) principle. Your implementation should include the following operations:

push(element): Add an element to the top of the stack and return size
pop(): Remove and return the top element from the stack
peek(): Return the top element without removing it
isEmpty(): Check if the stack is empty
size(): Return the number of elements in the stack
clear(): Remove all elements from the stack

Example Inputs & Outputs

const stack = new Stack();
stack.isEmpty();  // true
stack.push(10);   // 1
stack.push(20);   // 2
stack.push(30);   // 3
stack.size();     // 3
stack.peek();     // 30
stack.pop();      // 30
stack.peek();     // 20
stack.clear();
stack.isEmpty();  // true

Constraints & Edge Cases

Handle pop and peek operations on an empty stack
Ensure proper memory management (no memory leaks)
The stack should handle any JavaScript data type as elements
*/

// O(n) S
class Stack {
    constructor() {
        // Initialize your stack
        this.arr = [];
    }

    // O(1) T
    push(element) {
        // Add element to the top
        this.arr.push(element);
        return this.arr.length;
    }
    
    // O(1) T
    pop() {
        // Remove and return top element
        if (this.isEmpty()) return undefined;
        return this.arr.pop();
    }
    
    // O(1) T
    peek() {
        // Return top element without removing
        if (this.isEmpty()) return undefined;
        return this.arr[this.arr.length - 1];
    }
    
    // O(1) T
    isEmpty() {
        // Check if stack is empty
        return this.arr.length === 0;
    }
    
    // O(1) T
    size() {
        // Return number of elements
        return this.arr.length;
    }
    
    // O(n) T
    clear() {
        // Remove all elements
        this.arr = [];
    }
}