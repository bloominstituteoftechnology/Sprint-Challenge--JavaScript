1. Describe the biggest difference between `.forEach` & `.map`.
    .forEach() doesn't have a return value, while .map() returns a new array.

2. What is the difference between a function and a method?
    A function stands alone, while a method is basically a function attached to an object.

3. What is a closure?
    A closure is a nested function with reference(s) to its lexical environment.

4. Describe the four rules of the 'this' keyword.
    Window/Global: When in the Window/Global scope, this refers to the Window Object.
    Implicit: When in the Implicit scope, this refers to the preceeding object in the obj.method().
    New: When a constructor is used, this refers to the instance of the object being created.
    Explicit: Whenever call or apply methods are used, this is explicitly defined.

5. Why do we need super() in an extended class?
    To pass any new attributes/functions back up to the parent constructor.
