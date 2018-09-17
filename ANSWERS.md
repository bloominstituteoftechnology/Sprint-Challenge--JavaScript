# Your responses to the short answer questions should be laid out here using Mark Down.
change here
1. Describe the biggest difference between `.forEach` & `.map`.
Map creates a new array from the results of calling a function on each item in an array. forEach executes a function, but does not build an array.
2. What is the difference between a function and a method?
A method is a function that is the value corresponding to a key on an object.
3. What is closure?
A function plus that function's local environment. Variables can be declared inside the closure without being accessible from outside the closure.
4. Describe the four rules of the 'this' keyword.
These questions/tests are applied in order to determine what 'this' refers to:
 - was the function called using `new`?
 - are call(), apply(), or bind() being used?
 - Is the function called directly as a method on the object?
 - Is the function being called from the global scope?
5. Why do we need super() in an extended class?
super() gives the child access to the parent's method definitions.