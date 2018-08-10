Describe the biggest difference between .forEach & .map.
.forEach() executes a provided function once for each array element whereas .map() creates a new array with the results of calling a provided function on every element in the calling array.

What is the difference between a function and a method?
They are both functions but a method is a function that is used as property inside an object.

What is closure?
When an inner function has access to the outer function's variables.

Describe the four rules of the 'this' keyword.
- Window binding is the default, this happens when you use the "this" keyword in the global scope.

- Implicit binding is the most common use of the "this" keyword, implicit binding is when you use the "this" keyword within an object or function.

- New binding is when your using a constructor function with the "this" keyword and you create a new object when you use the "new" keyword.

- Explicit binding is when you use the "this" keyword outside of an object or function.  To avoid binding to the window object you must pass arguments and parameters to your functions and methods so the "this" keyword knows what you're referring to.

Why do we need super() in an extended class?
super() is used to access and call functions on an object's parent. It is called to avoid duplicating the constructors parts' that are common between the parent and extended class.
