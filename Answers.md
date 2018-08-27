
1. Describe the biggest difference between `.forEach` & `.map`.
`.forEach` mutates an array and returns undefined, `.map` returns an array.
2. What is the difference between a function and a method?
Methods are just functions that are properties within objects.
3. What is closure?
closure is the space inside a function that has access to variables inside itself, inside the parent function if any, and inside the global scope.
4. Describe the four rules of the 'this' keyword.
this refers to the window when nothing else, (or global when not in a browser)
this refers to the new object when using the new keyword to create a new object,
this refers to the object that it is used in inside of an objects method, --implicit
this refers to the object that `.call`, `.apply`, or `.bind` are called in when this is passed as a parameter. This is explicitly defining what this refers to.
5. Why do we need super() in an extended class?
super() is how we inherit from a parent class.
