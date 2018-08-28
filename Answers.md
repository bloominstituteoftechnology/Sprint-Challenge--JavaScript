# JavaScript Comprehension Questions 

1. Describe the biggest difference between `.forEach` & `.map`.
`forEach` doesn't actually return anything, it simply calls the provided function on each element in the array. `map` also calls a provided function but returns values and creates a new array of the same size. 

2. What is the difference between a function and a method?
A method is on an object and a function is independent of an object. 

3. What is closure?
A closure gives you access to an outer function's scope from an inner function.

4. Describe the four rules of the 'this' keyword.
- New: If the `new` keyword is used when calling the funcion, `this` inside the function is a brand new object.
- Explicit: If `apply`, `call`, or `bind` are used to call a function, `this` inside a function is the object that is passed as the argument. 
- Implicit: If dot notation is used to invoke a function, `this` is the object that the function is a property of.
- Window: If a function is invoked without any of the above conditions then `this` is the global object, i.e. `window` in most cases.

5. Why do we need super() in an extended class?
It allows the object to access and call functions from the objects parents.
Answers.md