1. Describe the biggest difference between .forEach & .map.
   ==> The biggest difference between .forEach and .map is that .map returns a new array.

2. What is the difference between a function and a method?
   ==> The main difference between a function and a method is that functions are defined outside of objects or classes, while methods are defined inside of and part of objects or classes.

3. What is closure?
   Closure basically allows inner function to access the variables in the outer function or parent function scope, even after the outer function has returned.

4. Describe the four rules of the 'this' keyword.
   ==> These are the four rules:

   1. Window Binding is when code is executed using "this" keyword as part of simple function call then it refers to global or window object in case of browser. It is also default binding.
   2. Implicit Binding is when a method is called as a property of object, then "this" refers to the parent object of that method.
   3. New Binding is when a function is called with "new" keyword which is known as constrctor function, then "this" refers to that newly created instance.
   4. Explicit Binding is when a function is called using call, apply, and bind method then "this" refers to the value passed as first argument of call, apply or bind method.

5. Why do we need super() in an extended class?
   ==> We need super() to access and call functions on an object's parent.
