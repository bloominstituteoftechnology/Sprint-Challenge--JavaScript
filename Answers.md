1. Describe the biggest difference between .forEach & .map.

forEach is used to execute some function for each element of an array. Map creates a new array based on a function.




2. What is the difference between a function and a method?

A method is passed an object and oeprates within a class. A function can oeprate on its own.




3. What is closure?

A closure provides access to an an outside scope from an inner function.




4. Describe the four rules of the 'this' keyword.

Implicit binding for 'this' is the most common rule. It finds what 'this' refers to by looking at the left of the dot during invocation.

Window binding is used by default. There is no dot during invocation, so the program assumes it refers to the window by default.

Explicit binding is when you use .call to invoke the function. .call allows you set 'this' to anything you say in the parenthesis.

Using new for 'this' crates an object and calls it as 'this'.




5. Why do we need super() in an extended class?

Super us used to access functions from the parent of an object.
