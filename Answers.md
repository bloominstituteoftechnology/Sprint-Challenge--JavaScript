<!-- 1. Describe the biggest difference between .forEach & .map: -->

.forEach loops thru an array without returning a new array.

.map actually return the new array.

<!-- 2. What is the difference between a function and a method? -->

A function is a piece of code that is called by name. It can be passed data to operate on and can optionally return data.

A method is a piece of code that is called by a name that is associated with an object.

<!-- 3. What is closure? -->

A closure is an inner function that has access to the outer function's variables—scope chain.

<!-- 4. Describe the four rules of the 'this' keyword. -->

Window binding is the default, this happens when you use the "this" keyword globally.

Implicit binding is when you use the "this" keyword within an object or function.

New binding is used with a constructor function. The "this" keyword creates a new object when you use the "new" keyword.

Explicit binding is when you use the "this" keyword outside of an object or function.

<!-- 5. Why do we need super() in an extended class? -->

super() gives us access/binds to the "this" keyword.
