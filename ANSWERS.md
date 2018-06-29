# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
..* `.forEach` alters the original array and returns nothing(undefined), while `.map` does not and instead returns a new array.
2. What is the difference between a function and a method?
..* A method is a function, but methods are specifically functions that are properties on something else (like an object, or object-derivative).
3. What is closure?
..* Closures are a way of storing variables by using a function within a function and taking advantage of JS's call stack.
4. Describe the four rules of the 'this' keyword.
..* *Window binding*: default
..* *Implicit binding*: calling (a function using this) via the dot operator
..* *New binding*: using constructor and the `new` keyword
..* *Explicit binding*: When using the `.call`, `.bind`, or `.apply` methods.
5. Why do we need super() in an extended class?
..* It links up the parent class with a child class so that the child can call functions on the parent and also access its properties(via this). 