1. Describe the biggest difference between `.forEach` & `.map`.
`.forEach` just runs a function over an array without returning anything.
`.map` will run a function over an array with each iterations return value being put into a new array that is returned.
2. What is the difference between a function and a method?
A function only has access to variables passed into it and variables in a greater scope.
While methods have access to the properties of the object they are being called on.
3. What is closure?
A closure is a function that maintains references to values in it's calling function,
even after the function that called it has returned.
4. Describe the four rules of the 'this' keyword.
  Window or global binding is when `this` refers to the global scope.
  Implicit binding of `this` refers to the object that is currently being called.
  Explicit binding is when a function is called with `.call` or `.apply`.
  New binding is when `this` is bound to a new object being created.
5. Why do we need super() in an extended class?
Because calling `super()` calls the constructor of the parent class.