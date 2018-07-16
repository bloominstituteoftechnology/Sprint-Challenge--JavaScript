<!-- markdownlint-disable -->
# Sprint Challenge: Week 03 - JavaScript Fundamentals

**1.  Describe some of the differences between .forEach & .map.**

.forEach passes each element in an array to a callback function. No value is explictly returned from invoking .forEach, instead
the callback function produces a side-effect on its lexical environment (typically by mutating the original array that called .forEach).

.map also passes each element in an array from left to right to a callback function, like .forEach, but the return value of the 
callback function is used to create a new array of equal size to the calling array. 

**2.  Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?**

Type 1: Numbers: 1, 2, 2.5, etc.
Type 2: Strings: 'cesar', '', 'Pancakes'
Type 3: Booleans: true, false
Type 4: Arrays: an ordered set of indexed values, a special case of Objects where the key:value relationship is ordered using integer keys beginning at 0.
Type 5: Objects: a set of key:value pairs; unlike Arrays, Objects are not ordered and the keys are strings.

**3.  What is closure? Can you code out a quick example of a closure?**

A closure is an inner-function that has access to variables defined outside of its function scope. A closure has access to variables defined in its inner scope (variables defined within its own curly brackets), access to variables defined on the outer-calling function and the programs global scope variables.

let count = 0;

function increment() {
  count++;
}

console.log(count) // 0

increment();

console.log(count) // 1

**4.  Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)**
Principle 1, Global binding: When invoked in the global scope, this will refer to the Window/Global Object
Principle 2, Implicit binding: When invoked by a function called with a preeceding dot, this will refer to the object before the dot.
Principle 3, New binding: When invoked by the new keyword, this will refer to the instantiated object.
Principle 4, Explicit binding: When invoked by .call or .apply, this refers to the obj argument passed.

