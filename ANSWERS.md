# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

forEach() — executes a provided function once for each array element.
map() — creates a new array with the results of calling a provided function on every element in the calling array.

2. What is the difference between a function and a method?

A function returns a value, but a procedure does not. A method is similar to a function, but is internal to part of a class.

3. What is closure?

A nested function that has access to the parent function's scope

4. Describe the four rules of the 'this' keyword.

When in the global scope, the value of “this” will be the window/console Object;
Whenever a function is called by a preceding dot, the object before that dot is this.
Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function
Whenever JavaScript’s call or apply method is used, this is explicitly defined


5. Why do we need super() in an extended class?

So that the class can inherit all the properties of the class being extended
